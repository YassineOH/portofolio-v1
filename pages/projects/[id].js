import classNames from "classnames"
import Image from "next/image"
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScreenWidth } from "../../lib/hooks/useScreenWidth";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faDesktop,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";


import styles from "../../styles/Project.module.scss"
import data from "../../lib/data/projectsData"

const Project = ({ project }) => {

    return (
        <article className={classNames("container", styles.main)}>
            <Image width={350} height={700} alt={project.name} src={project.img} />
            <div>
                <header>
                    <h3>{project.name}</h3>
                    <div>
                        Tech:{" "}
                        {project.tech?.map((tech) => (
                            <span key={Math.random()}>{tech + "|"} </span>
                        ))}
                    </div>
                    <div>
                        Language:{" "}
                        {project?.lan?.map((lang) => (
                            <span key={Math.random()}>{lang + "| "} </span>
                        ))}
                    </div>
                    <div>

                        <div>
                            {project.githubLink && (
                                <a
                                    className={styles.githubBtn}
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    Go To The Source Code
                                </a>
                            )}
                            {project.link && (
                                <a
                                    className={styles.demoBtn}
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon icon={faDesktop} />
                                    View Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </header>


                <p>{project.desc}</p>

                <Link href="/projects">
                    <button className={styles.close}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to Projects Page</button>
                </Link>


            </div>
        </article>
    )
}





export const getStaticProps = async ({ params }) => {
    let project = data.filter(prj => prj.id.toString() === params.id)[0]

    return {
        props: {
            project
        }
    }
}


export const getStaticPaths = async () => {
    const paths = data.map(prj => ({ params: { id: prj.id.toString() } }))
    return {
        paths,
        fallback: true
    }
}

export default Project