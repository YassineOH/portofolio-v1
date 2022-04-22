import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/Profiles.module.scss";

const Profiles = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
  );
};

export default Profiles;
