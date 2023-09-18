import React from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useUserContext();
  const navigation = useNavigate();

  const logoutHandler = () => {
    logout();
    navigation("/");
  };
  return (
    <>
      <header className="header_section">
        <div className="user_detail">
          <img src={user?.picture?.data?.url} alt="user-avatar" />
          <button className="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
