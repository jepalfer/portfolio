import React from 'react'
import '../css/linkButtons.css'

import logoBlanco from '../assets/images/webWhite.png'
import logoNegro from '../assets/images/webBlack.png'
function WebButton({mode, link}) {
  return (
    <a href='https://github.com/jepalfer' target='blank'>
        <button className={`Project-button ${mode ? "Dark-mode-project-button" : "Light-mode-project-button"}`}>
          <img className='Technology-logo' src={`${mode ? logoNegro : logoBlanco}`} ></img>
          <text className={`Technology-text ${mode ? "Dark-mode-technology-button-text" : "Light-mode-technology-button-text"}`}>
            Web
          </text>
        </button>
    </a>
  )
}

export default WebButton;
