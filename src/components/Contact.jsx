import "../styles/contact.css";

export default function Contact() {
  return (
    <main>
      <div
        className="contact-me"
        style={{ padding: "2rem", textAlign: "center" }}
      >
        <h2>Contact Me</h2>
        <p>Have any openings for Software roles?</p>
        <p>Email: domdob98@gmail.com</p>
        <p>Location: Ireland, Czech Republic, or Remote!</p>

        <a
          href="/Dominik_Dobrowolski_CV.pdf"
          download
          className="cv-download-link"
          style={{
            marginTop: "2rem",
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#02ad28",
            color: "white",
            borderRadius: "6px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          📄 Download My CV
        </a>
      </div>
    </main>
  );
}
