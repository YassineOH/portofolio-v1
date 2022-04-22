import Image from "next/image";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Education.module.scss";

const data = [
  {
    img: "/assets/gov.png",
    title: "High school degree",
    description: "Bachelor of Science with honor. 2016",
  },
  {
    img: "/assets/uir.png",
    title: "master degree in renewable energy",
    description: "the international university of rabat (uir) 2016-2021",
  },
  {
    img: "/assets/fcc.svg",
    title: "responsive web certification",
    description: "freecodecamp website. 2021",
    link: "https://www.freecodecamp.org/certification/fcc0e17d0d7-228c-4be9-bd4e-4f32296931f8/responsive-web-design",
  },
  {
    img: "/assets/fcc.svg",
    title: "javascript algorithms and data structures certification",
    description: "freecodecamp website. 2021",
    link: "https://www.freecodecamp.org/certification/fcc0e17d0d7-228c-4be9-bd4e-4f32296931f8/javascript-algorithms-and-data-structures",
  },
  {
    img: "/assets/fcc.svg",
    title: "front end development libraries certification",
    description: "freecodecamp website. 2022",
    link: "https://www.freecodecamp.org/certification/fcc0e17d0d7-228c-4be9-bd4e-4f32296931f8/front-end-development-libraries",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0.9,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  return (
    <motion.div variants={containerVariants}>
      {data.map((item, i) => (
        <motion.div
          key={item.title + i}
          className={styles.item}
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, .3)",
            borderRadius: 10,
            cursor: "pointer",
            padding: 10,
          }}
        >
          <Image src={item.img} height={50} width={50} alt={item.description} />
          <div>
            <h6>
              {item.title}{" "}
              {item?.link && (
                <a href={item.link} target="_blank">
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </a>
              )}
            </h6>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
