// import { useState } from "react";
import "../reset.css";
import "../navbar.css";
import home from "../assets/home.png";
import person from "../assets/person.png";
import page from "../assets/page.png";
import phone from "../assets/phone.png";

import linkedin from "../assets/linkedin.png";

export default function Navbar({ handleNavigate }) {
  return (
    <>
      <nav>
        <ul>
          <div className="nav-section">
            <h1 className="my-name">Dominik Dobrowolski</h1>

            <a onClick={(e) => handleNavigate(e)} className="nav-link" href="/Home">
              {""}
              <img src={home} className="nav-icon" />
              <p>Home</p>
            </a>

            <a
              onClick={(e) => handleNavigate(e)}
              className="nav-link"
              href="/About"
            >
              {""}
              <img src={person} className="nav-icon" />
              <p>About me</p>
            </a>
          </div>

          <div className="hire-me nav-links">
            <h2>Hire me</h2>
            <a
              onClick={(e) => handleNavigate(e)}
              className="nav-link"
              href="/Resume"
            >
              {""}
              <img src={page} className="nav-icon" />
              <p>Resume</p>
            </a>

            <a
              onClick={(e) => handleNavigate(e)}
              className="nav-link"
              href="/Contact"
            >
              {""}
              <img src={phone} className="nav-icon" />
              <p>Contact me</p>
            </a>

            <a
              href="https://www.linkedin.com/in/dominik-dobrowolski/"
              className="nav-link"
            >
              <img src={linkedin} className="nav-icon" />
              <p>LinkedIn</p>
            </a>
          </div>
        </ul>
      </nav>
    </>
  );
}
