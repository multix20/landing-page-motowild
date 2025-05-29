import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
// import Trips from './components/Trips'; // ← Comentado o eliminado
import TripsList from './components/TripsList'; // ← Nuevo componente
import RoutePage from './components/RoutePage';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import MapRoutes from './components/MapRoutes';
import Footer from './components/Footer';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Community />
              <TripsList /> {/* ← Aquí llamamos el nuevo componente dinámico */}
              <Testimonials />
              <MapRoutes />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/ruta/:id" element={<RoutePage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
