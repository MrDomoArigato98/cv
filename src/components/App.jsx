import { useState } from "react";
import "../reset.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import "typeface-roboto";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigate = (e) => {
    e.preventDefault();
    console.log(e.target.text);
    setCurrentPage(e.target.text);
  };

  const pageToRender = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About me":
        return <AboutMe />;
      case "Resume":
        // return <AboutMe />;
        break;
      case "Contact me":
        // return <AboutMe />;
        break;
    }
  };

  return (
    <>
      {/* So navbar can change the state so it needs the function */}
      <Navbar handleNavigate={handleNavigate} />
      {/* {currentPage == "Home" ? <Maincontent /> : console.log("a")} */}
      {pageToRender()}
    </>
  );
}

export default App;
