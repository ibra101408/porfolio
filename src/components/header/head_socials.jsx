import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedinIn} from "react-icons/fa";

const Head_socials = () => {
    return(
        <div className="header__socials">
            <a href="https://github.com/ibra101408" target="_blank"><AiFillGithub/></a>
            <a href="https://www.facebook.com/danilkavodenejev" target="_blank"><BsFacebook/></a>
            <a href="https://www.linkedin.com/in/daniil-vodenejev-29a74617b/" target="_blank"><FaLinkedinIn/></a>

        </div>
    )
}

export default Head_socials