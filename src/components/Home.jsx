import me from "../assets/me.jpg";
import "../home.css";
export default function Home() {
  return (
    <>
      <main>
        <h1>Hi, I'm Dominik!</h1>
        <section className="card">
          <div className="image-container">
            <img src={me} alt="Picture of Dominik" />
            <p className="italic"> (This is me on top of a Kawah Ijen, Indonesia)</p>
          </div>
          <div className="flex">
            <p>
              I'm based in Ireland, Dublin (open to relocation) and am looking
              to transition into Software Development. Welcome to my website 👋
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
