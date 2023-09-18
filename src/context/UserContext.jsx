import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { userMe } from "../services/user.service";
import { fbExchangeToken } from "../services/auth.service";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const checkLogin = async () => {
    try {
      const userCookie = Cookies.get("token");
      if (userCookie) {
        const response = await userMe();
        setUser(response.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  const tokenExchangeHandler = async () => {
    try {
      const getUpdateToken = await fbExchangeToken();
      Cookies.set("token", getUpdateToken?.token, {
        // secure: true,
        // expires: 1 / 1440,
        sameSite: "strict",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const shareValue = {
    user,
    setUser,

    logout,
    tokenExchangeHandler,
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
