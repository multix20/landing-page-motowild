// src/components/Newsletter.jsx
import React from 'react';
import '../styles/main.css';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <motion.div
        className="newsletter-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>¡Únete a la comunidad MotoWild!</h2>
        <p>Recibe las próximas salidas, descuentos y consejos de viaje directo en tu correo.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
          />
          <button type="submit">Suscribirme</button>
        </form>
        <a
          href="https://wa.me/56951569704"
          className="whatsapp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Tienes dudas? Escríbenos por WhatsApp
        </a>
      </motion.div>
    </section>
  );
};

export default Newsletter;
