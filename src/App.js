import './Fonts.css';
import './css/App.css';
import './css/projectCard.css'
import SideMenu from './components/sideMenu.jsx';
import AboutMe from './components/aboutMe.jsx';
import SectionTitle from './components/sectionTitle.jsx';
import Separator from './components/separator.jsx';
import TitleSeparator from './components/titleSeparator.jsx';
import React, {useState} from 'react';
import Experience from './components/experience.jsx';
import ProjectCard from './components/projectCard.jsx';
import chessUI from './assets/images/chessUI.jpg'
import indicator from './assets/images/projectIndicatorBlack.png'
import previousProjectWhite from './assets/images/previousProjectWhite.png'
import previousProjectBlack from './assets/images/previousProjectBlack.png'
import nextProjectWhite from './assets/images/nextProjectWhite.png'
import nextProjectBlack from './assets/images/nextProjectBlack.png'
import soulsweeper from './assets/images/soulSweeper.png'
import portfolio from './assets/images/portfolio.png'
import Contact from './components/contact.jsx';
import GithubButton from './components/githubButton.jsx';
import UnityTechnology from './components/unityTechnology.jsx';
import CodeButton from './components/codeButton.jsx';
import ReactTechnology from './components/reactTechnology.jsx';
import DownloadButton from './components/downloadButton.jsx';
import WebButton from './components/webButton.jsx';
import FigmaTechnology from './components/figmaTechnology.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const titles = ["Elemental chess", 
    "Portfolio personal", 
    "Soulsweeper"
  ];
  const images = [chessUI, 
    portfolio, 
    soulsweeper
  ];
  const texts = ["Elemental chess es un videojuego comercial realizado en Unity que consiste en un ajedrez con tipos elementales, cada uno con una o varias debilidades, tal y como si fuera Pokémon. La UI ha sido diseñada en su totalidad con Figma.", 
    "Este portfolio ha sido creado con la intención de aprender el framework React, a la vez que sirve para mostrar mis proyectos personales al resto del mundo. Ha sido diseñado enteramente con Figma.", 
    "Soulsweeper es un videojuego realizado en Unity a modo de proyecto personal y no es comercial. Consiste en una recreación del famoso buscaminas, con selector de niveles de dificultad, modo contrarreloj y tabla de puntuaciones"
  ];

  const technologies = [[<UnityTechnology mode={isDarkMode}/>], 
                        [<ReactTechnology mode={isDarkMode}/>, <FigmaTechnology mode={isDarkMode}/>], 
                        [<UnityTechnology mode={isDarkMode}/>]
  ];
  const buttons = [[<CodeButton mode={isDarkMode}/>, <WebButton mode={isDarkMode}/>],
                   [<CodeButton mode={isDarkMode} link="https://github.com/jepalfer/portfolio/tree/master"/>],
                   [<CodeButton mode={isDarkMode} link="https://github.com/jepalfer/minesweeper"/>]

  ];
  
  const [index, setIndex] = useState(0); // Estado para manejar el índice actual del proyecto
  const [selectedTitle, setSelectedTitle] = useState(titles[0]); // Estado para el título
  const [selectedImage, setSelectedImage] = useState(images[0]); // Estado para la imagen
  const [selectedText, setSelectedText] = useState(texts[0]); // Estado para el texto
  const [selectedTechnologies, setSelectedTechnologies] = useState(technologies[0]);
  const [selectedButtons, setSelectedButtons] = useState(buttons[0]);
  

  function changeProject(newIndex) {
    if (newIndex < 0){
      newIndex = (titles.length - 1);
    }
    else {
      if (newIndex == titles.length) {
        newIndex = 0;
      }
    }
    // Actualizamos el índice y los estados correspondientes
    setIndex(newIndex);
    setSelectedTitle(titles[newIndex]);
    setSelectedImage(images[newIndex]);
    setSelectedText(texts[newIndex]);
    setSelectedTechnologies(technologies[newIndex]);
    setSelectedButtons(buttons[newIndex]);
  }


  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <header className="App-header" id="#about">
        <section className={`${isOpen ? "Grid-open" : "Grid-closed"} ${isDarkMode ? "Dark-mode-grid" : "Light-mode-grid"}`}>
          <SideMenu mode={isDarkMode} open={isOpen} toggleDarkMode={toggleDarkMode} toggleOpenSideBar={toggleSideBar}/>
          <div></div>
          <section className="Content">
            {/* About me */}
            <Separator/>
            <section>
              <SectionTitle nombre="SOBRE MÍ"/>
              <TitleSeparator/>
              <TitleSeparator/>
              <AboutMe mode={isDarkMode}/>
            </section>
            {/* Experience */}
            <Separator/>
            <section id="#experience">
              <SectionTitle nombre="EXPERIENCIA"/>
              <TitleSeparator/>
              <Experience mode = {isDarkMode}/>
            </section>
            {/* Projects */}
            <TitleSeparator/>

            <section id="#projects">
              <SectionTitle nombre="MIS PROYECTOS"/>
              <TitleSeparator/>
              <section className="Project-cards-grid">
                <button className="Change-project-button" onClick={() => changeProject(index - 1)}>
                  <img src={`${isDarkMode ? previousProjectWhite : previousProjectBlack}`}></img>
                </button>
                <ProjectCard mode = {isDarkMode} title={selectedTitle} image={selectedImage} text={selectedText} 
                technologies={selectedTechnologies} buttons={selectedButtons}/>
                <button className="Change-project-button" onClick={() => changeProject(index + 1)}>
                  <img src={`${isDarkMode ? nextProjectWhite : nextProjectBlack}`}></img>
                </button>
              </section>
            </section>
            {/* Contact */}
            <TitleSeparator/>
            <Separator/>
            <section id="#contact">
              <SectionTitle nombre="CONTACTO"/>
              <TitleSeparator/>
              {/* <Contact/> */}
            </section>
          </section>

          <section className="Down-bar">

          </section>
        </section>
      </header>
    </div>
  );
}

//NARANJA: #E2725B

export default App;
