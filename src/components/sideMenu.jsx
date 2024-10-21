import '../css/sideMenu.css'
import React from 'react'
import SideBarButton from './sideBarButton';

function SideMenu({mode}) {
  return (
    <aside className ="Side-bar">
        <section className={`Side-bar-grid ${mode ? "Dark-mode-side-bar" : "Light-mode-side-bar"}`}>
            <SideBarButton text = "SOBRE MÍ" mode = {mode}/>
            <SideBarButton text = "EXPERIENCIA" mode = {mode}/>
            <SideBarButton text = "PROYECTOS" mode = {mode}/>
            <SideBarButton text = "CONTACTO" mode = {mode}/>
        </section>
    </aside>
  )
}

export default SideMenu;
