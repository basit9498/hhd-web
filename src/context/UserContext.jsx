import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { userAdAccountInsights, userMe } from "../services/user.service";
import { fbExchangeToken } from "../services/auth.service";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userAdAccInsight, setUserAdAccInsight] = useState(null);

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
      if (getUpdateToken?.token) {
        Cookies.set("token", getUpdateToken?.token, {
          sameSite: "strict",
        });
        await adAccountInsightsHandler();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const adAccountInsightsHandler = async () => {
    const response = await userAdAccountInsights();
    if (response?.data) {
      setUserAdAccInsight(response?.data);
    }
  };

  const shareValue = {
    user,
    setUser,

    userAdAccInsight,
    setUserAdAccInsight,

    logout,
    tokenExchangeHandler,
    adAccountInsightsHandler,
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
