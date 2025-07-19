import '../styles/Skills.css'
import SkillCard1 from './SkillCard1'
import SkillCard2 from './SkillCard2'
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

import uxDesign from '../assets/icons/uxDesign.png'
import figma from '../assets/icons/Figma.png'
import responsive from '../assets/icons/responsive.png'
import wireframing from '../assets/icons/wireframing.png'

import cloud from '../assets/icons/cloud.png'
import aws from '../assets/icons/AWS.png'
import docker from '../assets/icons/Docker.png'
import pipeline from '../assets/icons/data-pipeline.png'
import Kubernetes from '../assets/icons/Kubernetes.png'
import Git from '../assets/icons/Git.png'
import Linux from '../assets/icons/Linux.png'


import tool from '../assets/icons/tool.png'
import vscode from '../assets/icons/vscode.png'
import jest from '../assets/icons/Jest.png'
import redux from '../assets/icons/Redux.png'
import firebase from '../assets/icons/Firebase.png'
import vercel from '../assets/icons/Vercel.png'
import vite from '../assets/icons/Vite.png'

import idea from '../assets/icons/idea.png'
import problemSolving from '../assets/icons/problemSolving.png'
import time from '../assets/icons/delay.png'
import decision from '../assets/icons/decision.png'
import critical from '../assets/icons/critical.png'

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