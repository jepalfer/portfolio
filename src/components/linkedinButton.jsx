import React from 'react'
import '../css/linkButtons.css'
import logoBlanco from '../assets/images/linkedinWhite.png'
import logoNegro from '../assets/images/linkedinBlack.png'
function LinkedinButton({mode}) {
  return (
  
    <a href='https://www.linkedin.com/in/jesus-palomares-fernandez/' target='blank'>
    <button className={`Link-button Button-grid ${mode ? "Dark-mode-link-button" : "Light-mode-link-button"}`}>
        <div></div>
        <img className='Logo' src={`${mode ? logoBlanco : logoNegro}`} alt="Logo de github"></img>
        LINKEDIN
    </button>
</a>
  )
}

export default LinkedinButton;
