import { useState, useEffect } from "react"
import Image from "next/image"
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'


import { useScreenWidth } from "../components/hooks/useScreenWidth"
import Navigation from '../components/Navigation'

import styles from '../styles/Home.module.scss'

// import name from "./assets/name.svg"



const containerVariants = {
  hidden: {
    opacity: 0,

  },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: .4,
      when: "beforeChildren"
    }
  },

}

const titleVariants = {
  hidden: {
    y: "20vh",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 100,
      stiffness: 200,
      mass: 12,
    }
  }
}

const subTitleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 100,
      stiffness: 200,
      mass: 12,
    }
  }
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

const imageVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1
  }
}

export default function Home() {
  const isTabletSize = useScreenWidth(768)
  const [hambugerMenu, setHambugerMenu] = useState(false)


  useEffect(() => {
    if (!isTabletSize) {
      setHambugerMenu(false)
    }
  }, [isTabletSize])

  const closeMenu = () => setHambugerMenu(false)

  return (
    <motion.main id="home"
      className={classNames(styles.main, "container")}
      variants={containerVariants}
      animate="visible"
      initial="hidden"
    >
      <div>
        <h1>
          <motion.span
            variants={titleVariants}
          > Hello,</motion.span>
          <motion.span
            variants={titleVariants}
          > I'm </motion.span>
          <br />
          <motion.span
            variants={titleVariants}
            className={styles.myName}> Yassine OFQIR-HAMMA
          </motion.span> <br />
          <motion.span
            variants={titleVariants}
          > a Web Developer</motion.span>
        </h1>
        <motion.h3 variants={subTitleVariants}>FrontEnd developer 💻💻  and solar engineer ☀️☀️</motion.h3>
      </div>



      <div>
        {isTabletSize ?
          <motion.button
            variants={buttonVariants}
            className={styles.hambugerMenu}
            onClick={() => setHambugerMenu(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.button> :
          <Navigation phoneMode={false} />}

        <AnimatePresence exitBeforeEnter onExitComplete={() => setHambugerMenu(false)}>
          {
            hambugerMenu && <Navigation phoneMode={true} closeMenu={closeMenu} />
          }
        </AnimatePresence>
      </div>
    </motion.main>
  )
}
