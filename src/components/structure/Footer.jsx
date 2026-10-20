import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="mb-6 left-0 right-0 mx-auto w-[calc(100%-20px)] max-w-xl z-40 rounded-xl border border-border bg-surface/90 backdrop-blur">
    <div className="flex flex-col items-center justify-between gap-4 py-5">
      <ul className="flex gap-10 list-none pt-2">
        <li>
          <a href="ENLACE_A_TU_LINKEDIN" target="_blank">
            <img src="src\assets\logos\linkedIn.svg" alt="Perfil de LinkedIn" className="w-10 object-contain"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/PacoCanovaca" target="_blank">
            <img src="src\assets\logos\github.svg" alt="Perfil de GitHub" className="w-10 object-contain"/>
          </a>
        </li>
        <li>
          <a href="mailto:pacocanovaca97@gmail.com">
            <img src="src\assets\logos\gmail.svg" alt="Enviar correo electrónico" className="w-10 object-contain"/>
          </a>
        </li>
      </ul>
      <p>@ 2026 Francisco José Canovaca Cárdenas</p>
    </div>
    </footer>
  );
}

export default SiteFooter;