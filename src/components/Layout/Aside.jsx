import React from "react";
import Logo from "../../assets/images/logo.png";

const Aside = () => {
  return (
    <>
      <aside className="aside_section ">
        <div>
          <img src={Logo} alt="Logo" />
          <p>HHD Software</p>
        </div>
      </aside>
    </>
  );
};

export default Aside;
