import React from 'react'
import '../css/linkButtons.css'
import logoBlanco from '../assets/images/documentWhite.png'
import logoNegro from '../assets/images/documentBlack.png'
import cv from '../assets/cv-english.pdf'
function CvButton({mode}) {
  return (
    <a download={cv}>
        <button className={`CV-button Link-button Button-grid ${mode ? "Dark-mode-link-button" : "Light-mode-link-button"}`}>
            <img className='Logo' src={`${mode ? logoBlanco : logoNegro}`} alt="Logo de CV"></img>
            CV
        </button>
    </a>
  )
}

export default CvButton;
