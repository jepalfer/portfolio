import '../css/sideMenu.css'
import React from 'react'
import SideBarButton from './sideBarButton';
import brightWhiteButton from '../assets/images/brightWhite.png'
import brightBlackButton from '../assets/images/brightBlack.png'
import darkWhiteButton from '../assets/images/darkWhite.png'
import darkBlackButton from '../assets/images/darkBlack.png'
import blackArrows from '../assets/images/blackArrows.png'
import whiteArrows from '../assets/images/whiteArrows.png'

function SideMenu({mode, open, toggleDarkMode, toggleOpenSideBar}) {
  let selectedModeImage;
  let selectedArrowsImage;
  if (open) {
    if (mode){
      selectedModeImage = darkBlackButton;
      selectedArrowsImage = blackArrows;
    }
    else{
      selectedModeImage = brightWhiteButton;
      selectedArrowsImage = whiteArrows;
    }
  }
  else {
    if (mode){
      selectedModeImage = darkWhiteButton;
      selectedArrowsImage = whiteArrows;
    }
    else{
      selectedModeImage = brightBlackButton;
      selectedArrowsImage = blackArrows;
    }
  }
  return (
    <aside className ="Side-bar">
        <section className={`Side-bar-grid ${mode ? "Dark-mode-side-bar" : "Light-mode-side-bar"}`}>
            <section className="Toggle-buttons-grid">
              <img src={selectedArrowsImage} /* onClick={toggleOpenSideBar} */></img>
            </section>
            <SideBarButton text = "SOBRE MÍ" mode = {mode} section="#about"/>
            <SideBarButton text = "EXPERIENCIA" mode = {mode} section="#experience"/>
            <SideBarButton text = "PROYECTOS" mode = {mode} section="#projects"/>
            <SideBarButton text = "CONTACTO" mode = {mode} section="#contact"/>
            <section className="Toggle-buttons-grid">
              <img src={selectedModeImage} onClick={toggleDarkMode}></img>
            </section>
        </section>
    </aside>
  )
}

export default SideMenu;
