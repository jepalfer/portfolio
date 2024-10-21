import React from 'react'
import '../css/text.css'
import '../css/experience.css'
import whiteExperience from '../assets/images/projectIndicatorWhite.png'
import blackExperience from '../assets/images/projectIndicatorBlack.png'
function Experience({mode}) {
  return (
    <section className="Experience-grid">
        <img src={`${mode ? whiteExperience : blackExperience}`}></img>
        <section className="Experience-content-grid">
            <text className={`Title`}>
                LOREM IPSUM DOLOR
            </text>

            <text className={`Text  ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                LOREM IPSUM DOLOR (2024) - LOREM IPSUM DOLOR (2030)
            </text>
            
            <text className={`Text ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dui magna. Sed venenatis lorem fermentum diam fermentum, eu ornare felis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris in mi odio.
            </text>
            
        </section>
        <img src={`${mode ? whiteExperience : blackExperience}`}></img>
        <section className="Experience-content-grid">
            <text className={`Title`}>
                LOREM IPSUM DOLOR
            </text>

            <text className={`Text ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
                LOREM IPSUM DOLOR (2024) - LOREM IPSUM DOLOR (2030)
            </text>
            
            <text className={`Text ${mode ? "Dark-mode-experience-text" : "Light-mode-experience-text"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dui magna. Sed venenatis lorem fermentum diam fermentum, eu ornare felis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris in mi odio. Quisque vitae placerat quam, vitae tincidunt arcu. Fusce vitae laoreet lorem, vel tincidunt quam. Sed magna felis, scelerisque eu turpis non, rhoncus venenatis elit. Proin sed tellus orci. Aenean ligula est, gravida non quam sit amet, rutrum rutrum ante.
            </text>
            
        </section>
    </section>
  )
}

export default Experience;
