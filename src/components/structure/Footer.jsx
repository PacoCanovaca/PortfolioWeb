import github from "../../assets/logos/github.svg";
import gmail from "../../assets/logos/gmail.svg";
import linkedIn from "../../assets/logos/linkedIn.svg";

const SiteFooter = () => {
  return (
    <footer className="mb-6 left-0 right-0 mx-auto w-[90%] max-w-xl z-40 rounded-xl border border-border bg-surface/90 backdrop-blur">
      <div className="flex flex-col items-center justify-between gap-4 py-5 text-sm sm:text-md">
        <ul className="flex gap-10 list-none pt-2">
          <li>
            <a href="https://www.linkedin.com/in/francisco-jos%C3%A9-canovaca-c%C3%A1rdenas-65a51a1aa/" target="_blank">
              <img
                src={linkedIn}
                alt="Perfil de LinkedIn"
                className="w-7 sm:w-10 object-contain"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/PacoCanovaca" target="_blank">
              <img
                src={github}
                alt="Perfil de GitHub"
                className="w-7 sm:w-10 object-contain"
              />
            </a>
          </li>
          <li>
            <a href="mailto:pacocanovaca97@gmail.com">
              <img
                src={gmail}
                alt="Enviar correo electrónico"
                className="w-7 sm:w-10 object-contain"
              />
            </a>
          </li>
        </ul>
        <p>@ 2026 Francisco José Canovaca Cárdenas</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
