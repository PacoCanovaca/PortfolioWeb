import React from 'react';

const Footer = () => {
  return (
    <div className="">
      <ul className="flex gap-4 list-none p-0">
        <li>
          <a href="ENLACE_A_TU_LINKEDIN" target="_blank">
            <img src="src\assets\logos\linkedIn.svg" alt="Perfil de LinkedIn" className="w-8 h-8 object-contain"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/PacoCanovaca" target="_blank">
            <img src="src\assets\logos\github.svg" alt="Perfil de GitHub" className="w-8 h-8 object-contain"/>
          </a>
        </li>
        <li>
          <a href="mailto:pacocanovaca97@gmail.com">
            <img src="src\assets\logos\gmail.svg" alt="Enviar correo electrónico" className="w-8 h-8 object-contain"/>
          </a>
        </li>
      </ul>
      <p>@ 2026 Francisco José Canovaca Cárdenas</p>
    </div>
  );
}

export default Footer;