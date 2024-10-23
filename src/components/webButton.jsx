import React from 'react'
import '../css/linkButtons.css'

import logoBlanco from '../assets/images/webWhite.png'
import logoNegro from '../assets/images/webBlack.png'
function WebButton({mode}) {
  return (
    <a href='https://github.com/jepalfer' target='blank'>
        <button className={`Project-button ${mode ? "Dark-mode-project-button" : "Light-mode-project-button"}`}>
          <div></div>
          <img className='Technology-logo' src={`${mode ? logoNegro : logoBlanco}`} ></img>
          <div></div>
          <text className={`Technology-text ${mode ? "Dark-mode-technology-button-text" : "Light-mode-technology-button-text"}`}>
            Web
          </text>
        </button>
    </a>
  )
}

export default WebButton;
