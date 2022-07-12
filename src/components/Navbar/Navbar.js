import React, { useState } from 'react'
import { GoHome } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { BsCodeSlash } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

    const [active, setActive] = useState("#")

    return (
        <nav>
            <a href="#" className={active === "#" ? 'active' : ''} onClick={() => {
                setActive("#")
            }} >
                <GoHome />
            </a>
            <a href="#about" className={active === "#about" ? 'active' : ''} onClick={() => {
                setActive("#about")
            }} >
                <GoPerson />
            </a>
            <a href="#skills" className={active === "#skills" ? 'active' : ''} onClick={() => {
                setActive("#skills")
            }} >
                <BsCodeSlash />
            </a>
            <a href="#projects" className={active === "#projects" ? 'active' : ''} onClick={() => {
                setActive("#projects")
            }} >
                <FaCodepen />
            </a>

            <a href="#contact" className={active === "#contact" ? 'active' : ''} onClick={() => {
                setActive("#contact")
            }} >
                <BsFillChatLeftTextFill />
            </a>

        </nav>
    )
}

export default Navbar