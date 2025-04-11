// src/components/Hero.jsx
import React from 'react';
import '../styles/main.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MOTO WILD
        </motion.h1>
        <p>Vive la aventura. Camping, rutas, fogatas y amistad.</p>
        <div className="hero-buttons">
          <a href="#trips" className="btn">Ver próximos viajes</a>
          <a href="#store" className="btn-secondary">Ver tienda</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
