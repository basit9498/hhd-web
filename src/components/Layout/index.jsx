import React from "react";
import Aside from "./Aside";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <main className="layout_section">
        <Aside />
        <section className="layout_body ">
          <Header />
          <main>{children}</main>
        </section>
      </main>
    </>
  );
};

export default Layout;
