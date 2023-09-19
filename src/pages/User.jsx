import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useUserContext } from "../context/UserContext";

const User = () => {
  const {
    user,
    userAdAccInsight,
    tokenExchangeHandler,
    adAccountInsightsHandler,
  } = useUserContext();

  useEffect(() => {
    adAccountInsightsHandler();
  }, []);

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

          <div className="ada_insight_div">
            <h2>User&#39;s advertising accounts details.</h2>
            {userAdAccInsight?.data?.map((adAccIns) => {
              return Object.keys(adAccIns).map((adAccInsData) => {
                return (
                  <div className="ada_insight_inside">
                    <div>{adAccInsData}</div>
                    <div>{adAccIns[adAccInsData]}</div>
                  </div>
                );
              });
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default User;
