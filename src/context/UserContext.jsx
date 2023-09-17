import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkLogin = () => {
    const user = localStorage.getItem("authToken");
    setUser(JSON.parse(user));
  };

  const clearAll = () => {
    setUser(null);
  };
  const shareValue = {
    user,
    setUser,

    clearAll,
  };

  //
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <UserContext.Provider value={shareValue}>{children}</UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
