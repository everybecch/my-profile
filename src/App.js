import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const experiences = [
  // Experiências profissionais
];

const skills = [
  // Habilidades para adicionar
];

const images = [
  'every.jpg',
  'every3.jpg',
  'every4.jpg'
];

const headerVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const sectionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const textVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const photoVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="App">
      <div className="background-animation" /> {/* Elemento para o fundo animado */}
      <header className="App-header">
        <motion.img
          src={images[currentImageIndex]}
          alt="Foto de Perfil"
          className="profile-picture"
          variants={photoVariants}
          initial="initial"
          animate="animate"
          onClick={handleImageClick}
        />
        <motion.h1
          variants={headerVariants}
          initial="initial"
          animate="animate"
          className="animated-font"
        >
          Everton Santos
        </motion.h1>
      </header>
      <main className="flex-column">
        <section className="menu">
          <div className="menu-options">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
            >
              Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
            >
              Academic
            </motion.button>
          </div>
        </section>
        <motion.h2
          className="content-container"
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          Minha Historia / My history
        </motion.h2>
        <motion.div
          key="sobre-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          className="sobre-text"
          style={{ fontFamily: 'Arial', fontSize: '16px' }}
        >
          Everton Santos, reside na cidade de São Paulo especificamente na zona leste de São Paulo em Itaquera
          começou sua carreira na tecnologia no ano de 2014<br></br> onde já prestava serviço corrigindo
          e reparando Hardwares e Software, ao longo do tempo foi obtendo experiencia profissional<br></br>
          e passando para outras areas da tecnologia como, anaslista de suporte,
          analista de sistemas, segurança da informação,<br></br> analista de infraestrutura e redes,
          nesse tempo certificou-se em linux sistema operacional completo, certificou-se em programação<br></br> php com a udemy
          até que um dia despertou interesse na area da programação e desenvolvimento onde se destacou desenvolvimendo<br></br>
          seu primeiro projeto de sucesso na carreira, um sistema de telecom discagem automatica a partir dai iniciou-se<br></br>
          uma paixão pela criação e pelo mundo dev, como ja havia conhecimento em sistemas e cloud, se tornou um devops
          ao todo sua carreira<br></br> soma 9 anos sendo 4 anos dedicado ao desenvolvimento.

          Esse é um pedaço da minha história. agradeço pela leitura,<br></br> e conto com voce para continuar
          contruindo as paginas do meu livro afinal todos nós que amamos tecnologia<br></br> somos aventureiros e não paramos no tempo, nós andamos junto ao tempo da tecnologia
          <br></br>
          <br></br>
          <br></br><h3>English.</h3>

          Everton Santos, lives in the city of São Paulo specifically in the east zone of Sp inItaquera
          began his career in technology in<br></br> the year 2014 where he already provided service correcting
          and repairing hardware and software<br></br> over time has been getting professional experience
          and moving to other areas of technology as anaslista support<br></br>
          systems analyst information security, infrastructure analyst and networks,
          in this time certified linux complete operating system<br></br> certified programming in php with udemy
          until one day he awakened interest in the area of<br></br> programming and development where he stood out developing
          his first successful project in his career<br></br> a telecom system for automatic dialing from there began
          a passion for creation and the dev world<br></br> as he already had knowledge in systems and cloud, he became a devops
          His career totals 9 years<br></br> 4 of which dedicated to development

          This is a piece of my story. thanks for reading, and I count on you to continue<br></br>
          contruindo the pages of my book after all I am an adventurer and does not stop to get knowledge
          in technology<br></br> that since I was 12 years old disassembling machines and tube monitors.
        </motion.div>
        <section>
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="experience"
              variants={sectionVariants}
            >
              <h3>{experience.company}</h3>
              <p>
                <strong>{experience.title}</strong>
              </p>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </motion.div>
          ))}
        </section>
        <section>
          <ul>
            {skills.map((skill) => (
              <motion.li key={skill} variants={sectionVariants}>
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
