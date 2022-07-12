import React, { useRef } from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6oy6czk', 'template_zn09suw', form.current, 'user_yfHNLBAi9LG6ZF2ISc6pa')

        e.target.reset();
    };

    return (

        <section id="contact" >
            <h3>Get In Touch</h3>
            <h2 style={{ fontSize: "40px" }} >Contact Me</h2>

            <div className="container contact-container" >
                <AnimationOnScroll animateIn='animate__headShake' >

                    <div className="contact-options" >

                        <article className="contact-option" >
                            <AiOutlineMail style={{ fontSize: "30px" }} />
                            <h3>Email</h3>
                            <h5>sehgalvansh2020@gmail.com</h5>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:sehgalvansh2020@gmail.com" >Send A Message</a>
                        </article>
                        <article className="contact-option"  >
                            <AiFillLinkedin style={{ fontSize: "30px" }} />
                            <h3>Linkedin</h3>
                            <h5>Vansh Sehgal</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vansh-sehgal-1519391a8/" >Send A Message</a>
                        </article>
                        <article className="contact-option" >
                            <BsWhatsapp style={{ fontSize: "30px" }} />
                            <h3>Whatsapp</h3>
                            <h5>8368333893</h5>
                            <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=8368333893" >Send A Message</a>
                        </article>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn='animate__headShake' >

                    <form ref={form} onSubmit={sendEmail} >
                        <input type="text" name="name" placeholder="Enter name" required />
                        <input type="email" name="email" placeholder="Enter email" required />
                        <textarea name="message" rows="7" placeholder="Enter message" required />
                        <button type="submit" className="btn submit" >Submit</button>
                    </form>
                </AnimationOnScroll>

            </div>

        </section>
    )
}

export default Contact