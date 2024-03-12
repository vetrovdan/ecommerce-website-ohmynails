import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Sizing from "./components/pages/Sizing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Shop" exact element={<Shop />} />
          <Route path="/Sizing" exact element={<Sizing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
