import React from 'react'
import '../css/linkButtons.css'
import logoBlanco from '../assets/images/githubWhite.png'
function GithubButton() {
  return (
    <a href='https://github.com/jepalfer' target='blank'>
        <button className="Github-button Link-button Button-grid">
            <img className='Logo' src={logoBlanco} alt="Logo de github"></img>
                GITHUB
        </button>
    </a>
  )
}

export default GithubButton;