import React, { useState, useContext } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://159.223.57.121:8090/auth/login",
        {
          username: username,
          password: password,
        }
      );

      const token = response.data.data.token;
      console.log(token);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);
      setUser({ token: token });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, useAuth };
