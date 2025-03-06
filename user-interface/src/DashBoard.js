import React from "react";

const Dashboard = ({ onLogout }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome to the Dashboard</h2>
      <p>You have successfully logged in!</p>
      <button onClick={() => onLogout(false)} style={{ padding: "10px 20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
