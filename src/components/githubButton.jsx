import React from 'react'
import '../css/linkButtons.css'
import logoBlanco from '../assets/images/githubWhite.png'
import logoNegro from '../assets/images/githubBlack.png'
function GithubButton({mode}) {
  return (
    <a href='https://github.com/jepalfer' target='blank'>
        <button className={`Github-button Link-button Button-grid ${mode ? "Dark-mode-link-button" : "Light-mode-link-button"}`}>
            <img className='Logo' src={`${mode ? logoBlanco : logoNegro}`} alt="Logo de github"></img>
                GITHUB
        </button>
    </a>
  )
}

export default GithubButton;