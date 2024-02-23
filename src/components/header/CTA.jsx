import React from 'react'
import CV from '../../assets/cv_vodenejev.pdf'      /*  need to add a CV    */
import './header.css'


const CTA = () => {
    return(
       <div className="cta">
           <a id="btn1" href={CV} download className='btn'>Download CV</a>
           <a id="btn2" href="#contact" className='btn-primary-bg'>Let's talk</a>
       </div>
    )
}

export default CTA