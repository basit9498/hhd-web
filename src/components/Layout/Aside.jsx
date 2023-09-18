import React from "react";
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.svg";

const Aside = () => {
  return (
    <>
      <aside className="aside_section ">
        <div className="logo_section">
          <img src={Logo} alt="Logo" />
          <p>HHD Software</p>
        </div>
        <section className="menu_item_section">
          <div className="menu_item ">
            <img src={UserIcon} alt="user-icon" />
            <span>User</span>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Aside;
