// src/components/Community.jsx
import React from 'react';
import '../styles/main.css';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="community-section">
      <motion.div
        className="community-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Nuestra Comunidad</h2>
        <p>
          En MotoWild no solo viajamos en moto, construimos lazos. Somos una comunidad
          que cada fin de semana sale a explorar nuevos caminos, compartir un asado, 
          armar una carpa junto al río o simplemente disfrutar la libertad de la ruta.
        </p>
        <p className="quote">
          “No se trata solo de motos. Se trata de amistad, libertad y caminos compartidos.”
        </p>
        <img src="/comunidad.jpg" alt="Comunidad motera" className="community-img" />
      </motion.div>
    </section>
  );
};

export default Community;
