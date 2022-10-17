import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Image from "next/image"
import classNames from "classnames"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationPin } from "@fortawesome/free-solid-svg-icons"


import Modal from "../components/Modal"
import AnimatedText from "../components/AnimatedText"

import styles from "../styles/contact.module.scss"
import { containerVariants } from "../lib/animations/contactVariants"


const Contact = () => {
    const form = useRef();
    const [modal, setModal] = useState(false)
    const [status, setStatus] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_12dpj1k", form.current, "aj1HPmI6E1Pt4Et5-")
            .then((result) => {
                setModal(true)
                setStatus(true)
            }, (error) => {
                setModal(true)
                setStatus(false)
            });
    };

    const closeModal = () => setModal(false)

    return (
        <>
            <section >
                <h2>
                    <AnimatedText text="Contact Me" />
                </h2>
                <motion.div className={classNames("container", styles.main)} style={{ marginInline: "auto" }} variants={containerVariants} animate="visible" initial="hidden">
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
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
                            height={466.66}
                            alt="me" />
                        <div>
                            <h6> my contact info :</h6>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/yassine-ofqir-hamma-52b5a7165/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} /> <span>YASSINE OFQIR-HAMMA</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/YassineOH" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} /> <span>YassineOH</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:yassine.frontend@gmail.com" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon icon={faEnvelope} /> <span>yassine.frontend@gmail.com</span>
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationPin} /> <span>Morocco, Rabat.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ motion.div>
            </section>

            {
                modal && <Modal status={status} closeModal={closeModal} />
            }
            <footer style={{ textAlign: "center" }}>
                <small>@ YASSINE OFQIR-HAMMA, built using <i>NextJS</i> </small>
            </footer>
        </>
    )
}

export default Contact