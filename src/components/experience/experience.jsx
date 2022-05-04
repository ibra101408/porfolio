import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'

const Experience = () => {
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small>
                                    HTML5
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small>
                                    Saas <br/>
                                    Bootstrap
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>Java</h4>
                                <small>
                                    <a href="https://github.com/ibra101408/newRepository" target="_blank">Just practice</a><br/>
                                    <a href="https://github.com/ibra101408/javaLearning" target="_blank">Just practice</a>
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>Node.js</h4>
                                <small>
                                    <a href="https://github.com/ibra101408/howtomysql" target="_blank">Node + MySQL</a>
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small>
                                    <a href="https://github.com/ibra101408/calory_pivotal" target="_blank">Track calories</a><br/>
                                    <a href="https://github.com/ibra101408/Task_project" target="_blank">Tasks</a><br/>
                                    <a href="https://github.com/ibra101408/Calory_Tracker" target="_blank">Calory Tracker</a><br/>
                                    <a href="https://github.com/ibra101408/express_basics" target="_blank">Express</a><br/>
                                    <a href="https://github.com/ibra101408/weather_OOP" target="_blank">Weather</a><br/>
                                    <a href="https://github.com/ibra101408/oop_books" target="_blank">Books</a><br/>
                                    <a href="https://github.com/ibra101408/weather_express" target="_blank">Weather Express</a><br/>
                                    <a href="https://daniilvodenejev.ikt.khk.ee/javascript/" target="_blank">Ajax, Jquery</a>
                                </small>
                            </div>
                        </article>




                    </div>
                </div>
                {/* end of frontend*/}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>MySql</h4>
                                <small>
                                    <a href="https://daniilvodenejev.ikt.khk.ee/ABfailid/" target="_blank">MySQL + PHP</a><br/>
                                    <a href="https://github.com/ibra101408/joga_mysql" target="_blank">joga MySQL</a> <br/>
                                    <a href="https://github.com/ibra101408/howtomysql" target="_blank">Node + MySQL</a> <br/>
                                    Routines
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small>
                                    <a href="https://github.com/ibra101408/voco_chat_client" target="_blank">Chat</a>
                                </small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience