import './Fonts.css';
import './css/App.css';
import SideMenu from './components/sideMenu.jsx';
import AboutMe from './components/aboutMe.jsx';
import SectionTitle from './components/sectionTitle.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="Grid">
          <SideMenu/>
          <div></div>
          <section>
            <div className="Separator"></div>
            <SectionTitle nombre="SOBRE MÍ"/>
            <div className="TitleSeparator"></div>
            <AboutMe/>
            <div className="Separator"></div>
            <SectionTitle nombre="EXPERIENCIA"/>
            <div className="TitleSeparator"></div>
            <div className="Separator"></div>
            <SectionTitle nombre="MIS PROYECTOS"/>
            <div className="TitleSeparator"></div>
            <div className="Separator"></div>
            <SectionTitle nombre="CONTACTO"/>
            <div className="TitleSeparator"></div>
          </section>
        </section>
      </header>
    </div>
  );
}

//NARANJA: #E2725B

export default App;
