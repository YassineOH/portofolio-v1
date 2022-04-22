import Image from "next/image"
import classNames from "classnames"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons"


import AnimatedText from "../components/AnimatedText"

import styles from "../styles/contact.module.scss"
import { containerVariants } from "../lib/animations/projectsVariants"


const contact = () => {
    return (
        <>
            <section >
                <h2>
                    <AnimatedText text="Contact Me" />
                </h2>
                <motion.div className={classNames("container", styles.main)} style={{ marginInline: "auto" }} variants={containerVariants} animate="visible" initial="hidden">
                    <div>
                        <form>
                            <input type="text" id="name" name="name" placeholder="your full name" required />
                            <input type="email" id="mail" name="mail" placeholder="your adress mail" required />
                            <textarea name="message" id="message" placeholder="your message" required></textarea>
                            <input type="submit" value="send" id="send" />
                        </form>
                    </div>
                    <div>
                        <Image
                            src="/assets/me.jpg"
                            width={350}
                            height={466.66} />
                        <div>
                            <h6> my contact info :</h6>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/yassine-ofqir-hamma-52b5a7165/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} /> <span>YASSINE OFQIR-HAMMA</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/YassineOH" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} /> <span>YassineOH</span>
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} /> <span>yassine.frontend@gmail.com</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationPin} /> <span>Morocco, Rabat.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ motion.div>
            </section>
            <footer style={{ textAlign: "center" }}>
                <small>@ YASSINE OFQIR-HAMMA, built using <i>NextJS</i> </small>
            </footer>
        </>
    )
}

export default contact