import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const experiences = [
  // Experiências profissionais
];

const skills = [
  '/my-profile/assets/laravel.png',
  '/my-profile/assets/javascript.png',
  '/my-profile/assets/php.png',
  '/my-profile/assets/nextjs.png',
  '/my-profile/assets/nodejs.png',
  '/my-profile/assets/typescript.png',
  '/my-profile/assets/reactjs.png',
  '/my-profile/assets/git.png',
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

const skillsContainerVariants = {
  animate: {
    x: ['-100%', '100%'],
    transition: {
      x: {
        repeat: Infinity,
        duration: 10,
        ease: 'linear'
      }
    }
  }
};

// ...

<section id="skills">
  <h2>Skills</h2>
  <motion.div
    className="skills-container"
    variants={skillsContainerVariants}
    initial="initial"
    animate="animate"
  >
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className="skill-item"
        style={{ backgroundImage: `url(${skill})` }}
      />
    ))}
  </motion.div>
</section>

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

  const handleButtonClick = (sectionName) => {
    const sectionElement = document.getElementById(sectionName);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="background-animation" />
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
              onClick={() => handleButtonClick("skills")}
            >
              Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
              onClick={() => handleButtonClick("experience")}
            >
              Experience
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
              onClick={() => handleButtonClick("academic")}
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
          Minha História / My history
        </motion.h2>
        <motion.div
          key="sobre-text"
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          className="sobre-text"
          style={{ fontFamily: 'Arial', fontSize: '16px', textAlign: 'center' }}
        >
          Everton Santos, reside na cidade de São Paulo especificamente na zona leste em Itaquera,
          começou sua carreira na tecnologia no ano de 2014<br></br> onde já prestava serviços, corrigindo
          e reparando Hardwares e Software, ao longo do tempo foi obtendo experiencia profissional<br></br>
          e passando para outras areas da tecnologia como, anaslista de suporte,
          analista de sistemas, segurança da informação,<br></br> analista de infraestrutura e redes,
          nesse meio tempo certificou-se em linux, sistema operacional completo, em programação web<br></br> php com a udemy,
          até que um dia despertou interesse na area da programação e desenvolvimento onde se destacou desenvolvendo<br></br>
          seu primeiro projeto de sucesso na carreira, um sistema de "telecom discagem automatica", a partir disso iniciou-se<br></br>
          uma paixão pela criação e pelo mundo Dev, como ja havia conhecimento em sistemas e cloud, se tornou um DevOps.
          Ao todo sua carreira<br></br> soma 9 anos sendo 4 anos dedicado ao desenvolvimento.

          Esse é um pedaço da minha história. Agradeço pela leitura<br></br> e conto com voce para continuar
          contruindo as paginas do meu livro.
          <br></br>
          <br></br><h3>English.</h3>

          "Everton Santos resides in the city of São Paulo, specifically in the eastern zone of São Paulo in Itaquera. He began his career in technology in 2014,<br></br> where he was already providing services in hardware and software troubleshooting and repair. Over time, he gained professional experience and transitioned<br></br>to other areas of technology, such as support analyst, systems analyst, information security, infrastructure and network analyst.<br></br> During this time, he obtained a complete certification in Linux operating systems and PHP programming through Udemy.

          One day, <br></br> he developed a keen interest in programming and software development, which led to his standout success in his first career project: <br></br> an automatic dialing telecom system. This marked the beginning of his passion for creation and the world of development.<br></br> With his knowledge in systems and cloud technologies, he became a DevOps professional. In total, his career spans nine years,<br></br> with four dedicated to development.

          This is a part of my story. Thank you for reading, and I look forward to continuing to build the pages of my book. After all, <br></br>those of us who love technology are adventurers who never stop in time; we move alongside the ever-evolving world of technology."
        </motion.div>
        <hr />
        <section id="skills">
          <h3>SKILLS</h3>
          <motion.div
            className="skills-container"
            variants={skillsContainerVariants}
            initial="initial"
            animate="animate"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                style={{
                  backgroundImage: `url(${skill})`,
                }}
              />
            ))}
          </motion.div>
        </section>
        <hr />
        <section id="experience">
          <h3>EXPERIENCE</h3>
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
        <hr />
        <section id="academic">
          <h3>ACADEMIC</h3>
          {/* Conteúdo da seção Academic */}
        </section>
      </main>
    </div>
  );
}

export default App;