// src/components/Navbar.jsx
import "../reset.css";
import "../navbar.css";
import home from "../assets/home.png";
import person from "../assets/person.png";
import page from "../assets/page.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <div className="nav-section">
          <h1 className="my-name">Dominik Dobrowolski</h1>

          <Link to="/" className="nav-link">
            <img src={home} className="nav-icon" />
            <p>Home</p>
          </Link>

          <Link to="/about" className="nav-link">
            <img src={person} className="nav-icon" />
            <p>About me</p>
          </Link>
        </div>

        <div className="hire-me nav-links">
          <h2>Hire me</h2>

          <Link to="/resume" className="nav-link">
            <img src={page} className="nav-icon" />
            <p>Resume</p>
          </Link>

          <Link to="/contact" className="nav-link">
            <img src={phone} className="nav-icon" />
            <p>Contact me</p>
          </Link>

          <a
            href="https://www.linkedin.com/in/dominik-dobrowolski/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="nav-icon" />
            <p>LinkedIn</p>
          </a>
        </div>
      </ul>
    </nav>
  );
}
