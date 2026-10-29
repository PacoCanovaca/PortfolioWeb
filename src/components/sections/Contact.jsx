import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MainContainer from "../structure/MainContainer";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setStatusMessage({
            type: "success",
            text: "¡Mensaje enviado con éxito! Te responderé lo antes posible.",
          });
          formRef.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage({
            type: "error",
            text: "Ha habido un error al enviar el mensaje. Inténtalo de nuevo más tarde.",
          });
          console.error("EmailJS Error: ", error);
        },
      );
  };

  const fieldStyle =
    "bg-card border border-border text-text placeholder:text-text-muted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent focus:bg-brand-soft transition-all";

  return (
    <MainContainer
      id="contacto"
      path="~/contact"
      title="Contacto"
      description="¿Quieres hablar conmigo? Escríbeme y nos ponemos a ello."
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 mb-4 flex flex-col gap-6 w-[90%] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-text font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
            id="message"
            name="message"
            rows="8"
            placeholder="¿En qué te puedo ayudar?"
            className={"resize-y " + fieldStyle}
            required
          ></textarea>
        </div>
        {statusMessage !== null ? (
          <div
            className={`p-3 rounded-lg text-sm font-medium ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {statusMessage.text}
          </div>
        ) : null}
        <div className="flex justify-center gap-4 mt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-brand text-surface hover:bg-brand-hover px-8 py-2.5 rounded-lg font-medium cursor-pointer transition-colors"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          <button
            type="reset"
            disabled={isSubmitting}
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
