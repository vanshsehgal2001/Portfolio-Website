import React from 'react'
import { DiReact } from 'react-icons/di'
import { DiPython } from 'react-icons/di'
import { DiDebian } from 'react-icons/di'
import { DiJsBadge } from 'react-icons/di'
import { DiFirebase } from 'react-icons/di'
import { DiHtml5 } from 'react-icons/di'
import { DiNodejs } from 'react-icons/di'
import { DiMongodb } from 'react-icons/di'
import { SiFlask } from 'react-icons/si'
import { DiVisualstudio } from 'react-icons/di'
import { DiMaterializecss } from 'react-icons/di'
import { DiGithubBadge } from 'react-icons/di'
import { DiBootstrap } from 'react-icons/di'
import { DiNpm } from 'react-icons/di'
import './Skills.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Skills = () => {
    return (

        <section id="skills" >
            <h2>What Skills I Have</h2>

            <div className="container skills-container" >
                <div className="skills-box" >
                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiReact style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiPython style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiDebian style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiJsBadge style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiFirebase style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiHtml5 style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiNodejs style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiMongodb style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <SiFlask style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiVisualstudio style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiMaterializecss style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiGithubBadge style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiBootstrap style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn='animate__zoomIn' >

                        <DiNpm style={{ fontSize: "100px" }} />
                    </AnimationOnScroll>

                    {/* <img src={ReactIcon} style={{ height: "200px", width: "200px" }} /> */}

                </div>
            </div>
        </section>
    )
}

export default Skills