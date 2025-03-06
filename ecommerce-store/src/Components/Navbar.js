import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav>
      <button onClick={() => navigate("/products")}>Products</button>
      <button onClick={() => navigate("/cart")}>Cart</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
