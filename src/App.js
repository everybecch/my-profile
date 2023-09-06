import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const contactIcons = [
  {
    icon: '/my-profile/assets/gmail.png',
    link: 'mailto:everybby@gmail.com', // Substitua pelo seu endereço de e-mail
    alt: 'E-mail Icon',
  },
  {
    icon: '/my-profile/assets/linkedin.png',
    link: 'https://www.linkedin.com/in/everton-santos-55038415a/', // Substitua pelo seu perfil do LinkedIn
    alt: 'LinkedIn Icon',
  },
  {
    icon: '/my-profile/assets/gihub.png',
    link: 'https://github.com/everybecch', // Substitua pelo seu perfil do GitHub
    alt: 'GitHub Icon',
  },
  {
    icon: '/my-profile/assets/whatsapp.png',
    link: 'https://wa.link/nojen5', // Substitua pelo seu perfil do GitHub
    alt: 'GitHub Icon',
  },
];


const experiences = [
  '/my-profile/assets/ph.png',
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
  '/my-profile/assets/unicid.png',
  '/my-profile/assets/4linux.png',
  '/my-profile/assets/udemy.png',
  '/my-profile/assets/twilioadv.png',
];

const images = [
  '/my-profile/every.jpg',
  '/my-profile/every2.jpg',
  '/my-profile/every4.jpg',
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="background-animation" />
      <header className="App-header">
        <motion.img
          src={images[currentImageIndex]}
          alt="Foto de Perfil"
          className="profile-picture"
          variants={photoVariants}
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
              onClick={() => handleButtonClick("experiences")}
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
              onClick={() => handleButtonClick("contact")}
            >
              Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
              onClick={() => {
                window.open("https://github.com/everybecch", "_blank"); // add botao for github profile-me
              }}
            >
              GitHub
            </motion.button>
          </div>
        </section>
        <motion.h2
          className="content-container"
          variants={headerVariants}
          initial="initial"
          animate="animate"
        >
          SOBRE MIM / MY HISTORY
        </motion.h2>
        <div className="text-container">
          {/* Quadrado de texto em português */}
          <div className="text-box portuguese-text">
            <motion.div
              key="sobre-text-portuguese"
              variants={textVariants}
              animate="animate"
              exit="initial"
              style={{
                fontFamily: 'Arial',
                fontSize: '16px',
              }}
            >
              <h3>Português.</h3>
              "Everton Santos, reside na cidade de São Paulo especificamente na zona leste em Itaquera,
              começou sua carreira na tecnologia no ano de 2014 onde já prestava serviços corrigindo
              e reparando Hardwares e Softwares, ao longo do tempo foi obtendo experiência profissional
              e passando para outras áreas da tecnologia como analista de suporte,
              analista de sistemas, segurança da informação analista de infraestrutura e redes,
              nesse meio tempo certificou-se em Linux, sistema operacional completo, em programação web PHP com a Udemy,
              até que um dia despertou interesse na área da programação e desenvolvimento,
              onde se destacou desenvolvendo seu primeiro projeto de sucesso na carreira, um sistema de "Telecomunicação discagem automática"
              desde então iniciou-se uma paixão pela criação e pelo mundo DEV, como já havia conhecimento em sistemas e cloud, se tornou um DevOps.
              Ao todo sua carreira soma 9 anos sendo 4 anos dedicados ao desenvolvimento.
              <br></br>
              <br></br>
              Esse é um pedaço da minha história. Agradeço pela leitura e conto com você para continuar
              construindo as paginas do meu livro."
            </motion.div>
          </div>
          <div className="text-box english-text">
            <motion.div
              key="sobre-text-english"
              variants={textVariants}
              animate="animate"
              exit="initial"
              style={{
                fontFamily: 'Arial',
                fontSize: '16px',
              }}
            >
              <h3>English.</h3>

              "Everton Santos resides in the city of São Paulo, specifically in the eastern zone in Itaquera. He began his career in technology in the year 2014, where he was already providing services by troubleshooting and repairing hardware and software. Over time, he gained professional experience and transitioned to other areas of technology, such as support analyst, systems analyst, information security analyst, infrastructure and network analyst. During this time, he obtained certification in Linux, a complete operating system, and PHP web programming through Udemy.One day, he developed a keen interest in programming and software development, where he excelled by creating his first successful project in his career, an "Automatic Dialing Telecommunication" system. Since then, he has developed a passion for creation and the world of development. With his knowledge of systems and cloud technologies, he became a DevOps professional. In total, his career spans 9 years, with 4 years dedicated to development."
            </motion.div>
          </div>
        </div>
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
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            ))}
          </motion.div>
          <div className="section-divider"></div> {/* Adicione essa linha */}
        </section>
        <hr />
        <section id="experiences">
          <h2>EXPERIÊNCIAS / EXPERIENCE</h2>
          <div className="text-container">
            <div className="experiences-container">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="image-box"
                  style={{
                    backgroundImage: `url(${experience})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </section>
        <hr />

        <section id="academic">
          <h2>FORMAÇÃO / ACADEMIC / COURSES</h2>
          <div className="text-container">
            <div className="academic-container">
              {academic.map((academic, index) => (
                <motion.div
                  key={index}
                  className="image-box"
                  style={{
                    backgroundImage: `url(${academic})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </section>
        <hr />

        <section id="contact">
          <h2>CONTATO / CONTACT</h2>
          <div className="contact-icons">
            {contactIcons.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon" // Adicione a classe CSS para os ícones de contato
              >
                <img
                  src={contact.icon}
                  alt={contact.alt}
                  title={contact.alt}
                  width="40" // Defina a largura desejada
                  height="40" // Defina a altura desejada
                />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;