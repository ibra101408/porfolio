import React from 'react'
import './experience.css'
import {BsCheck2Circle} from 'react-icons/bs'
import {CgAdidas} from 'react-icons/cg'
import { ToggleTag } from "./ToggleTag";
import { grades } from "./grades";

const Experience = () => {
  /*  if (ToggleTag ( "K").checked== true) {
        console.log("checked");
    }else{
        console.log("not check")
    }*/
    return(

        <section id='experience'>

            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            {/* <ToggleTag grade="K"/>*/}
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3 className="h3">Frontend Development</h3>
                    <div className="experience__content">
                        <div className="experience__content_block">
                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon"/>
                                <div>
                                    <h4 className="h4">HTML</h4>
                                    <small key={"html"}>
                                        HTML5
                                    </small>
                                </div>
                            </article>


                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon"/>
                                <div>
                                    <h4 className="h4">CSS</h4>
                                    <small>
                                        Saas <br/>
                                        Bootstrap
                                    </small>
                                </div>
                            </article>

                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon"/>
                                <div>
                                    <h4 className="h4">Java</h4>
                                    <small>
                                        <a className="link" href="https://github.com/ibra101408/basic/tree/master/src" target="_blank">Java basics</a><br/>
                                        <a className="link" href="https://github.com/ibra101408/newRepository" target="_blank">Just practice</a><br/>
                                        <a className="link" href="https://github.com/ibra101408/javaLearning" target="_blank">Just practice</a>
                                    </small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon"/>
                                <div>
                                    <h4 className="h4">Node.js</h4>
                                    <small>
                                        <a className="link" href="https://github.com/ibra101408/howtomysql" target="_blank">Node + MySQL</a>
                                    </small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <BsCheck2Circle className="experience__details-icon"/>
                                <div>
                                    <h4 className="h4">PHP</h4>
                                    <small>
                                        <a className="link" href="https://daniilvodenejev.ikt.khk.ee/ABfailid/" target="_blank">PHP + MySQL</a>
                                    </small>
                                </div>
                            </article>
                        </div>
                        {/* JavaScript */}
                        <article className="experience__details">

                            <BsCheck2Circle     className="experience__details-icon"/>
                            <div>
                                <h4 className="h4">JavaScript</h4>
                                <small>
                                    <a className="link" href="https://github.com/ibra101408/calory_pivotal" target="_blank">Track calories</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/Task_project" target="_blank">Tasks</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/Calory_Tracker" target="_blank">Calory Tracker</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/express_basics" target="_blank">Express</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/weather_OOP" target="_blank">Weather</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/oop_books" target="_blank">Books</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/weather_express" target="_blank">Weather Express</a><br/>
                                    <a className="link" href="https://daniilvodenejev.ikt.khk.ee/javascript/" target="_blank">Ajax, Jquery</a><br/>

                                    <a className="link" href="https://github.com/ibra101408/webpack_course" target="_blank">Webpack course</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/typescript_blockchain" target="_blank">Typescript blockchain</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/react-shopping-cart" target="_blank">React Shopping Cart</a>
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* end of frontend*/}



                <div className="experience__backend">
                    <h3 className="h3">Backend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4 className="h4">MySql</h4>
                                <small>
                                    <a className="link" href="https://daniilvodenejev.ikt.khk.ee/ABfailid/" target="_blank">Voting (MySQL + PHP)</a><br/>
                                    <a className="link" href="https://daniilvodenejev.ikt.khk.ee/ABfailid/" target="_blank">MySQL + PHP</a><br/>
                                    <a className="link" href="https://github.com/ibra101408/joga_mysql" target="_blank">MySQL + Handlebars</a> <br/>
                                    <a className="link" href="https://github.com/ibra101408/howtomysql" target="_blank">Node + MySQL</a> <br/>
                                    Routines<br/>
                                    Triggers<br/>
                                    Functions
                                </small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsCheck2Circle className="experience__details-icon"/>
                            <div>
                                <h4 className="h4">React</h4>
                                <small>
                                    <a className="link" href="https://github.com/ibra101408/voco_chat_client" target="_blank">Chat</a>
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