import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/Profiles.module.scss";

const Profiles = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.profilesLink}
        href="https://www.linkedin.com/in/yassine-ofqir-hamma-52b5a7165/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className={styles.profilesLink}
        href="https://github.com/YassineOH"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Profiles;
