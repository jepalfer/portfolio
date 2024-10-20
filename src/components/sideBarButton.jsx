import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text}) {
  return (
    <button className="Side-bar-button">
        <text className="Side-bar-text">
            {text}
        </text>
    </button>
  )
}

export default SideBarButton;