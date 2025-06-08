import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const RoutePage = () => {
  const { id } = useParams();
  const [routeInfo, setRouteInfo] = useState(null);

  useEffect(() => {
    fetch('/routeDetails.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedRoute = data.find((route) => route.id === parseInt(id));
        setRouteInfo(selectedRoute);
      })
      .catch((error) =>
        console.error("Error al cargar el detalle de la ruta:", error)
      );
  }, [id]);

  if (!routeInfo) {
    return <p style={{ textAlign: 'center' }}>Cargando...</p>;
  }

  return (
    <section
      style={{
        backgroundColor: '#f3f4f6',
        padding: '2rem',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '2rem',
          color: '#1f2937'
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: '#111827'
          }}
        >
          {routeInfo.title}
        </h2>

        <img
          src={routeInfo.image}
          alt={routeInfo.title}
          style={{
          width: '90%',
          maxWidth: '600px',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '1.5rem',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
          }}
          />


        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Columna izquierda: duración, dificultad, incluye */}
          <div style={{ flex: '1' }}>
            <p><strong>Duración:</strong> {routeInfo.duracion}</p>
            <p><strong>Dificultad:</strong> {routeInfo.dificultad}</p>
            <div style={{ marginTop: '1rem' }}>
              <p><strong>Incluye:</strong></p>
              <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                {routeInfo.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha: itinerario dinámico con tarjetas */}
          <div style={{ flex: '1' }}>
            <p><strong>Itinerario:</strong></p>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {routeInfo.itinerary.map((linea, i) => {
                const [dia, descripcion] = linea.split(':');
                return (
                  <div key={i} style={{
                    backgroundColor: '#f9fafb',
                    borderLeft: '4px solid #3b82f6',
                    padding: '1rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                  }}>
                    <div style={{ fontSize: '1.5rem' }}>📅</div>
                    <div>
                      <p style={{ margin: 0 }}><strong>{dia}:</strong>{descripcion}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link
            to="/#trips"
            className="btn"
            style={{
              textDecoration: 'none',
              backgroundColor: '#1f2937',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            Volver a rutas
          </Link>

          <a
            href="https://wa.me/56951569704?text=Hola%20quiero%20reservar%20una%20salida%20en%20moto%20✌🏼"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: '#10b981',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            Reservar vía WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoutePage;
