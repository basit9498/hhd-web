import React from "react";
import Logo from "../assets/images/logo.png";
import FacebookIcon from "../assets/images/facebook.svg";

const Login = () => {
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
            <form>
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
              <button className="button linear-gradient facebook_button">
                <img src={FacebookIcon} alt="facebook-icon" />
                <span>Login with facebook</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
