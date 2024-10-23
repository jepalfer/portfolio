import React from 'react'
import '../css/technology.css'
import whiteFigma from '../assets/images/figmaWhite.png'
import blackFigma from '../assets/images/figmaBlack.png'

function FigmaTechnology({mode}) {
  return (
    <div className={`Grid-technology ${mode ? "Dark-mode-technology" : "Light-mode-technology"}`}>
      <div></div>
      <img className="Technology-logo" src={`${mode ? whiteFigma : blackFigma}`}>
      </img>
      <div></div>
      <text className={`Technology-text ${mode ? "Dark-mode-technology-text" : "Light-mode-technology-text"}`}>
        Figma
      </text>
    </div>
  )
}

export default FigmaTechnology;