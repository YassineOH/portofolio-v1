import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import { useScreenWidth } from "../lib/hooks/useScreenWidth";

import ParticleBackground from "../components/ParticleBackground";
import Navigation from "./Navigation";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  const isMobileScreen = useScreenWidth(600);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const [init, setInit] = useState(false);
  const routeInfo = useRouter();

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          {" "}
          YASSINE OFQIR-HAMMA | {routeInfo.route
            .replace("/", "")
            .toUpperCase()}{" "}
        </title>
        <meta name="author" content="yassien ofqir-hamma" />
        <meta
          name="description"
          content="Hi there, I am YASSINE OFQIR-HAMMA, 24-year-old from Morocco.

Loving programming and problem solving is the main reason that push me to start writing lines of codes. I begin my journey in web development by discovering FreeCodeCamp website where I have learned the basics of things, then I start learning more advanced topic like JavaScript Libraries and frameworks such react and next."
        ></meta>
      </Head>
      <div className={styles.layout}>
        <ParticleBackground />
        {init && isMobileScreen && (
          <div
            className="menutoggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon
              icon={!isMenuOpen ? faBars : faXmark}
              className={styles.icons}
            />
          </div>
        )}
        <Navigation menuStatus={isMenuOpen} closeMenu={closeMenu} />
        {children}
      </div>
    </>
  );
};

export default Layout;
