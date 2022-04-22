import { useState } from "react"
import { motion } from "framer-motion"
import classNames from 'classnames'

import AnimatedText from '../components/AnimatedText'
import styles from '../styles/about.module.scss'
import Education from "../components/Education"
import Technologies from "../components/Technologies"

import { containerVariants, paraVariants, subContainerVariants } from "../lib/animations/aboutVariants"


const About = () => {
    const [activeTab, setActiveTab] = useState(true)
    const [activePara, setActivePara] = useState(true)

    return (
        <>

            <motion.section
                variants={containerVariants}
                animate="visible"
                initial="hidden"
            >
                <h2>
                    <AnimatedText text="About Me" />
                </h2>
                <div className={classNames(styles.main, "container")}>
                    <motion.div variants={subContainerVariants} >
                        <div>
                            <motion.h5
                                variants={paraVariants}
                                className={activePara ? styles.active : ""}
                                onClick={() => setActivePara(true)}>1</motion.h5>
                            <motion.h5
                                variants={paraVariants}
                                className={!activePara ? styles.active : ""}
                                onClick={() => setActivePara(false)}>2</motion.h5>
                        </div>
                        <div>
                            {
                                activePara ? (
                                    <div>

                                        <motion.p variants={paraVariants}>
                                            Hi there, I am YASSINE OFQIR-HAMMA, 24-year-old from Morocco.<br />
                                            Loving programming and problem solving is the main reason that push me to start writing lines of codes. I begin my journey in web development by discovering FreeCodeCamp website where I have learned the basics of things, then I start learning more advanced topic like JavaScript Libraries and frameworks such react and next.

                                        </motion.p>
                                        <motion.p variants={paraVariants}>
                                            I am also a solar power engineer, I have studied during 5 years the fundamentals of math, physics, and a bit of C language. It may seem not too relevant to IT fields, especially web development, however, that help me in problem-solving and innovating multiple algorithms for the same problem.

                                        </motion.p>
                                    </div>

                                ) : (
                                    <div>
                                        <motion.p variants={paraVariants}>
                                            Indeed, I am following the roadmap of full stack developer. Consequently, Nodejs and Express.js are my main goals for now to learn. Additionally, there are more tech that I am so excited to learn, besides what I have mentioned before, such as, headless CMS, Authentication, Web sockets, JAM stack and MERN stack and more. <strong>Learning process never stop.</strong>

                                        </motion.p>
                                        <motion.p variants={paraVariants}>
                                            <i>
                                                <strong>
                                                    Nevertheless, I am more excited about integrating and collaborating with other developers inside a tech company, where I can apply my knowledge, gain more experience, but more importantly, see what my ideas can bring to industry and dev community.
                                                </strong>
                                            </i>

                                        </motion.p>
                                    </div>
                                )
                            }
                        </div>
                    </motion.div>



                    <motion.div variants={subContainerVariants} >
                        <div>
                            <motion.h5
                                variants={paraVariants}
                                className={activeTab ? styles.active : ""}
                                onClick={() => setActiveTab(true)}>Education</motion.h5>
                            <motion.h5
                                variants={paraVariants}
                                className={!activeTab ? styles.active : ""}
                                onClick={() => setActiveTab(false)}>Technologies</motion.h5>
                        </div>
                        <div>
                            {
                                activeTab ? (
                                    <Education />
                                ) : (
                                    <Technologies />
                                )
                            }
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

export default About