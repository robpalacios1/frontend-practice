import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>Derechos de autor © {new Date().getFullYear()} - Mi Página Llamativa</p>
      <p>Roberto Palacios</p>
    </footer>
  );
}

export default Footer;
