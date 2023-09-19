import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import FacebookLogin from "react-facebook-login";
import Cookies from "js-cookie";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const Login = () => {
  const { user, setUser } = useUserContext();
  const navigation = useNavigate();

  const responseFacebook = async (response) => {
    if (!response.error && response.status !== "unknown") {
      const logUser = await login({
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        token: response.accessToken,
      });

      setUser(logUser.user);
      Cookies.set("token", logUser.token, {
        expires: response.expiresIn / 86400,
        sameSite: "strict",
      });
    }
  };

  // check if user login
  useEffect(() => {
    if (user) {
      navigation("/app");
    }
  }, [user]);
  return (
    <>
      <main className="login_section">
        <section className="section_right linear-gradient">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <h1>Welcome HHD software</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </section>
        <section className="section_left">
          <div className="login_from_section">
            <h2>LOGIN</h2>
            {/* <form>
              <div className="form_input_field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form_input_field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <p>Forgot password?</p>
              <button className="button linear-gradient login_button">
                Login
              </button>
              <strong>OR</strong>
            </form> */}
            <FacebookLogin
              appId="204926809267166"
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile,email,ads_read,ads_management,leads_retrieval"
              callback={responseFacebook}
              cssClass="button linear-gradient facebook_button"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
