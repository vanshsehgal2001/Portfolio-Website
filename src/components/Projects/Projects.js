import React from 'react'
import blogbee from '../../assets/blogbee.png'
import reactle from '../../assets/reactle.png'
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
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'GitHunt',
        github: 'https://github.com/vanshsehgal2001/gitHunt',
        demo: 'https://www.google.com/'
    },
    {
        id: 4,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Contact House',
        github: 'https://github.com/vanshsehgal2001/Contact-House',
        demo: 'https://www.google.com/'
    },
    {
        id: 5,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Scoop News',
        github: 'https://github.com/vanshsehgal2001/ScoopNews',
        demo: 'https://www.google.com/'
    },
    {
        id: 6,
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'Covid Tracker',
        github: 'https://github.com/vanshsehgal2001/Covid-19',
        demo: 'https://www.google.com/'
    }
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
                                        <a className="btn" target="_blank" rel="noopener noreferrer" href={project.demo}> Demo  </a>
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