import '../styles/Skills.css'
import SkillCard1 from './SkillCard1'
import SkillCard2 from './SkillCard2'
import frontend from '../assets/icons/dev.webp'
import react from '../assets/icons/react.svg'
import next from '../assets/icons/next.webp'
import ts from '../assets/icons/typescript.webp'
import tailwind from '../assets/icons/tailwind.webp'
import html from '../assets/icons/html-5.webp'
import css from '../assets/icons/css-3.webp'

import backend from '../assets/icons/backend.webp'
import node from '../assets/icons/node.webp'
import python from '../assets/icons/python.webp'
import postgre from '../assets/icons/database.webp'
import mongo from '../assets/icons/MongoDB.webp'
import Rest from '../assets/icons/Rest.webp'
import GraphQL from '../assets/icons/GraphQL.webp'

import uxDesign from '../assets/icons/uxDesign.webp'
import figma from '../assets/icons/Figma.webp'
import responsive from '../assets/icons/responsive.webp'
import wireframing from '../assets/icons/wireframing.webp'

import cloud from '../assets/icons/cloud.webp'
import aws from '../assets/icons/AWS.webp'
import docker from '../assets/icons/Docker.webp'
import pipeline from '../assets/icons/data-pipeline.webp'
import Kubernetes from '../assets/icons/Kubernetes.webp'
import Git from '../assets/icons/Git.webp'
import Linux from '../assets/icons/Linux.webp'


import tool from '../assets/icons/tool.webp'
import vscode from '../assets/icons/vscode.webp'
import jest from '../assets/icons/Jest.webp'
import redux from '../assets/icons/Redux.webp'
import firebase from '../assets/icons/Firebase.webp'
import vercel from '../assets/icons/Vercel.webp'
import vite from '../assets/icons/Vite.webp'

import idea from '../assets/icons/idea.webp'
import problemSolving from '../assets/icons/problemSolving.webp'
import time from '../assets/icons/delay.webp'
import decision from '../assets/icons/decision.webp'
import critical from '../assets/icons/critical.webp'

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


                    <SkillCard2
                        leftIcon={uxDesign}
                        role="UI/UX Design"
                        skill1Icon={figma} skill1Text="Figma"
                        skill2Icon={responsive} skill2Text="Responsive Design"
                        skill3Icon={wireframing} skill3Text="Wireframing"
                        skill4Icon={Kubernetes} skill4Text="Kubernetes"
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



                    <SkillCard1
                        leftIcon={tool}
                        role="Tools & Technologies"
                        skill1Icon={vscode} skill1Text="Vs Code"
                        skill2Icon={jest} skill2Text="Jest"
                        skill3Icon={redux} skill3Text="Redux"
                        skill4Icon={firebase} skill4Text="Firebase"
                        skill5Icon={vercel} skill5Text="Vercel"
                        skill6Icon={vite} skill6Text="Vite"
                    />


                    <SkillCard2
                        leftIcon={idea}
                        role="Creative Skills"
                        skill1Icon={problemSolving} skill1Text="Problem Solving"
                        skill2Icon={time} skill2Text="Time Management"
                        skill3Icon={critical} skill3Text="Critical Thinking"
                        skill4Icon={decision} skill4Text="Decision Making"


                    />

                </div>
            </div>
        </>
    )
}