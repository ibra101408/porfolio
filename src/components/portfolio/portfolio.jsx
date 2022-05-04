import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/colorFlip1.png'
import IMG2 from '../../assets/tr_ship.png'

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
                    <h3>Color Flipper</h3>
                    <div className="portfolio__item-cta">
                        <a id="btn1" href="https://github.com/ibra101408/colorFlipper" className="btn-bg" target="_blank">Github</a>
                        <a href="https://daniilvodenejev.ikt.khk.ee/javascript/portfolio/projects/colorFlipper/hex.html"
                           className="btn btn-primary-bg" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Treasure Map Game</h3>
                    <div className="portfolio__item-cta">
                        <a id="btn1" href="https://github.com/ibra101408/treasure_map" className="btn-bg" target="_blank">Github</a>
                        <a href="https://daniilvodenejev.ikt.khk.ee/javascript/jquery/jq8/"
                           className="btn btn-primary-bg" target="_blank">Live Demo</a>
                    </div>
                </article>
                {console.log(React.version)}

            </div>
        </section>
    )
}

export default Portfolio