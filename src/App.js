import './Fonts.css';
import './css/App.css';
import SideMenu from './components/sideMenu.jsx';
import AboutMe from './components/aboutMe.jsx';
import SectionTitle from './components/sectionTitle.jsx';
import Separator from './components/separator.jsx';
import TitleSeparator from './components/titleSeparator.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="Grid">
          <SideMenu/>
          <div></div>
          <section>
            {/* About me */}
            <Separator/>
            <SectionTitle nombre="SOBRE MÍ"/>
            <TitleSeparator/>
            <TitleSeparator/>
            <AboutMe/>
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
