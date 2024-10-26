import React from 'react'
import '../css/projectCard.css'

function ProjectCard({mode, title, image, text, technologies, buttons}) {
  return (
    <article className={`Project-card ${mode ? "Dark-mode-project-card" : "Light-mode-project-card"}`}>
        <section className="Project-content">
          <section className="Project-card-top">
            <h2 className="Title">
              {title}
            </h2>
            <section className="Project-technologies">
              {technologies.map((TechnologyComponent, index) => 
                React.cloneElement(TechnologyComponent, { mode, key: index })
              )}
            </section>
          </section>

          <article className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
            {text}
          </article>
          
          <section className="Project-buttons">
            {buttons.map((ButtonComponent, index) => 
              React.cloneElement(ButtonComponent, { mode, key: index })
            )}
          </section>
        </section>
        <img className={`Project-image ${mode ? "Dark-mode-project-image-border" :"Light-mode-project-image-border" }`} src={image}></img>
        
    </article>
  )
}

export default ProjectCard;