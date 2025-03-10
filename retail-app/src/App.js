import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Dashboard";
import Login from "./Components/LoginForm";
import Signup from "./Components/SignUpForm";
import Products from "./Components/Product";
import "./style.css";


const App = () => {
  // Load user from localStorage on app start
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    // Save user to localStorage whenever it changes
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={user ? <Products setUser={setUser} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
