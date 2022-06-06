import { useState, useEffect } from "react"
import Link from "next/link"
import classNames from 'classnames'
import { motion } from 'framer-motion'

import AnimatedText from "../components/AnimatedText"
import Profiles from "../components/Profiles"


import { containerVariants, typedVariants, buttonVariants, subTitleVariants } from "../lib/animations/homeVariants"
import styles from '../styles/Home.module.scss'


export default function Home() {

  return (
    <motion.main className={classNames("container", styles.main)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div>
        <h1>
          <motion.span variants={typedVariants}>
            <AnimatedText text="Hi, I'm <br /> <span>YASSINE OFQIR-HAMMA</span> <br /> a web developer" speed={60} />
          </motion.span>
        </h1>
        <motion.h2 variants={subTitleVariants}>
          a self-taught frontend developer 💻, and solar power engineer☀️.
        </motion.h2>
      </div>
      <motion.div variants={buttonVariants}>
        <div>
          <Link href="/contact">
            <a className={styles.contact}>
              Contact Me
            </a>
          </Link>
        </div>
        <Profiles />
      </motion.div>

    </motion.main>
  )
}
