import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text}) {
  return (
    <button className="SideBarButton">
        <text className="SideBarText">
            {text}
        </text>
    </button>
  )
}

export default SideBarButton;