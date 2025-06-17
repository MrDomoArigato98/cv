import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../reset.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import "typeface-roboto";
import AppRoutes from "../routes"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
