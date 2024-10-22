import React from 'react'
import '../css/projectCard.css'
import chessUI from '../assets/images/chessUI.jpg'

function ProjectCard({mode}) {
  return (
    <article className={`Project-card ${mode ? "Dark-mode-project-card" : "Light-mode-project-card"}`}>
        <section className="Project-content">
          <text className="Title">
            ELEMENTAL CHESS
          </text>
          <section className="Project-technologies">

          </section>

          <article className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
            Elemental chess es un videojuego comercial realizado en Unity que consiste en un ajedrez
            con tipos elementales, cada uno con una o varias debilidades, tal y como si fuera Pokémon.

            La UI ha sido diseñada en su totalidad con Figma.
          </article>
        </section>
        <img className={`Project-image ${mode ? "Dark-mode-project-image-border" :"Light-mode-project-image-border" }`} src={chessUI}></img>
        {/* <div></div>
        <div></div>
        <text className={`Project-text ${mode ? "Dark-mode-project-card-text" :"Light-mode-project-card-text" }`}>
            Videojuego comercial realizado en Unity que consta de un ajedrez con tipos elementales
            de forma similar a Pokémon.
        </text>
        <div></div>
        <text className={`Project-text ${mode ? "Dark-mode-project-card-text" :"Light-mode-project-card-text" }`}>
            Hola
        </text> */}
    </article>
  )
}

export default ProjectCard;