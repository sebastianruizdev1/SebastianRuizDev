import React from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import TechStack from './Components/TechStack';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <AboutMe />
        <TechStack />
        <Projects />
      </main>
        <Footer />
    </div>
  );
}

export default App;
