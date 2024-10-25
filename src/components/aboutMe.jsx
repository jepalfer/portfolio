import '../css/aboutMe.css'
import '../css/text.css'
import React from 'react'
import Separator from './separator';
import GithubButton from './githubButton';
import CvButton from './cvButton';
import LinkedinButton from './linkedinButton';

function AboutMe({mode}) {
  return (
    <section>
      <p className={`Text ${mode ? "Dark-mode-about-text" : "Light-mode-about-text"}`}>
        ¡Hola! Soy Jesús Palomares, un desarrollador Full Stack con una gran pasión por los videojuegos y la tecnología. 
        Llevo más de 2 años trabajando en proyectos tanto personales como profesionales, con experiencia en 
        el desarrollo de aplicaciones web y videojuegos. Mi objetivo es fusionar mis habilidades técnicas con mi 
        amor por los juegos para crear experiencias interactivas únicas.
      </p><br></br>
      <p className={`Text ${mode ? "Dark-mode-about-text" : "Light-mode-about-text"}`}>
          Me especializo en tecnologías como C#, C++ o Java. 
          Además, en el campo de los videojuegos, tengo experiencia desarrollando títulos en 2D, incluyendo 
          un proyecto de RPG, una versión alternativa de ajedrez combinada con Pokémon y una variación del famoso buscaminas. 
          Mi trabajo final de grado fue un videojuego 2D hecho en pixel art, que refleja mi compromiso con el arte y la creatividad en los juegos y proyectos.
      </p>
      <Separator/>
      <section className="Buttons-grid">
        <article id="Github-section">
          <GithubButton mode = {mode}/>
        </article>
        <article id="Vertical-separator-1">
        </article>
        <article id="CV-section">
          <CvButton mode = {mode}/>
        </article>
        <article id="Vertical-separator-2">
        </article>
        <article id="Vertical-separator-3">
        </article>
        <article id="Linkedin-section">
          <LinkedinButton mode={mode}/>
        </article>
      </section>

    </section>
  )
}

export default AboutMe;