import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
   
    if (!credentials.username || !credentials.password) {
      setError("Please enter both username and password.");
      return;
    }

   
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === credentials.username && storedUser.password === credentials.password) {
      setUser(storedUser);
      alert("Logged in successfully!");
      navigate("/products");
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input 
        type="text" 
        placeholder="Username" 
        value={credentials.username} 
        onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={credentials.password} 
        onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
