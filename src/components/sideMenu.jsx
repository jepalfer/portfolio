import '../css/sideMenu.css'
import React from 'react'
import SideBarButton from './sideBarButton';

function SideMenu() {
  return (
    <aside className ="Side-bar">
        <section className="Side-bar-grid">
            <SideBarButton text = "SOBRE MÍ"/>
            <SideBarButton text = "EXPERIENCIA"/>
            <SideBarButton text = "PROYECTOS"/>
            <SideBarButton text = "CONTACTO"/>
        </section>
    </aside>
  )
}

export default SideMenu;
