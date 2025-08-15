import me from "../assets/me.jpg";
import building from "../assets/building.jpg";
import cart from "../assets/cart.png";
import "../styles/home.css";
import InProgress from "./InProgress";
import todo from "../assets/todo.png";
import { FaLaptopCode } from "react-icons/fa";
import messageBoard from "../assets/message-board.png";
import { FaGithub } from "react-icons/fa6";
export default function Home() {
  const projects = [
    {
      title: "Public Message Board",
      description:
        "App with authentication, password hashing, sanitization & validation and a database to store registered users and messages.",
      git: "https://github.com/MrDomoArigato98/TOP-members-only",
      icon: <FaGithub />,
      image: messageBoard,
      link: "https://top-members-only-production-d4f9.up.railway.app/",
    },
  ];

  return (
    <>
      <main className="">
        <h2>Hi, I'm Dominik 👋</h2>
        <section className="bounce-in card">
          <div className="image-container">
            <img src={me} alt="Picture of Dominik" />
            <p style={{ paddingTop: "1em" }} className="italic">
              {" "}
              Ijen Volcano, Indonesia
            </p>
          </div>
          <div className="flex">
            <div>
              <p>
                I'm based in Ireland, Dublin. Moving to Prague in September 2025. Transitioning
                fully into Software Development.
              </p>
              <p style={{ paddingTop: "1em" }}>Welcome to my website 💻</p>
            </div>
          </div>
        </section>

        {/* <div className="projects">
          <h3>Projects </h3>
          {projects.map((item, idx) => {
            return (
              <div
                className="projects-row"
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="projects-text">
                  <h4>{item.title}</h4>
                  <p className="project-description">{item.description}</p>

                  <div className="projects-links">
                    <a
                      className="git-icon"
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={40} />
                      <span className="git-label highlight">Git</span>
                    </a>

                    <a className="highlight link-to-site" href={item.link}>Link to site</a>
                  </div>
                  
                </div>
                {item.image && (
                  <img
                    className="project-img"
                    alt={item.title}
                    src={item.image}
                  ></img>
                )}
              </div>
            );
          })}
        </div> */}
      </main>
    </>
  );
}
