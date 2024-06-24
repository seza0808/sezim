import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../helpers/const";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);
  //!register
  const handleRegister = async (formData) => {
    try {
      await axios.post(`${API}/user/registers/`, formData);
    } catch (error) {
      setError(error);
    }
  };
  //!login
  const handleLogin = async (formData, email) => {
    try {
      const { data } = await axios.post(`${API}/user/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  //!logOut
  const handleLogOut = () => {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/");
  };

  //!checkAuth
  const checkAuth = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const { data } = await axios.post(`${API}/user/refresh/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: data, refresh: tokens.refresh })
      );
      const email = JSON.parse(localStorage.getItem("email"));
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    handleLogin,
    handleRegister,
    currentUser,
    error,
    handleLogOut,
    checkAuth,
  };
  return (
    <div>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
