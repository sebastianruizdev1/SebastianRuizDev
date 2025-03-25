import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'sebastianruizdev',
      description: 'Desarrollo de mi página web, mediante el uso de React y TailwindCSS, desplegada en Hostinger.',
      link: 'https://sebastianruiz.dev/',
    },
    {
      title: 'AppsMx',
      description: 'Colaboración con la parte de Front-End, y dar manteniento al sitio web, mediante las instrucciones del senior.',
      link: 'https://www.appsmx.com.mx/',
    },
  ];

  return (
    <section id="projects" className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline mt-2 inline-block">Ver proyecto</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
