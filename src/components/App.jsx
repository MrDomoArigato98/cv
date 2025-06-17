import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../reset.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import AppRoutes from "../routes"
import "typeface-roboto";
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
