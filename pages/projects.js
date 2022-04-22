import { useState } from "react"
import { useScreenWidth } from "../lib/hooks/useScreenWidth"
import Image from "next/dist/client/image";
import classNames from "classnames"
import { motion, AnimatePresence } from "framer-motion";

import AnimatedText from "../components/AnimatedText"
import ProjectsDesc from "../components/ProjectsDesc";

import data from "../lib/data/projectsData"
import { containerVariants, projectVariants, openVariants, openVariantsPhone } from "../lib/animations/projectsVariants"

import styles from "../styles/Projects.module.scss"



const Projects = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [openProject, setOpenProject] = useState(null)
    const isPhoneScreen = useScreenWidth(600)

    const closeProject = () => setOpenProject(null)



    return (

        <motion.section variants={containerVariants}
            animate="visible"
            initial="hidden"
            exit="exit">

            <h2>
                <AnimatedText text="Projects" />
            </h2>


            <div className={classNames("container", styles.main)}>
                {
                    data.map(prj => (
                        <motion.div key={prj.id} id={prj.id + prj.name} variants={projectVariants} >
                            <div id={prj.id} onMouseEnter={(e) => setIsHovered(prj.id)} onMouseLeave={() => setIsHovered(false)}>
                                <Image src={prj.img}
                                    height={400}
                                    width={200}
                                    alt={prj.name}
                                />
                                {
                                    !openProject && (
                                        <p>{prj.name}</p>
                                    )
                                }
                                {
                                    (Number(isHovered) === prj.id) && (
                                        <button onClick={() => setOpenProject(prj)}>View More</button>
                                    )
                                }
                            </div>
                            <AnimatePresence>
                                {
                                    (openProject?.id === prj.id) && (
                                        <motion.div variants={isPhoneScreen ? openVariantsPhone : openVariants} exit={isPhoneScreen ? openVariantsPhone.exit : openVariants.exit}>
                                            <ProjectsDesc prj={openProject} exit={closeProject} key={prj.id + prj.id} />
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </motion.div>
                    ))
                }
            </div>
        </motion.section>
    )
}

export default Projects