import React, {useState} from 'react'
import './experience.css'
import { FaGithub } from "react-icons/fa";
import experienceData from './experienceData.json'; // Assuming you have your data in a JSON file

const Experience = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const allTags = Array.from(new Set(experienceData.flatMap((item) => item.tags)));

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const filteredExperience = experienceData.filter((item) =>
        selectedTags.length === 0 || selectedTags.every((tag) => item.tags.includes(tag))
    );

    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container">
                <div className="tag__container">
                    {allTags.map((tag) => (
                        <span
                            className="tags"
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            style={{
                                backgroundColor: selectedTags.includes(tag) ? '#ccc268' : 'rgb(161, 209, 195)',
                            }}
                        >
                    {tag}
                </span>
                    ))}
                </div>

                <div className="experience__content_container">
                    {filteredExperience.map((item) => (
                        <div className="experience__content_items" key={item.id}>
                            <h3 className="experience__content_name">{item.name}</h3>
                            <p className="experience__content_tag">
                                {item.tags.map((tag, index) => (
                                    <span className={`tag tag-${index}`} key={index}>{tag}</span>
                                ))}
                            </p>
                            <p>
                                <a className="experience__content_github" href={item.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
{/*
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

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
        */
}


