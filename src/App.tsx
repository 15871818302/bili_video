import React from "react";
import "./App.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "./components/header";

function App() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  return (
    <div className="App">
      <Header pathName={pathName}></Header>
      this is start
      <Button type="primary" onClick={() => navigate("/home")}>
        first click
      </Button>
    </div>
  );
}

export default App;
