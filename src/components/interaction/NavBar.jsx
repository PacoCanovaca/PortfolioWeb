import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinkClass = ({ isActive }) => `whitespace-nowrap rounded-md px-3 py-2 text-md text-text-muted transition-colors hover:bg-brand-soft hover:text-brand-hover ${isActive ? "active" : ""}`;

  return (
    <nav className="">
      <ul className="flex items-center gap-1">
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