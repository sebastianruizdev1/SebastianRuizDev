import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-tron-background text-tron-text min-h-screen font-sans">
      <header className="flex justify-between items-center p-4 border-b border-tron-darkBlue bg-tron-background">
        <h1 className="text-3xl font-bold text-tron-accent">Mi Portafolio</h1>
      </header>
      
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-tron-accent">Sobre Mí</h2>
        <p className="mt-2 text-lg">Soy Full Stack Developer Jr.</p>
      </section>
      
      <section className="p-6">
        <h2 className="text-2xl font-semibold text-tron-accent">Habilidades</h2>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          {['Python', 'MySQL', 'Laravel', 'PHP', 'React', 'Django'].map(skill => (
            <li key={skill} className="p-2 border border-tron-darkBlue rounded-lg bg-tron-background text-center text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
