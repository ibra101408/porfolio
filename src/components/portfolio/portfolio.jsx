import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/logo2.png'

const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://daniilvodenejev.ikt.khk.ee/javascript/portfolio/projects/colorFlipper/hex.html"
                           className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://daniilvodenejev.ikt.khk.ee/javascript/portfolio/projects/colorFlipper/hex.html"
                           className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://daniilvodenejev.ikt.khk.ee/javascript/portfolio/projects/colorFlipper/hex.html"
                           className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio