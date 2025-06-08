import { useState } from "react";
import "./reset.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
function App() {
  return (
    <>
        <Navbar test="test" />
        <Maincontent />
    </>
  );
}

export default App;
