import React from 'react';

function TechStack() {
  const technologies = [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'HTML5', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { name: 'Ubuntu', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Ubuntu-logo-2022.svg'},
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'}
  ];

  return (
    <section id="techstack" className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Stack Tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img
                src={tech.logo}
                alt={`${tech.name} logo`}
                className="w-16 h-16 mb-2"
                aria-label={`${tech.name} logo`}
              />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
