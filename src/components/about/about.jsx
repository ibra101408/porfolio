import React from 'react'
import './about.css'
import ME from '../../assets/me&dron.png'
import {FaFonticonsFi} from 'react-icons/fa'
import {FaIcons} from 'react-icons/fa'
import {GiConsoleController} from 'react-icons/gi'


const About = () => {
    return(
        <section id='about'>About
            <h5> Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaFonticonsFi className="about__icon"/>
                            <h5>Experience</h5>
                            <small>Studying</small>
                        </article>

                        <article className="about__card">
                            <FaIcons className="about__icons"/>
                            <h5>Experience</h5>
                            <small>work</small>
                        </article>

                        <article className="about__card">
                            <GiConsoleController className="about__icons"/>
                            <h5>Experience</h5>
                            <small>projects</small>
                        </article>
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <a href="#contact" className="btn btn-primary">Lets talk</a>
                </div>
            </div>
        </section>
    )
}

export default About