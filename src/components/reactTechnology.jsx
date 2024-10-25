import React from 'react'
import '../css/technology.css'
import whiteReact from '../assets/images/reactWhite.png'
import blackReact from '../assets/images/reactBlack.png'
function ReactTechnology({mode}) {
  return (
    <div className={`Grid-technology ${mode ? "Dark-mode-technology" : "Light-mode-technology"}`}>
      <img className="Technology-logo" src={`${mode ? whiteReact : blackReact}`}>
      </img>
      <text className={`Technology-text ${mode ? "Dark-mode-technology-text" : "Light-mode-technology-text"}`}>
        React | JS
      </text>
    </div>
  )
}

export default ReactTechnology;
