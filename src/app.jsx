import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const experiences = [
  // Experiências profissionais
];

const skills = [
  // Habilidades
];

function App() {
  const photoVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.img
          src="/every.jpg"
          alt="Foto de Perfil"
          className="profile-picture"
          variants={photoVariants}
          initial="initial"
          animate="animate"
        />
        <motion.h1
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          Everton Santos
        </motion.h1>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;