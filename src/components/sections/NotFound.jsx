import { Link } from 'react-router-dom';
import { House, Terminal } from 'lucide-react';
import MainContainer from '../structure/MainContainer';

const NotFound = () => {
  return (
    <MainContainer>
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full bg-brand-soft px-4 py-2 font-mono text-sm text-brand-hover">
          <Terminal size={16} aria-hidden="true" />
          ERROR 404
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-text sm:text-5xl md:text-6xl">
          Página no encontrada<span className="text-brand">.</span>
        </h1>
        <p className="mb-8 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
          Parece que te has perdido entre líneas de código.
          La página que buscas no existe o ha cambiado de ubicación.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 font-medium text-surface transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <House size={18} aria-hidden="true" />
          Volver al inicio
        </Link>
      </section>
    </MainContainer>
  );
};

export default NotFound;
