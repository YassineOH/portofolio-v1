import { useState } from "react"
import Link from "next/link";
import Image from "next/dist/client/image";
import classNames from "classnames"
import { motion } from "framer-motion";

import AnimatedText from "../components/AnimatedText"

import data from "../lib/data/projectsData"
import { containerVariants, projectVariants } from "../lib/animations/projectsVariants"

import styles from "../styles/Projects.module.scss"



const Projects = () => {
    const [isHovered, setIsHovered] = useState(false)


    return (
        <section >
            <h2>
                <AnimatedText text="Projects" />
            </h2>
            <motion.div className={classNames("container", styles.main)} variants={containerVariants}
                animate="visible"
                initial="hidden"
                exit="exit">
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
                                    (Number(isHovered) === prj.id) && (
                                        <Link href={`/projects/${prj.id}`}>
                                            <button >View More</button>
                                        </Link>
                                    )
                                }
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Projects