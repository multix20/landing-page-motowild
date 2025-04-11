import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const TripsList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('/tripsData.json')
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((error) => console.error("Error al cargar los datos de viajes:", error));
  }, []);

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
            {trip.date && <p className="trip-date">{trip.date}</p>}
            <p>{trip.description}</p>
            <div className="trip-buttons">
              <a 
                href="https://wa.me/56951569704?text=Hola%20quiero%20reservar%20una%20salida%20en%20moto%20✌🏼"
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

export default TripsList;
