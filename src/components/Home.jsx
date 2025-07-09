import me from "../assets/me.jpg";
import building from "../assets/building.jpg";
import cart from "../assets/cart.png";
import "../styles/home.css";
import InProgress from "./InProgress";
import todo from "../assets/todo.png";
import { FaLaptopCode } from "react-icons/fa";
export default function Home() {
  const projects = [
    {
      title: "Shopping Cart",
      description: "Simple shopping site with React. Practice of state management with context provider, using a React Router, and an API for the items." ,
      image: cart,
      link: "https://cart-ruddy-chi.vercel.app/",
    },
    {
      title: "Todo Web app",
      description:
        "Simple todo app using Vanilla JS/HTML/CSS. I learned a lot about JS during this project, and about proper ways to manage my code.",
      image: todo,
      link: "https://mrdomoarigato98.github.io/The-Odin-Project/To-do%20App/dist/index.html",
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
                I'm based in Ireland, Dublin (open to relocation). Transitioning
                fully into Software Development.
              </p>
              <p style={{ paddingTop: "1em" }}>Welcome to my website 💻</p>
            </div>
          </div>
        </section>

        <div className="projects">
          <h3>Projects </h3>
          {projects.map((item, idx) => {
            return (
              <a
                className="projects-row"
                href={item.link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="projects-text">
                  <h4>{item.title}</h4>
                  <p className="project-description">{item.description}</p>
                </div>
                {item.image && (
                  <img
                    className="project-img"
                    alt={item.title}
                    src={item.image}
                  ></img>
                )}
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}
