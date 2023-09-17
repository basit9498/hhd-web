import React from "react";
import Avatar from "../../assets/images/User.png";

const Header = () => {
  return (
    <>
      <header className="header_section">
        <div>
          <img src={Avatar} alt="user-avatar" />
        </div>
      </header>
    </>
  );
};

export default Header;
