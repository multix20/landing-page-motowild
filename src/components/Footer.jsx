// src/components/Footer.jsx
import React from 'react';
import { Instagram, Music2 } from 'lucide-react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>MotoCamp</h3>
          <p>La comunidad motera del sur del mundo</p>
        </div>

        <div className="footer-links">
          <a href="#trips">Próximos viajes</a>
          <a href="#store">Tienda</a>
          <a href="#contact">Contacto</a>
          <a href="#newsletter">Newsletter</a>
        </div>

        <div className="footer-social">
          <a
            href="https://instagram.com/motocamp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://tiktok.com/@motocamp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <Music2 size={28} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 MotoCamp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
