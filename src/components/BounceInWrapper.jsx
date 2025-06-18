// src/components/BounceInWrapper.jsx
import { useInView } from "react-intersection-observer";
import "../styles/animations.css"; // optional if your animation lives here

export default function BounceInWrapper({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1, // % of element visible before triggering
  });

  return (
    <div
      style={{ width: "100%" }}
      ref={ref}
      className={`bounce-wrapper ${inView ? "bounce-in" : "pre-bounce"}`}
    >
      {children}
    </div>
  );
}
