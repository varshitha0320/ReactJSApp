import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSignup = () => {
  
    if (!user.username || !user.password) {
      setError("Username and password cannot be empty.");
      return;
    }

   
    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.username === user.username) {
      setError("Username already taken. Please choose another one.");
      return;
    }

    
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      <input 
        type="text" 
        placeholder="Username" 
        value={user.username}
        onChange={(e) => setUser(prev => ({ ...prev, username: e.target.value }))}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={user.password}
        onChange={(e) => setUser(prev => ({ ...prev, password: e.target.value }))}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
