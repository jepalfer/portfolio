import './Fonts.css';
import './css/App.css';
import SideMenu from './components/sideMenu.jsx';
import AboutMe from './components/aboutMe.jsx';
import SectionTitle from './components/sectionTitle.jsx';
import Separator from './components/separator.jsx';
import TitleSeparator from './components/titleSeparator.jsx';
import {useState} from 'react';
function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  }
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="App">
      <header className="App-header">
        <section className={`Grid ${isDarkMode ? "Dark-mode-grid" : "Light-mode-grid"}`}>
          <SideMenu mode={isDarkMode}/>
          <div></div>
          <section>
            {/* About me */}
            <Separator/>
            <SectionTitle nombre="SOBRE MÍ"/>
            <TitleSeparator/>
            <TitleSeparator/>
            <AboutMe mode={isDarkMode}/>
            {/* Experience */}
            <Separator/>
            <SectionTitle nombre="EXPERIENCIA"/>
            {/* Projects */}
            <TitleSeparator/>
            <Separator/>
            <SectionTitle nombre="MIS PROYECTOS"/>
            {/* Contact */}
            <TitleSeparator/>
            <Separator/>
            <SectionTitle nombre="CONTACTO"/>
            <TitleSeparator/>
          </section>
        </section>
      </header>
    </div>
  );
}

//NARANJA: #E2725B

export default App;
