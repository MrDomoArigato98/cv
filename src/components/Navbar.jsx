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
          <div className="nav-links">
            <h1 className="my-name">Dominik Dobrowolski</h1>

            <li>
              <a
                onClick={(e) => handleNavigate(e)}
                className="link"
                href="/Home"
              >
                {""}
                <img src={home} className="nav-img" />
                Home
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleNavigate(e)}
                className="link"
                href="/About"
              >
                {""}
                <img src={person} className="nav-img" />
                About me
              </a>
            </li>
          </div>

          <div className="hire-me nav-links">
            <h2>Hire me</h2>
            <li>
              <a
                onClick={(e) => handleNavigate(e)}
                className="link"
                href="/Resume"
              >
                {""}
                <img src={page} className="nav-img" />
                Resume
              </a>
            </li>

            <li>
              <a
                onClick={(e) => handleNavigate(e)}
                className="link"
                href="/Contact"
              >
                {""}
                <img src={phone} className="nav-img" />
                Contact me
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/dominik-dobrowolski/"
                className="link"
              >
                <img src={linkedin} className="nav-img" />
                LinkedIn
              </a>
            </li>
            
            {/* <a
              href="https://www.linkedin.com/in/dominik-dobrowolski/"
              className="test"
            >
              <img src={linkedin} className="nav-img" />
              <li>LinkedIn</li>
            </a> */}
          </div>
        </ul>
      </nav>
    </>
  );
}
