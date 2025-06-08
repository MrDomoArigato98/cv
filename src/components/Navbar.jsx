import { useState } from "react";
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
            <h2 className="my-name">Dominik </h2>
            <h2 className="my-name">Dobrowolski</h2>
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
            <h2>Work</h2>
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
              <img src={linkedin} className="nav-img" />
              <a href="https://www.linkedin.com/in/dominik-dobrowolski/">
                LinkedIn
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
