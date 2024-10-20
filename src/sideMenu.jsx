import './sideMenu.css'
import React from 'react'

function SideMenu() {
  return (
    <aside className ="Side-bar">
        <section className="Side-bar-grid">
            <p className="SideBarText">
                SOBRE MÍ
            </p>
            <p className="SideBarText">
                EXERIENCIA
            </p>
            <p className="SideBarText">
                PROYECTOS
            </p>
            <p className="SideBarText">
                CONTACTO
            </p>
            
        </section>
    </aside>
  )
}

export default SideMenu;
