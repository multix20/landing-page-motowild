import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  MapPin,
  Users,
  Flame,
  Tent,
  Mountain,
  Play,
  ArrowDown
} from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          y
        }}
      />

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="hero-overlay relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
      >
        {/* Title */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-wider mb-4"
          style={{
            textShadow:
              '0 0 30px rgba(255,165,0,0.5), 0 0 60px rgba(255,255,255,0.3)'
          }}
          animate={{
            textShadow: [
              '0 0 30px rgba(255,165,0,0.5), 0 0 60px rgba(255,255,255,0.3)',
              '0 0 50px rgba(255,165,0,0.8), 0 0 80px rgba(255,255,255,0.5)',
              '0 0 30px rgba(255,165,0,0.5), 0 0 60px rgba(255,255,255,0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          variants={itemVariants}
        >
          MOTO WILD
        </motion.h1>

        {/* Feature Icons */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Mountain, label: 'Rutas épicas', color: 'from-blue-500 to-cyan-500' },
            { icon: Tent, label: 'Camping', color: 'from-green-500 to-emerald-500' },
            { icon: Flame, label: 'Fogatas', color: 'from-red-500 to-orange-500' },
            { icon: Users, label: 'Comunidad', color: 'from-purple-500 to-pink-500' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center text-center"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className={`bg-gradient-to-br ${item.color} p-4 rounded-full shadow-xl group-hover:shadow-orange-500/50 transition-all duration-300`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <motion.span
                className="mt-2 text-sm text-gray-300 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center text-white/80 group cursor-pointer">
            <motion.span className="text-sm mb-3 font-light tracking-wide">
              Descubre la aventura
            </motion.span>
            <div className="relative">
              <ArrowDown className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-orange-400"
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
