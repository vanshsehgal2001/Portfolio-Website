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

const Skills = () => {
    return (
        <section id="skills" >
            <h2>What Skills I Have</h2>

            <div className="container skills-container" >
                <div className="skills-box" >
                    <DiReact style={{ fontSize: "100px" }} />
                    <DiPython style={{ fontSize: "100px" }} />
                    <DiDebian style={{ fontSize: "100px" }} />
                    <DiJsBadge style={{ fontSize: "100px" }} />
                    <DiFirebase style={{ fontSize: "100px" }} />
                    <DiHtml5 style={{ fontSize: "100px" }} />
                    <DiNodejs style={{ fontSize: "100px" }} />
                    <DiMongodb style={{ fontSize: "100px" }} />
                    <SiFlask style={{ fontSize: "100px" }} />
                    <DiVisualstudio style={{ fontSize: "100px" }} />
                    <DiMaterializecss style={{ fontSize: "100px" }} />
                    <DiGithubBadge style={{ fontSize: "100px" }} />
                    <DiBootstrap style={{ fontSize: "100px" }} />
                    <DiNpm style={{ fontSize: "100px" }} />
                    {/* <img src={ReactIcon} style={{ height: "200px", width: "200px" }} /> */}
                </div>
            </div>
        </section>
    )
}

export default Skills