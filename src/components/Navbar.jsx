// src/components/Navbar.jsx
import "../styles/reset.css";
import "../styles/navbar.css";
import {useState} from 'react'
import home from "../assets/home.png";
import person from "../assets/person.png";
import page from "../assets/page.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <nav>
        <div className="nav-section">
          <h1 className="my-name">Dominik Dobrowolski</h1>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={home} className="nav-icon" />
            <p>Home</p>
          </NavLink>

          <NavLink
            to="/about-me"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={person} className="nav-icon" />
            <p>About me</p>
          </NavLink>
        </div>

        <div className="hire-me nav-links">
          <h2>Hire me</h2>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={page} className="nav-icon" />
            <p>Resume</p>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
          >
            <img src={phone} className="nav-icon" />
            <p>Contact me</p>
          </NavLink>

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
    </nav>
  );
}
