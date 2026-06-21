import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Portfolio.</div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
