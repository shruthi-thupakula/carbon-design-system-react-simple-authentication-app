import React from "react";
import LeftSideContent from "./components/left-side-content";
import MainContent from "./components/main-content";
import "./style.css";
function App() {
  return (
    <div className="container">
      <LeftSideContent />
      <MainContent />
    </div>
  );
}

export default App;
