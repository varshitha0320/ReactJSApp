import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./loginpage";
import Products from "./ProductPage";
import "./Login.css";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route 
          path="/products" 
          element={isAuthenticated ? <Products setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
