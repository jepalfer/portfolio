import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text}) {
  return (
    <button className="Side-bar-button">
        {text}
        {/* <text className="Side-bar-text">
        </text> */}
    </button>
  )
}

export default SideBarButton;