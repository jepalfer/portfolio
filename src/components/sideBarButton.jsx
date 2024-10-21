import '../css/sideBarButton.css'
import React from 'react'

function SideBarButton({text, mode, section}) {
  function scrollToSection(section) {
    const element = document.getElementById(section);
    element?.scrollIntoView({
        behavior: 'smooth'
    });
  }
  return (
    <button className={`Side-bar-button ${mode ? "Dark-mode-side-bar-button" : "Light-mode-side-bar-button"}`} 
            onClick={() => scrollToSection(section)}>
          {text}
        {/* <text className="Side-bar-text">
        </text> */}
    </button>
  )
}

export default SideBarButton;