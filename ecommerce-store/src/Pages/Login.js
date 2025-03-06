import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "varshitha@gmail.com" && password === "varshitha") {
      setIsAuthenticated(true);
      navigate("/products");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-container" style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      style={{ padding: "8px", marginBottom: "10px", width: "250px" }}/>
      <br/>
      <input type="password" placeholder="Password" value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      style={{ padding: "8px", marginBottom: "10px", width: "250px" }} />
      <br/>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
