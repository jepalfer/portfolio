import React from 'react'
import '../css/text.css'
import '../css/experience.css'
import whiteProject from '../assets/images/projectIndicatorWhite.png'
import blackProject from '../assets/images/projectIndicatorBlack.png'
function Experience({mode}) {
  return (
    <section className="Projects-grid">
        <img src={`${mode ? whiteProject : blackProject}`}></img>
        <section className="Projects-content-grid">
            <text className={`Title`}>
                LOREM IPSUM DOLOR
            </text>

            <text className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
                LOREM IPSUM DOLOR (2024) - LOREM IPSUM DOLOR (2030)
            </text>
            
            <text className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dui magna. Sed venenatis lorem fermentum diam fermentum, eu ornare felis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris in mi odio. Quisque vitae placerat quam, vitae tincidunt arcu. Fusce vitae laoreet lorem, vel tincidunt quam. Sed magna felis, scelerisque eu turpis non, rhoncus venenatis elit. Proin sed tellus orci. Aenean ligula est, gravida non quam sit amet, rutrum rutrum ante.
            </text>
            
        </section>
        <img src={`${mode ? whiteProject : blackProject}`}></img>
        <section className="Projects-content-grid">
            <text className={`Title`}>
                LOREM IPSUM DOLOR
            </text>

            <text className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
                LOREM IPSUM DOLOR (2024) - LOREM IPSUM DOLOR (2030)
            </text>
            
            <text className={`Text ${mode ? "Dark-mode-project-text" : "Light-mode-project-text"}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dui magna. Sed venenatis lorem fermentum diam fermentum, eu ornare felis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris in mi odio. Quisque vitae placerat quam, vitae tincidunt arcu. Fusce vitae laoreet lorem, vel tincidunt quam. Sed magna felis, scelerisque eu turpis non, rhoncus venenatis elit. Proin sed tellus orci. Aenean ligula est, gravida non quam sit amet, rutrum rutrum ante.
            </text>
            
        </section>
    </section>
  )
}

export default Experience;
