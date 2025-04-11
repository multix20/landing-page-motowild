// src/components/MapRoutes.jsx
import React from 'react';
import '../styles/main.css';
import { motion } from 'framer-motion';

const MapRoutes = () => {
  return (
    <section className="map-section">
      <motion.div
        className="map-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Rutas que ya hemos recorrido</h2>
        <p>Conoce algunos de los destinos que hemos explorado junto a nuestra comunidad motera.</p>
        <img src="/mapa-rutas1.jpg" alt="Mapa de rutas anteriores" className="map-img" />
      </motion.div>
    </section>
  );
};

export default MapRoutes;
