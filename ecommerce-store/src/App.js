import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import ProductPage from "./Pages/Product";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Navbar from "./Components/Navbar";
import "./Login.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [cart, setCart] = useState([]);

  const handleAuth = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem("isAuthenticated", status);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={handleAuth} />}
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/products" /> : <Login setIsAuthenticated={handleAuth} />} />
        <Route path="/products" element={isAuthenticated ? <ProductPage cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
        <Route path="/payment" element={isAuthenticated ? <Payment setCart={setCart} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
