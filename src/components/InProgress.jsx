import { FaCog } from "react-icons/fa";
import "../styles/inprogress.css";

export default function InProgress({ text = "Building..." }) {
  return (
    <div className="in-progress">
      <FaCog className="cog-spin" size={32} />
      <span className="progress-text">{text}</span>
    </div>
  );
}
