// src/components/MobileNavbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import home from "../assets/home.png";
import person from "../assets/person.png";
import page from "../assets/page.png";
import phone from "../assets/phone.png";
import linkedin from "../assets/linkedin.png";

export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="mobile-navbar">
      <h1 className="my-name">Dominik Dobrowolski</h1>
      <div
        className="menu-toggle"
        role="button"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="menu-label" onClick={() => setOpen((prev) => !prev)}>
          Menu
        </span>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          label="Toggle menu"
        />
      </div>

      {isOpen && (
        <div id="mobile-menu" className="burger-menu ">
          <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
            <img src={home} className="nav-icon" />
            Home
          </NavLink>
          <NavLink
            to="/about-me"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            <img src={person} className="nav-icon" />
            About me
          </NavLink>
          {/* <NavLink
            to="/resume"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            <img src={page} className="nav-icon" />
            Resume
          </NavLink> */}
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            <img src={phone} className="nav-icon" />
            Contact me
          </NavLink>
          <a
            href="https://www.linkedin.com/in/dominik-dobrowolski/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <img src={linkedin} className="nav-icon" />
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
}
