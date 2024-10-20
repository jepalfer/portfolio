import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text}) {
  return (
    <p className="SideBarText">
        {text}
    </p>
  )
}

export default SideBarButton;