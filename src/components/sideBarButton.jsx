import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text, mode}) {
  return (
    <button className={`Side-bar-button ${mode ? "Dark-mode-side-bar-button" : "Light-mode-side-bar-button"}`}>
        {text}
        {/* <text className="Side-bar-text">
        </text> */}
    </button>
  )
}

export default SideBarButton;