import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [email, setEmail] = useLocalStorage("email", null);
  const navigate = useNavigate();

  const login = async (token, email) => {
    setUser(token);
    setEmail(email);
    navigate("./dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    setEmail(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      email,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
