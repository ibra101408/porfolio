import React from 'react'
import CV from '../../assets/cv.pdf'      /*  need to add a CV    */


const CTA = () => {
    return(
       <div className="cta">
           <a href={CV} download className='btn'>Download CV</a>
           <a href="#contact" className='btn-primary-bg'>Let's talk</a>
       </div>
    )
}

export default CTA