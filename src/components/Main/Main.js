import React from 'react'
import Resume from '../../assets/Vansh_Sehgal_COE_3rdYear_Resume_Final.pdf'
import My from '../../assets/my.jpeg'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaArrowDown } from 'react-icons/fa'
import './Main.css'
import Typewriter from 'typewriter-effect'

const Main = () => {
    return (
        <header>
            <div className='container header-container' >
                <h2>Hello I'm</h2>
                <h1 style={{ fontSize: '60px' }} >Vansh Sehgal</h1>
                <h2 className='color-text' >
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: [
                                "Student",
                                "MERN Stack Developer",
                                "Blockchain Enthusiast",
                                "Melophile",
                                "Hodophile"
                            ]
                        }}

                    />
                </h2>

                <div className='buttons' >
                    <a className="btn" download href={Resume} >Download Resume</a>
                    <a className="btn" href="#contact" >Connect With Me</a>
                </div>
                <div className="social-links" >
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vansh-sehgal-1519391a8/">
                        <AiFillLinkedin className="linkedin" style={{ fontSize: "35px" }} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/vanshsehgal2001">
                        <AiFillGithub className="github" style={{ fontSize: "35px" }} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/i_vansh_sehgal/">
                        <BsInstagram className="instagram" style={{ fontSize: "35px" }} />
                    </a>
                </div>
                <div  >
                    <img className="my" src={My} alt="Vansh Sehgal" />
                </div>
                <a href="#footer"  >
                    <FaArrowDown className="scroller" />
                </a>

            </div>
        </header>
    )
}

export default Main