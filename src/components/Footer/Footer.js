import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import './Footer.css'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer id="footer" >
            {/* <a href="#" className="footer-heading">Vansh</a> */}
            <ul className="footer-navlinks" >
                <li>
                    <a href="#" >Home</a>
                </li>
                <li>
                    <a href="#about" >About</a>
                </li>
                <li>
                    <a href="#skills" >Skills</a>
                </li>
                <li>
                    <a href="#projects" >Projects</a>
                </li>
                <li>
                    <a href="#contact" >Contact</a>
                </li>
            </ul>
            <div className="footer-links" >
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vansh-sehgal-1519391a8/">
                    <AiFillLinkedin style={{ fontSize: "30px" }} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/vanshsehgal2001">
                    <AiFillGithub style={{ fontSize: "30px" }} />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/i_vansh_sehgal/">
                    <BsInstagram style={{ fontSize: "30px" }} />
                </a>
            </div>
            <div className="footer-love" >
                <small style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} > <span style={{ fontSize: "20px" }} >Made with <BsFillSuitHeartFill style={{ marginLeft: "10px", color: "red" }} /></span> </small>
            </div>
        </footer>
    )
}

export default Footer