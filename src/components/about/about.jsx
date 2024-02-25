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
                                    One of my hobbies is fling with a drone.
                                    I really love to travel to different countries
                                    and search for beautiful places and views for filming.
                                    Also I passed A1/A3 category.
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
                                    As well I am big fan of Chelsea FC for more than ten years.
                                </small>
                            </div>
                        </article>

                        <article className="about__card">
                            <GiConsoleController className="about__icons"/>
                            <h5>Video games</h5>
                            <div className="container__small">
                                <small>
                                    Video games also one of my hobbies.
                                    Sometimes I find a time to play in my ps4 or VR glasses with friends.
                                    Besides I really like playing board games with whole family.
                                </small>
                            </div>
                        </article>
                    </div>
                    <div className="about_text">
                        <p>
                            I am a 24-year-old Tartu Vocational College student who has already completed my studies and is now actively seeking job opportunities.
                            For now I'm at the beginning of the development and mostly study front-end development,
                            but I'll be happy to any challange.
                        </p>
                    </div>

                    <a id="talk" href="#contact" className="btn btn-primary-bg">Lets talk</a>
                </div>
            </div>
        </section>
    )
}

export default About