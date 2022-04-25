import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faX } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Modal.module.scss";

const Modal = ({ status, closeModal }) => {
  return (
    <div className={styles.main}>
      <div>
        <FontAwesomeIcon
          icon={status ? faCircleCheck : faX}
          className={status ? styles.success : styles.error}
        />
        <h6>{status ? "Thank you for your message" : "Please try again"}</h6>
        <button
          onClick={closeModal}
          className={status ? styles.successBtn : styles.errorBtn}
        >
          {status ? "close" : "try again"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
