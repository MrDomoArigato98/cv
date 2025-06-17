import "../styles/index.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaAws,
  FaUserTie,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa"; // or your icons

const workHistory = [
  {
    title: "Cloud Support Engineer II – AWS",
    date: "June 2023 – November 2024",
    description:
      "Specialized in Lambda, API Gateway, and Step Functions. Promoted after becoming SME in AWS Lambda .",
    icon: <FaAws />,
  },
  {
    title: "Cloud Support Engineer I – AWS",
    date: "May 2021 – June 2023",
    description:
      "Provided support for serverless tech stack. Built internal tools and automated diagnostics.",
    icon: <FaAws />,
  },
  {
    title: "Cloud Support Associate – AWS",
    date: "July 2020 – May 2021",
    description:
      "First exposure to production infrastructure. Developed foundational expertise in AWS services, with a focus on Serverless.",
    icon: <FaAws />,
  },
  {
    title:
      "Technological University Dublin - BSc (Hons) Computer Science Infrastructure",
    date: "September 2016 – May 2020",
    description: (
      <>
        <p>
          Graduated with a second-class honour, first division (GPA 3.6).
          Focused on Unix/Linux systems, Cloud Computing, System Infrastructure,
          and development in Python, C, C#, Java, and Web (JS, HTML, CSS). CCNA
          1–4.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <strong>Hanyang University, South Korea (Feb – Jun 2018):</strong>{" "}
          Studied Computer Networking, Linear Algebra, and C#. Gained
          beginner-level Korean proficiency.
        </p>
      </>
    ),
    icon: <FaGraduationCap />,
  },
];

export default function WorkTimeline() {
  return (
    <VerticalTimeline>
      {workHistory.map((job, index) => (
        <VerticalTimelineElement
          key={index}
          date={job.date}
          icon={job.icon}
          iconStyle={{ background: "#333", color: "#fff" }}
          contentStyle={{ background: "#f8f9fa", color: "#000" }}
        >
          <h3 className="vertical-timeline-element-title">{job.title}</h3>
        {job.description}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
