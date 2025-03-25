import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Sebastián Ruiz DEV. Todos los derechos reservados.</p>
        <p>Contacto: <a href="mailto:miemail@example.com" className="text-blue-400 hover:underline">sruizcru0330@gmail.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;