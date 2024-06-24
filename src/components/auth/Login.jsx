import React, { useState } from "react";
import h from "../assets/images.png";
import n from "../assets/Google__G__logo.svg.webp";
import mo from "../assets/fb_icon_325x325.png";
import pol from "../assets/Telegram_2019_Logo.svg.webp";
import mu from "../assets/1200x630bb.png";
import { useAuth } from "../../context/AuthContextProvider";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();
  const handleSave = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните данные!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email);
  };
  return (
    <div className="bgcDiv">
      <header>
        <div className="logo"></div>
      </header>
      <section>
        <div className="App">
          <img src={h} />
          <h1>Login to Spotify</h1>

          <div className="account-connect">
            <button style={{ cursor: "pointer" }} className="a-c-btn" id="g">
              <img src={n} />
              <span>Login with Google </span>
            </button>
            <button className="a-c-btn" id="f">
              <img src={mo} />
              <span>Login with Facebook</span>
            </button>

            <button className="a-c-btn" id="m">
              <img src={pol} />
              <span>Login with Telegram</span>
            </button>

            <button className="a-c-btn" id="m">
              <img src={mu} />
              <span>Login with Twistter</span>
            </button>
          </div>

          <hr />

          <div className="log-in">
            <form>
              <label>Login or username</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
              />
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
              />

              <div className="switch">
                <input type="checkbox" id="switch" checked />
                <label for="switch"></label>
                <span>Remember me</span>
              </div>
              <button onClick={handleSave}>Log In</button>

              <a href="#">Forgot your password?</a>
            </form>
          </div>

          <hr />

          <div className="last">
            <span>Don't you have an account?</span>
            <a href="#">Sign up for Spotify </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
