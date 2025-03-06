import React, { useState } from "react";

const LoginForm = () => {
  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle login logic
  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    // Simulate authentication
    if (email === "user@example.com" && password === "password") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "5px", padding: "8px", width: "250px" }}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "5px", padding: "8px", width: "250px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px", marginTop: "10px" }}>
        Login
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
