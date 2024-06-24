import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { API } from "../helpers/const";
import axios from "axios";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);
const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(false);
  //!register
  const handleRegister = async (formData) => {
    try {
      await axios.post(`/user/register/`, formData);
    } catch (error) {
      setError(error);
    }
  };
  //!login
  const handleLogin = async (formData, email) => {
    try {
      const { data } = await axios.post(`/user/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", JSON.stringify(email));
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  const values = {
    handleLogin,
    handleRegister,
    currentUser,
    error,
  };
  return (
    <div>
      <authContext.Provider value={values}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
