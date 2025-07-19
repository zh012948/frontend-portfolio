import '../styles/Skills.css'
import SkillCard1 from './SkillCard1'
import frontend from '../assets/icons/dev.png'
import react from '../assets/icons/react.svg'
import next from '../assets/icons/next.png'
import ts from '../assets/icons/typescript.png'
import tailwind from '../assets/icons/tailwind.png'
import html from '../assets/icons/html-5.png'
import css from '../assets/icons/css-3.png'

import backend from '../assets/icons/backend.png'
import node from '../assets/icons/node.png'
import python from '../assets/icons/python.png'
import postgre from '../assets/icons/database.png'
import mongo from '../assets/icons/MongoDB.png'
import Rest from '../assets/icons/Rest.png'
import GraphQL from '../assets/icons/GraphQL.png'

// import uxDesign from '../assets/icons/uxDesign.png'

import cloud from '../assets/icons/cloud.png'
import aws from '../assets/icons/AWS.png'
import docker from '../assets/icons/Docker.png'
import pipeline from '../assets/icons/data-pipeline.png'
import Kubernetes from '../assets/icons/Kubernetes.png'
import Git from '../assets/icons/Git.png'
import Linux from '../assets/icons/Linux.png'

export default function Skills() {
    return (
        <>

            <div className="skill-section">
                <h1 className="heading">My Skills</h1>

                <div className="skill-container">
                    <SkillCard1
                        leftIcon={frontend}
                        role="Frontend Developement"
                        skill1Icon={react} skill1Text="React"
                        skill2Icon={next} skill2Text="Next.js"
                        skill3Icon={ts} skill3Text="TypeScript"
                        skill4Icon={tailwind} skill4Text="Tailwind CSS"
                        skill5Icon={html} skill5Text="HTML 5"
                        skill6Icon={css} skill6Text="CSS 3"
                    />

                    <SkillCard1
                        leftIcon={backend}
                        role="Backend Developement"
                        skill1Icon={node} skill1Text="Node.js"
                        skill2Icon={python} skill2Text="Python"
                        skill3Icon={postgre} skill3Text="PostgreSQL"
                        skill4Icon={mongo} skill4Text="MongoDB"
                        skill5Icon={Rest} skill5Text="REST API's"
                        skill6Icon={GraphQL} skill6Text="GraphQL"
                    />







                    <SkillCard1
                        role="UI/UX Design"
                    />


                    <SkillCard1
                        leftIcon={cloud}
                        role="Cloud & DevOps"
                        skill1Icon={aws} skill1Text="AWS"
                        skill2Icon={docker} skill2Text="Docker"
                        skill3Icon={pipeline} skill3Text="CI/CD"
                        skill4Icon={Kubernetes} skill4Text="Kubernetes"
                        skill5Icon={Git} skill5Text="Git"
                        skill6Icon={Linux} skill6Text="Linux"
                    />



                    <SkillCard1 />

                </div>
            </div>
        </>
    )
}