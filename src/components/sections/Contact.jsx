import React from "react";
import MainContainer from "../structure/MainContainer";

const Contact = () => {

  const fieldStyle = "bg-card border border-border text-text placeholder:text-text-muted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent focus:bg-brand-soft transition-all";

  return (
    <MainContainer
      id="contacto"
      path="~/contact"
      title="Contacto"
      description="¿Quieres hablar conmigo? Escríbeme y nos ponemos a ello."
    >
      <form className="mt-10 mb-4 flex flex-col gap-6 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-text font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              className={fieldStyle}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-text font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              className={fieldStyle}
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mensaje" className="text-text font-medium">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="¿En qué te puedo ayudar?"
            className={"resize-y " + fieldStyle}
            required
          ></textarea>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <button
            type="submit"
            className="bg-brand text-surface hover:bg-brand-hover px-8 py-2.5 rounded-lg font-medium cursor-pointer transition-colors"
          >
            Enviar
          </button>
          <button
            type="reset"
            className="bg-surface border border-border text-text hover:bg-card px-8 py-2.5 rounded-lg font-medium cursor-pointer transition-colors"
          >
            Borrar
          </button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Contact;
