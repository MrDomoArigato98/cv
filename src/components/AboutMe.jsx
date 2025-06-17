import WorkTimeline from "./WorkTimeline";
import "../styles/aboutme.css"
import SkillsAndCerts from "./SkillsAndCerts";
export default function AboutMe() {
  return (
    <>
      <main>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>About me </h2>
        <WorkTimeline />
        <SkillsAndCerts/>
      </main>
    </>
  );
}
