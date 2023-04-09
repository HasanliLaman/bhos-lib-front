import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import FooterContainer from "../components/Footer/FooterContainer";
import NavbarContainer from "../components/Navbar/NavContainer";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <>
      <NavbarContainer />
      {children}
      <FooterContainer />
    </>
  );
};

export default ProtectedRoute;
