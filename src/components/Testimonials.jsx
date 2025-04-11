// src/components/Testimonials.jsx
import React from 'react';
import '../styles/main.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Camilo R.",
    text: "¡La mejor experiencia de mi vida! Compartimos risas, asados y rutas inolvidables.",
    image: "/camilo.jpg",
  },
  {
    name: "Karla M.",
    text: "No solo aprendí a acampar, conocí amigos para toda la vida. 100% recomendado.",
    image: "/karla.jpg",
  },
  {
    name: "Diego A.",
    text: "Rutas increíbles, paisajes hermosos y una comunidad motera que te hace sentir en casa.",
    image: "/diego.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Lo que dicen nuestros viajeros</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <p className="testimonial-text">“{item.text}”</p>
            <p className="testimonial-name">– {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
