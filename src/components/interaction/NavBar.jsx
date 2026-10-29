import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/about-me", label: "Sobre mí" },
  { to: "/projects", label: "Proyectos" },
  { to: "/career-path", label: "Trayectoria" },
  { to: "/skills", label: "Habilidades" },
  { to: "/contact", label: "Contacto" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-md px-3 py-2 text-md text-text-muted transition-colors hover:bg-brand-soft hover:text-brand-hover ${isActive ? "active" : ""}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block w-full rounded-md px-4 py-3 text-text-muted transition-colors hover:bg-brand-soft hover:text-brand-hover                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${isActive ? "active" : ""}`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav aria-label="Navegación principal">
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-md border border-border text-text-muted transition-colors hover:bg-brand-soft hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={
          isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <X size={22} aria-hidden="true" />
        ) : (
          <Menu size={22} aria-hidden="true" />
        )}
      </button>
      <ul className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`${isOpen ? "flex" : "hidden"} absolute w-[50%] right-0 top-full mt-2 flex-col gap-1 rounded-xl border border-border bg-surface p-2 shadow-2xl backdrop-blur lg:hidden`}
      >
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
