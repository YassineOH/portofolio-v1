import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScreenWidth } from "../lib/hooks/useScreenWidth";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faDesktop,
  faLeftLong,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

import { elementVariants } from "../lib/animations/projectsVariants";
import styles from "../styles/ProjectsDesc.module.scss";

const ProjectsDesc = ({ prj, exit }) => {
  const isPhone = useScreenWidth(600);

  return (
    <motion.div
      className={styles.main}
      variants={elementVariants}
      exit={{ opacity: 0 }}
    >
      <header>
        <h6>{prj.name}</h6>
        <div>
          Tech:{" "}
          {prj.tech?.map((tech) => (
            <span key={Math.random()}>{tech + "|"} </span>
          ))}
        </div>
        <div>
          Language:{" "}
          {prj?.lan?.map((lang) => (
            <span key={Math.random()}>{lang + "| "} </span>
          ))}
        </div>
        <div>
          {prj.githubLink && (
            <a
              className={styles.githubBtn}
              href={prj.githubLink}
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              Go To The Source Code
            </a>
          )}
          {prj.link && (
            <a className={styles.demoBtn} href={prj.link} target="_blank">
              <FontAwesomeIcon icon={faDesktop} />
              View Live demo
            </a>
          )}
        </div>
      </header>
      <article>{prj.desc}</article>
      <button onClick={exit} className={styles.close}>
        <FontAwesomeIcon icon={isPhone ? faAngleUp : faLeftLong} />
        close
      </button>
    </motion.div>
  );
};

export default ProjectsDesc;
