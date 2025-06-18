import me from "../assets/me.jpg";
import "../styles/home.css";

import todo from "../assets/todo.png";
export default function Home() {
  const projects = [
    {
      title: "Todo Web app",
      description: "abcd",
      image: todo,
      link: "https://mrdomoarigato98.github.io/The-Odin-Project/To-do%20App/dist/index.html",
    },
    {
      title: "Dummy item",
      description: "Another dummy item",
      image: todo,
      link: "",
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
              (Ijen Volcano, Indonesia)
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
              <div id={idx}>
                <a className="projects-row" href={item.link}>
                  <div className="projects-text">
                    <h4>{item.title}</h4>
                    <p className="project-description">{item.description}</p>
                  </div>
                  <img className="project-img" src={item.image}></img>
                </a>
              </div>
            );
          })}
          <div className="projects-row">Todo </div>
        </div>
      </main>
    </>
  );
}
