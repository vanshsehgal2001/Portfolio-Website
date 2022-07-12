import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about" >
            <h3>Get To Know</h3>
            <h2 style={{ fontSize: "40px" }}>About Me</h2>
            <div className="container about-container" >
                <div className="about-my" >
                    <h3 className="about-heading" >
                        Diligent And Ambitious Software Developer currently pursuing Btech in Computer Engineering
                        from Thapar Institute Of Engineering And Technology (TIET) having good
                        problem solving skills. I am patient and good at time management.
                        I have experience in MERN Stack and keen interest in Blockchain. Currently looking
                        for full time opportunties as a Software Developer.
                    </h3>
                </div>
                {/* <div className="about-content" >
                    <div className="about-cards" >
                        <article className="about-card" >
                            <h4>Experience</h4>
                        </article>
                    </div>
                </div> */}
            </div>
        </section>

    )
}

export default About