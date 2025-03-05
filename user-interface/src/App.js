import React, { useState } from "react";
import Login from "./LoginPage";
import Dashboard from "./DashBoard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard onLogout={setIsAuthenticated} />
      ) : (
        <Login onLogin={setIsAuthenticated} />
      )}
    </div>
  );
}

export default App;
