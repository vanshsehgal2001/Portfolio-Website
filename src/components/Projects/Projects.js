import React from 'react'
import blogbee from '../../assets/blogbee.png'
import reactle from '../../assets/reactle.png'
import githunt from '../../assets/githunt.png'
import apnidukaan from '../../assets/apni-dukaan.png'
import './Projects.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const projects = [
    {
        id: 1,
        image: blogbee,
        title: 'Blog Bee',
        github: 'https://github.com/vanshsehgal2001/blog-bee',
        demo: 'https://blog-bee22.herokuapp.com/'
    },
    {
        id: 2,
        image: reactle,
        title: 'Reactle',
        github: 'https://github.com/vanshsehgal2001/reactle',
        demo: 'https://reactle.herokuapp.com/'
    },
    {
        id: 3,
        image: githunt,
        title: 'GitHunt',
        github: 'https://github.com/vanshsehgal2001/gitHunt',
        demo: 'https://git-hunttt.netlify.app/'
    },
    {
        id: 4,
        image: apnidukaan,
        title: 'Apni Dukaan',
        github: 'https://github.com/vanshsehgal2001/Apni-Dukaan',
        demo: ''
    },
    // {
    //     id: 5,
    //     image: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
    //     title: 'Scoop News',
    //     github: 'https://github.com/vanshsehgal2001/ScoopNews',
    //     demo: ''
    // },
    // {
    //     id: 6,
    //     image: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
    //     title: 'Covid Tracker',
    //     github: 'https://github.com/vanshsehgal2001/Covid-19',
    //     demo: ''
    // }
]


const Projects = () => {
    return (

        <section id="projects">
            <h3>My Work</h3>
            <h2 style={{ fontSize: "40px" }} >Projects</h2>

            <div className="container projects-container" >
                {

                    projects.map(project => {
                        return (
                            <AnimationOnScroll animateIn='animate__fadeIn' >

                                <article className="project-item" style={{ width: "100%" }} >
                                    <div >
                                        <img className="project-image" src={project.image} alt='' />
                                    </div>
                                    <h2 style={{ fontSize: "30px" }} >
                                        {project.title}
                                    </h2>
                                    <div className="project-content" >
                                        <a className="btn" target="_blank" rel="noopener noreferrer" href={project.github}> Github  </a>
                                        {project.demo !== '' && (<a className="btn" target="_blank" rel="noopener noreferrer" href={project.demo}> Demo  </a>)}
                                    </div>
                                </article>
                            </AnimationOnScroll>
                        )
                    })
                }

            </div>

        </section>

    )
}

export default Projects