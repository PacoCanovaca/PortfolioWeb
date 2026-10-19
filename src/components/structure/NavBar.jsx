import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClass = ({ isActive }) => isActive ? "active" : undefined;

  return (
    <nav className="">
      <ul>
        <li>
          <NavLink to="/about-me" className={navLinkClass}>
            Sobre mí
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={navLinkClass}>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/career-path" className={navLinkClass}>
            Trayectoria
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={navLinkClass}>
            Habilidades
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass}>
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;