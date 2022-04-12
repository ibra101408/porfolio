import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return(
       <nav>
           <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
           <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav==='#about' ? 'active' : ''}><HiOutlineUser/></a>
           <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav==='#experience' ? 'active' : ''}><MdWorkOutline/></a>
           <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>
       </nav>
    )
}

export default Nav