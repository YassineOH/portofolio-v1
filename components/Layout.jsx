import { useState, useEffect } from "react";
import { useScreenWidth } from "../lib/hooks/useScreenWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import ParticleBackground from "../components/ParticleBackground";
import Navigation from "./Navigation";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  const isMobileScreen = useScreenWidth(600);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <div className={styles.layout}>
      <ParticleBackground />
      {init && isMobileScreen && (
        <div className="menutoggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon
            icon={!isMenuOpen ? faBars : faXmark}
            className={styles.icons}
          />
        </div>
      )}
      <Navigation menuStatus={isMenuOpen} closeMenu={closeMenu} />
      {children}
    </div>
  );
};

export default Layout;
