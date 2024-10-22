import React from 'react'
import '../css/text.css'
import '../css/experience.css'
import whiteExperience from '../assets/images/projectIndicatorWhite.png'
import blackExperience from '../assets/images/projectIndicatorBlack.png'
function Experience({mode}) {
  return (
    <section className="Experience-grid">
        <img className="Experience-indicator" src={`${mode ? whiteExperience : blackExperience}`}></img>
        <section className="Experience-content-grid">
            <text className={`Title`}>
                ORGANIZADOR DE EVENTOS
            </text>

            <text className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                UGR LAN Party, Granada | Septiembre 2023 - Actual
            </text>
            <ul>
                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Coordinación y supervisión de la sección dedicada a juegos de lucha.
                </li>
                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Propuesta de actividades.
                </li>
                
                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Propuesta de potenciales colaboradores externos al evento.
                </li>
            </ul>
            
        </section>
        <img className="Experience-indicator" src={`${mode ? whiteExperience : blackExperience}`}></img>
        <section className="Experience-content-grid">
            <text className={`Title`}>
                PROGRAMADOR DE APLICACIÓN MÓVIL
            </text>

            <text className={`Text ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                Colegio San Rafael, Granada | Octubre 2023 - Enero 2024
            </text>
            
            <ul>
                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Trabajo en equipo con un grupo de 8 personas.
                </li>

                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Realización de reuniones diarias con el equipo de desarrollo.
                </li>

                <li className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                    Realización de reuniones con el cliente.
                </li>
            </ul>
            
        </section>
        
    </section>
  )
}

export default Experience;
