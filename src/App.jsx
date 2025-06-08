import { useState } from "react";
import "./reset.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigate = (e) => {
    e.preventDefault();
    console.log(currentPage);
    setCurrentPage(e.target.text);
  };

  const pageToRender = () => {
    switch (currentPage) {
      case "Home":
        console.log(currentPage);
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
