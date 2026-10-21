import NavBar from "../interaction/NavBar";
import { NavLink } from 'react-router-dom';

const SiteHeader = () => {
    const NavLinkClass = ({ isActive }) => isActive ? "flex items-center gap-2 font-semibold" : "flex items-center gap-2 font-semibold";

  return (
    <header className="fixed top-4 left-0 right-0 mx-auto w-[calc(100%-20px)] max-w-5xl z-40 rounded-xl border border-border bg-surface/90 backdrop-blur">
      <div className="flex items-center justify-between gap-6 px-6 py-4">
        <NavLink to="/" className={NavLinkClass}>
          <img src="public/icon.png" alt="Logo PCC" className="size-10 rounded-md"/>
          <span className="text-lg text-brand-hover ml-1">Paco Canovaca</span>
        </NavLink>
        <NavBar />
      </div>
    </header>
  )
}

export default SiteHeader;
