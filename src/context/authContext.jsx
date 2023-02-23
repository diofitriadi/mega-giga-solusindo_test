import { createContext, useState, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function login(email, password) {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      setUser(response.data.email, response.data.password);
    } catch (error) {
      setError(error.response.data.message);
    }

    setLoading(false);
  }

  const clearAuthData = () => {
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    error,
    loading,
    login,
    clearAuthData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
