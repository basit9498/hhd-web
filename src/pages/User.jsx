import React from "react";
import Layout from "../components/Layout";
import { useUserContext } from "../context/UserContext";

const User = () => {
  const { user, tokenExchangeHandler } = useUserContext();

  return (
    <>
      <Layout>
        <section className="user_card_section">
          <img src={user?.picture?.data?.url} alt="user-avatar" />
          <div className="user_info_section">
            <div>
              <p>Name</p>
              <h1>{user?.name}</h1>
            </div>
            <div>
              <p>Email</p>
              <h1>{user?.email}</h1>
            </div>
          </div>
        </section>
        <section className="middle_section">
          <button
            className="button linear-gradient"
            onClick={tokenExchangeHandler}
          >
            Generate Token
          </button>
        </section>
      </Layout>
    </>
  );
};

export default User;
