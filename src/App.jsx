import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";



const App = () => {
    return(
        <>
            <Header />
            <br/>
            <Nav />
            <br/>
            <About />
            <br/>
            <Experience />
            <br/>
            <Portfolio />
            <Contact />
            <br/>
            <Footer />
            <br/>

        </>
    )
}

export default App

