import React from 'react'
import '../css/projectCard.css'

function ProjectCard({mode, title, image, text}) {
  return (
    <article className={`Project-card ${mode ? "Dark-mode-project-card" : "Light-mode-project-card"}`}>
        <section className="Project-content">
          <text className="Title">
            {title}
          </text>
          <section className="Project-technologies">

          </section>

          <article className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
            {text}
          </article>
        </section>
        <img className={`Project-image ${mode ? "Dark-mode-project-image-border" :"Light-mode-project-image-border" }`} src={image}></img>
        
    </article>
  )
}

export default ProjectCard;