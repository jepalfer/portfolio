import React from 'react'
import '../css/linkButtons.css'
import logoBlanco from '../assets/images/documentWhite.png'
import cv from '../assets/cv-english.pdf'
function CvButton() {
  return (
    <a download={cv}>
        <button className="CV-button Link-button Button-grid">
            <img className='Logo' src={logoBlanco} alt="Logo de CV"></img>
            CV
        </button>
    </a>
  )
}

export default CvButton;
