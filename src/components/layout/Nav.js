import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <span>FA</span>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/proyects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/curriculum"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Curriculum
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
