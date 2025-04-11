// src/components/Trips.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/main.css';
import { Link } from 'react-router-dom';

const trips = [
  {
    id: 1,
    title: 'Lican Ray y Coñaripe',
    date: '13 - 14 Abril 2025',
    description: 'Aventura entre lagos y termas con camping y asado en la playa.',
    image: '/trip1.jpg',
  },
  {
    id: 2,
    title: 'Pucón y Villarrica',
    date: '20 - 21 Abril 2025',
    description: 'Rutas escénicas, camping bajo el volcán y amigos en la carretera.',
    image: '/trip2.jpg',
  },
  {
    id: 3,
    title: 'Saltos del Laja',
    date: '27 - 28 Abril 2025',
    description: 'Moto y naturaleza en su máxima expresión. Fogata y buena conversa.',
    image: '/trip3.jpg',
  },
];

const Trips = () => {
  return (
    <section id="trips" className="trips-section">
      <h2 className="section-title">Próximos viajes</h2>
      <div className="trips-grid">
        {trips.map((trip) => (
          <motion.div
            key={trip.id}
            className="trip-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={trip.image} alt={trip.title} className="trip-img" />
            <h3>{trip.title}</h3>
            <p className="trip-date">{trip.date}</p>
            <p>{trip.description}</p>
            <div className="trip-buttons">
              <a 
                href="https://wa.me/56951569703?text=Hola%20quiero%20reservar%20una%20salida%20en%20moto%20✌🏼"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar
              </a>
              <Link to={`/ruta/${trip.id}`} className="btn-secondary">
  Ruta
</Link>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Trips;
