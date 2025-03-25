import React from 'react';

function AboutMe() {
  return (
    <section id="about" className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Acerca de mí</h2>
        <img src="/sebas.jpg" alt="Sebastián Ruiz" className="mb-4 rounded-full w-32 h-32 mx-auto"/>
        <p>Soy un desarrollador front-end apasionado por crear interfaces de usuario atractivas y funcionales. Tengo experiencia en HTML, CSS, JavaScript y frameworks como React.</p>
        <p>Me encante el desarrollo en front-end por eso decide especializarme en esto ademas, me gusta aprendes nuevas técnologias</p>
        <p>Soy Sebastián Ruiz y espero que te guste mi página web</p>
      </div>
    </section>
  );
}

export default AboutMe;