import { Link, useLocation } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className={location.pathname === "/" ? "active" : ""}
      >
        Are U be My Valentine❤️🫧?
      </Link>
    </nav>
  );
}
