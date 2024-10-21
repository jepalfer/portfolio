import React from 'react'
import '../css/projectCard.css'
import chessUI from '../assets/images/chessUI.jpg'

function ProjectCard({mode}) {
  return (
    <article className={`Project-card ${mode ? "Dark-mode-project-card" : "Light-mode-project-card"}`}>
        <div></div>
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