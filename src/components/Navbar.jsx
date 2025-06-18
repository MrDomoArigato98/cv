// src/components/Navbar.jsx
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}
