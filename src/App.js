import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import CreatePortfolio from "./Components/CreatePortfolio";
import { apiKey } from "../src/config/keys";
function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="App">
      {showModal && <CreatePortfolio />}
      <div className="navbar">
        <h1>Stock Portfolio Builder</h1>
        <p className="btn btn--create">Create New</p>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
