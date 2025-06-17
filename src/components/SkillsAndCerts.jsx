import "../styles/skillsandcerts.css";
import python from "../assets/python.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import web from "../assets/web.svg";
import aws from "../assets/aws.svg";
import docker from "../assets/docker.svg"
import cloud_ from "../assets/cloud.svg"
import rest from "../assets/rest.svg"
import database from "../assets/database.svg"
import nonrds from "../assets/nonrds.svg"

export default function SkillsAndCerts() {
  const programmingSkills = [
    { name: "Python", icon: python }, // already imported
    { name: "Node.js", icon: nodejs },
    { name: "React", icon: react },
    { name: "HTML/CSS/JS", icon: web },
  ];


  const certifications = [
    {
      name: "AWS Lambda Subject Matter Expert (SME)",
      image:
        "https://images.credly.com/size/340x340/images/2fa7188e-a04b-4290-aab0-35af0f6b7fdd/image.png", // replace with actual SME badge if available
      link: "https://www.credly.com/badges/bbb89356-5800-421c-a116-a25c7b71c611/public_url", // if public
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      image:
        "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      link: "https://www.credly.com/badges/7c232737-979e-4fd2-b0f6-0eed16fe93a8/public_url",
    },
    {
      name: "AWS Certified Developer – Associate",
      image:
        "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      link: "https://www.credly.com/badges/d0baf8f3-2a1a-46b5-b2e3-228cb3636eab/public_url",
    },
  ];


  const cloud = [
    { name: "AWS (Lambda, API Gateway, Step Functions, SQS, Kinesis, VPC & Networking, CloudWatch, IAM and more!)", icon: aws }, // already imported
    { name: "IaC - AWS CDK, CloudFormation, Serverless Application Model (SAM), Terraform", icon: cloud_ },
    { name: "Docker", icon: docker },
    { name: "REST API", icon: rest },
    { name: "Relational Databases (AWS RDS) & SQL ", icon: database },
    { name: "NoSQL Databases ", icon: nonrds },
  ];
  return (
    <>
      <section className="skills-certs">
        <h3> Skills and certification</h3>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Programming & Scripting</h3>
            <ul>
              {programmingSkills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <img
                    src={skill.icon}
                    className="skill-icon"
                    alt={`${skill.name} icon`}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-badge"
              >
                <img src={cert.image} alt={cert.name} />
                <p>{cert.name}</p>
              </a>
            ))}
          </div>

          <div className="grid-item">
            <h3>Cloud & Infrastructure </h3>
            <ul>
                {cloud.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <img
                    src={skill.icon}
                    className="skill-icon"
                    alt={`${skill.name} icon`}
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
