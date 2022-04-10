import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useScreenWidth } from "./hooks/useScreenWidth";

import styles from "../styles/Navigation.module.scss";

const containerVariants = (test) => {
  if (test) {
    return {
      hidden: {
        y: "-100vh",
      },
      visible: {
        y: 0,
        transition: {
          type: "tween",
          duration: 1,
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      exit: {
        y: "-100vh",
        transition: {
          type: "tween",
          when: "afterChildren",
          staggerChildren: 0.1,
          duration: 1,
        },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: 5,
        duration: 2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    x: 100,
    y: 100,
  },

  exit: {
    opacity: 0,
    x: -100,
    y: 100,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 100,
      stiffness: 200,
      mass: 12,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const Navigation = ({ phoneMode, closeMenu }) => {
  const isTabletSize = useScreenWidth(768);

  const { route } = useRouter();

  return (
    <nav>
      <motion.ul
        className={!phoneMode ? styles.navContainer : styles.navContainerPhone}
        variants={containerVariants(isTabletSize)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {phoneMode && (
          <button className={styles.closeButton} onClick={closeMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        )}
        {route !== "/" && (
          <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </motion.li>
        )}
        <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
          <Link href="/about">
            <a>About Me</a>
          </Link>
        </motion.li>
        <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </motion.li>
        <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
          <Link href="/faq">
            <a>FAQ</a>
          </Link>
        </motion.li>
        <motion.li variants={navItemVariants} whileHover={{ scale: 1.1 }}>
          <Link href="/contact">
            <a>Contact Me</a>
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navigation;
