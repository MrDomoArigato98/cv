// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
// import Contact from "./components/Contact";
// import NotFound from "./components/NotFound"; // optional 404 page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* Add other routes here */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
