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
            <SectionTitle nombre="SOBRE MÍ"/>
            <AboutMe/>
            <div className="Separator"></div>
            <SectionTitle nombre="EXPERIENCIA"/>
            <div className="Separator"></div>
            <SectionTitle nombre="MIS PROYECTOS"/>
            <div className="Separator"></div>
            <SectionTitle nombre="CONTACTO"/>
          </section>
        </section>
      </header>
    </div>
  );
}

//NARANJA: #E2725B

export default App;
