import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

const Head_socials = () => {
    return(
        <div className="header__socials">
            <a href="https://github.com/ibra101408" target="_blank"><AiFillGithub/></a>
            <a href="https://www.facebook.com/danilkavodenejev" target="_blank"><BsFacebook/></a>
        </div>
    )
}

export default Head_socials