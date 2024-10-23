import '../css/sideMenu.css'
import React from 'react'
import SideBarButton from './sideBarButton';
import brightWhiteButton from '../assets/images/brightWhite.png'
import brightBlackButton from '../assets/images/brightBlack.png'
import darkWhiteButton from '../assets/images/darkWhite.png'
import darkBlackButton from '../assets/images/darkBlack.png'
import blackArrowsClose from '../assets/images/blackArrowsClose.png'
import whiteArrowsClose from '../assets/images/whiteArrowsClose.png'
import blackArrowsOpen from '../assets/images/blackArrowsOpen.png'
import whiteArrowsOpen from '../assets/images/whiteArrowsOpen.png'
import whiteLogo from '../assets/images/logoWhite.png'
import blackLogo from '../assets/images/logoBlack.png'
function SideMenu({mode, open, toggleDarkMode, toggleOpenSideBar}) {
  let selectedModeImage;
  let selectedArrowsImage;
  if (open) {
    if (mode){
      selectedModeImage = darkBlackButton;
      selectedArrowsImage = blackArrowsClose;
    }
    else{
      selectedModeImage = brightWhiteButton;
      selectedArrowsImage = whiteArrowsClose;
    }
  }
  else {
    if (mode){
      selectedModeImage = darkWhiteButton;
      selectedArrowsImage = whiteArrowsClose;
    }
    else{
      selectedModeImage = brightBlackButton;
      selectedArrowsImage = blackArrowsClose;
    }
  }
  return (
    <aside className ="Side-bar">
        <section className={`Side-bar-grid ${mode ? "Dark-mode-side-bar" : "Light-mode-side-bar"}`}>
            <img className="Personalized-logo" src={`${mode ? blackLogo : whiteLogo}`}></img>
            {/* <div></div> */}
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
