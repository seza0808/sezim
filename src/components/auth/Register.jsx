import React, { useState } from "react";
import h from "../assets/images.png";
import n from "../assets/Google__G__logo.svg.webp";
import mo from "../assets/fb_icon_325x325.png";
import pol from "../assets/Telegram_2019_Logo.svg.webp";
import mu from "../assets/1200x630bb.png";
import "./Register.css";
import { useAuth } from "../../context/AuthContextProvider";
const Register = () => {
  const { handleRegister } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const handleSave = () => {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Заполните данные!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", password);
    handleRegister(formData);
    console.log(formData);
  };
  return (
    <section>
      <div style={{ marginTop: "50px" }} className="register">
        <img src={h} />
        <h1>Sign up and immerse yourself in music</h1>
        <div className="register-log">
          <form>
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="name@domain.com"
            />
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              style={{ marginBottom: "55px" }}
            />

            <button onClick={handleSave}>Further</button>
          </form>
        </div>
        <div className="line-container">
          <span className="line-text">or</span>
        </div>

        <div className="images">
          <button className="a-btn" id="ol">
            <img src={n} />
            <span>Register with Google</span>
          </button>

          <button className="a-btn" id="li">
            <img src={mo} />
            <span>Register via Facebook</span>
          </button>

          <button className="a-btn" id="mi">
            <img src={pol} />
            <span>Register with Telegram </span>
          </button>

          <button className="a-btn" id="bi">
            <img src={mu} />
            <span>Register with Twitter</span>
          </button>
        </div>
        <hr />
        <div className="text">
          <div style={{ paddingLeft: "10px" }}>
            <span>Already have an account? </span>
            <a href="#"> Enter it.</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
