import React from 'react'
import './about.css'
import ME from '../../assets/me&dron.png'
import {GiSoccerKick} from 'react-icons/gi'
import {GiDeliveryDrone} from 'react-icons/gi'
import {GiConsoleController} from 'react-icons/gi'


const About = () => {
    return(
        <section id='about'>
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
                            <GiDeliveryDrone className="about__icons"/>
                            <h5>Dron pilot</h5>
                            <div className="container__small">
                                <small>
                                    One of my hobbies is filing with a drone.
                                    I really love to travel to different countries
                                    and search beautiful places and views for filming.
                                </small>
                            </div>
                        </article>

                        <article className="about__card">
                            <GiSoccerKick className="about__icons"/>
                            <h5>Football</h5>
                            <div className="container__small">
                                <small>
                                    Since I was young my favorite sport was football.
                                    Till now I play every week with friends for fun.
                                </small>
                            </div>
                        </article>

                        <article className="about__card">
                            <GiConsoleController className="about__icons"/>
                            <h5>Video games</h5>
                            <div className="container__small">
                                <small>
                                    Video games also one of my hobby.
                                    Sometimes I find time to play in my ps4 or VR glasses with friends.
                                </small>
                            </div>
                        </article>
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <a href="#contact" className="btn btn-primary-bg">Lets talk</a>
                </div>
            </div>
        </section>
    )
}

export default About