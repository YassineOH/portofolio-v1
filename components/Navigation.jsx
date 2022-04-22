import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useScreenWidth } from "../lib/hooks/useScreenWidth";

import Profiles from "./Profiles";

import {
  navVariantsMobile,
  navVariants,
  itemVariants,
  itemVariantsMobile,
} from "../lib/animations/navgationVariants";

import styles from "../styles/Navigation.module.scss";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About Me",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact Me",
  },
];

const Navigation = ({ menuStatus, closeMenu }) => {
  const isMobileScreen = useScreenWidth(600);
  const routeInfo = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      {(!menuStatus && isMobileScreen) || (
        <motion.nav
          className={styles.navContainer}
          variants={isMobileScreen ? navVariantsMobile : navVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.ul>
            {routes.map((route) => {
              let { path, name } = route;
              return (
                <motion.li
                  key={name + path}
                  className={path === routeInfo.route ? styles.active : ""}
                  variants={isMobileScreen ? itemVariantsMobile : itemVariants}
                  onClick={closeMenu}
                >
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
          {isMobileScreen && <Profiles />}
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
