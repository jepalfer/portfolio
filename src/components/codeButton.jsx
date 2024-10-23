import React from 'react'
import '../css/technology.css'
import logoNegro from '../assets/images/codeBlack.png'
import logoBlanco from '../assets/images/codeWhite.png'
function CodeButton({mode}) {
  return (
    <a href='https://github.com/jepalfer' target='blank'>
        <button className={`Project-button ${mode ? "Dark-mode-project-button" : "Light-mode-project-button"}`}>
          <div></div>
          <img className='Technology-logo' src={`${mode ? logoNegro : logoBlanco}`} ></img>
          <div></div>
          <text className={`Technology-text ${mode ? "Dark-mode-technology-button-text" : "Light-mode-technology-button-text"}`}>
            Código
          </text>
        </button>
    </a>
  )
}

export default CodeButton;
