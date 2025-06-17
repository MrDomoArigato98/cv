import me from "../assets/me.jpg";
import "../styles/home.css";
export default function Home() {
  return (
    <>
      <main>
        <h2>Hi, I'm Dominik 👋</h2>
        <section className="card">
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
                I'm based in Ireland, Dublin (open to relocation). Looking to
                transition fully into Software Development.
              </p>
              <p style={{ paddingTop: "1em" }}>Welcome to my website 💻</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
