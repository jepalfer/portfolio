import React from 'react'
import '../css/technology.css'
import whiteUnity from '../assets/images/unityWhite.png'
import blackUnity from '../assets/images/unityBlack.png'
function UnityTechnology({mode}) {
  return (
    <div className={`Grid-technology ${mode ? "Dark-mode-technology" : "Light-mode-technology"}`}>
      <div></div>
      <img className="Technology-logo" src={`${mode ? whiteUnity : blackUnity}`}>
      </img>
      <div></div>
      <text className={`Technology-text ${mode ? "Dark-mode-technology-text" : "Light-mode-technology-text"}`}>
        Unity
      </text>
    </div>
  )
}

export default UnityTechnology;