import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const experiences = [
  '/my-profile/assets/unimed.png',
  '/my-profile/assets/livelo.png',
  '/my-profile/assets/compasso.png',
  '/my-profile/assets/dasa.png',
];

const stack = [
  '/my-profile/assets/jest.png',
  '/my-profile/assets/bitb.png',
  '/my-profile/assets/jenkins.png',
  '/my-profile/assets/git.png',
  '/my-profile/assets/linux.png',
  '/my-profile/assets/docker.png',
  '/my-profile/assets/mysql.png',
  '/my-profile/assets/mariadb.png',
  '/my-profile/assets/kubernets.png',
  '/my-profile/assets/asterisk.png',
  '/my-profile/assets/twilio.png',
];

const skills = [
  '/my-profile/assets/laravel.png',
  '/my-profile/assets/javascript.png',
  '/my-profile/assets/php.png',
  '/my-profile/assets/nextjs.png',
  '/my-profile/assets/nodejs.png',
  '/my-profile/assets/typescript.png',
  '/my-profile/assets/reactjs.png',
  '/my-profile/assets/python.png',
  '/my-profile/assets/html.png',
  '/my-profile/assets/css.png',
  '/my-profile/assets/c++.png',
];

const academic = [
  '/my-profile/src/unicid.png',
  '/my-profile/src/4linux.png',
  '/my-profile/src/udemy.png',
];

const images = [
  '/my-profile/every.jpg',
  '/my-profile/every2.jpg',
  '/my-profile/every4.jpg'
];

const headerVariants = {
  initial: { opacity: 0, y: -20 },
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
        duration: 25,
        ease: 'linear'
      }
    }
  }
};

const stackContainerVariants = {
  animate: {
    x: ['100%', '-100%'], // Inverte a direção do movimento
    transition: {
      x: {
        repeat: Infinity,
        duration: 25,
        ease: 'linear'
      }
    }
  }
};



const experienceContainerVariants = {
  animate: {
    x: ['-100%', '100%'], // Inverte a direção do movimento
    transition: {
      x: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear'
      }
    }
  }
};

const academicContainerVariants = {
  animate: {
    x: ['100%', '-100%'], // Inverte a direção do movimento
    transition: {
      x: {
        repeat: Infinity,
        duration: 25,
        ease: 'linear'
      }
    }
  }
};
// .

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
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
              onClick={() => handleButtonClick("experience")}
            >
              Contact
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
          começou sua carreira na tecnologia no ano de 2014<br></br> onde já prestava serviços corrigindo
          e reparando Hardwares e Softwares, ao longo do tempo foi obtendo experiência profissional<br></br>
          e passando para outras áreas da tecnologia como analista de suporte,
          analista de sistemas, segurança da informação<br></br> analista de infraestrutura e redes,
          nesse meio tempo certificou-se em Linux, sistema operacional completo, em programação web<br></br> PHP com a Udemy,
          até que um dia despertou interesse na área da programação e desenvolvimento, onde se destacou desenvolvendo<br></br> seu primeiro projeto de sucesso na carreira, um sistema de "Telecomunicação discagem automática", desde então iniciou-se<br></br> uma paixão pela criação e pelo mundo DEV, como já havia conhecimento em sistemas e cloud, se tornou um DevOps.
          Ao todo sua carreira<br></br> soma 9 anos sendo 4 anos dedicados ao desenvolvimento.

          Esse é um pedaço da minha história. Agradeço pela leitura<br></br> e conto com você para continuar
          construindo as paginas do meu livro.

          <br></br><h3>English.</h3>

          "Everton Santos lives in the city of São Paulo, specifically in the eastern zone of São Paulo in Itaquera. He began his career in technology in 2014,<br></br> where he was already providing services in hardware and software troubleshooting and repair. Over time, he gained professional experience and transitioned<br></br>to other areas of technology, such as support analyst, systems analyst, information security, infrastructure and network analyst.<br></br> During this time, he obtained a complete certification in Linux operating systems and PHP programming through Udemy.

          One day, <br></br> he developed a keen interest in programming and software development, which led to his standout success in his first career project: <br></br> an automatic dialing telecom system. This marked the beginning of his passion for creation and the world of development.<br></br> With his knowledge in systems and cloud technologies, he became a DevOps professional. In total, his career spans nine years,<br></br> with four dedicated to development.

          This is a part of my story. Thank you for reading, and I look forward to continuing to build the pages of my book. After all, <br></br>those of us who love technology are adventurers who never stop in time; we move alongside the ever-evolving world of technology."
        </motion.div>
        <hr />
        <section id="skills">
          <h2>HABILIDADES / SKILLS</h2>
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
          <div className="section-divider"></div> {/* Adicione essa linha */}
        </section>

        <section id="stack">
          <h2>TECNOLOGIAS / TECHNOLOGIES</h2>
          <motion.div
            className="stack-container"
            variants={stackContainerVariants}
            initial="initial"
            animate="animate"
          >
            {stack.map((stack, index) => (
              <motion.div
                key={index}
                className="stack-item"
                style={{
                  backgroundImage: `url(${stack})`,
                }}
              />
            ))}
          </motion.div>
          <div className="section-divider"></div> {/* Adicione essa linha */}
        </section>
        <hr />
        <section id="experiences">
          <h2>EXPERIENCE / EXPERIÊNCIAS</h2>
          <motion.div
            className="experiences-container"
            variants={experienceContainerVariants}
            initial="initial"
            animate="animate"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="experiences-item"
                style={{
                  backgroundImage: `url(${experience})`,
                }}
              />
            ))}
          </motion.div>
        </section>
        <hr />
        <section id="academic">
          <h3>FORMAÇÃO / ACADEMIC</h3>
          <motion.div
            className="academic-container"
            variants={academicContainerVariants} 
            initial="initial"
            animate="animate"
          >
            {academic.map((academic, index) => (
              <motion.div
                key={index}
                className="academic-item" 
                style={{
                  backgroundImage: `url(${academic})`,
                }}
              />
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;