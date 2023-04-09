import { createContext, useState } from "react";
import Cookie from "../utils/Cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const tokenCookie = new Cookie("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!!tokenCookie.getCookie());

  const logInUser = (token) => {
    tokenCookie.setCookie(token);
    setIsLoggedIn(true);
  };

  const logOutUser = () => {
    tokenCookie.deleteCookie();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
