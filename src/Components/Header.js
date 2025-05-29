import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sebastián Ruiz DEV</h1>
        <nav>
        <a href="https://github.com/sebastianruizdev1" target="_blank" rel="noopener noreferrer" className="mr-4">
        GitHub  
        </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;