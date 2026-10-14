import './index.css';

function App() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
      <article className="bg-surface border flex flex-col border-border rounded-xl p-6 max-w-md gap-4">
        <h2 className="text-2xl font-semibold text-text">Mi portfolio</h2>
        <p className="text-text-muted leading-relaxed">
          Tailwind CSS está funcionando correctamente.
        </p>
        <p className="font-mono text-brand">No hay problemas a la vista</p>
        <button className="bg-brand text-white hover:bg-brand-hover px-5 py-3 rounded-lg">
          Ver proyectos
        </button>
      </article>
    </main>
  );
}

export default App;
