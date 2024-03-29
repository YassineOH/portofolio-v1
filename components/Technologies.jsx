import Image from "next/dist/client/image";
import { motion } from "framer-motion";

import styles from "../styles/Technologies.module.scss";
import AnimatedText from "./AnimatedText";

const data1 = [
  {
    img: "html.svg",
    title: "html",
  },

  {
    img: "css.svg",
    title: "css",
  },
  {
    img: "js.svg",
    title: "javascript",
  },
  {
    img: "typescript.svg",
    title: "typescript",
  },
];
const data2 = [
  {
    img: "react.svg",
    title: "react",
  },
  {
    img: "angular.svg",
    title: "angular",
  },
  {
    img: "nextjs.svg",
    title: "nextjs",
  },
  {
    img: "redux.svg",
    title: "redux toolkit",
  },
  {
    img: "bootstrap.svg",
    title: "bootstrap",
  },

  {
    img: "tailwind.svg",
    title: "tailwind",
  },
];

const data3 = [
  {
    img: "figma.svg",
    title: "figma",
  },
  {
    img: "git.svg",
    title: "git",
  },
  {
    img: "graphql.svg",
    title: "graphql",
  },
  {
    img: "postman.svg",
    title: "postman",
  },
  {
    img: "sass.svg",
    title: "sass",
  },
  {
    img: "vscode.svg",
    title: "vscode",
  },
];

const imaVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
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

const Technologies = () => {
  return (
    <motion.div className={styles.images} variants={containerVariants}>
      <div>
        <strong>
          <AnimatedText text="fundamentals languages" speed={10} />
        </strong>
        <div>
          {data1.map((img, i) => (
            <motion.div key={img.title + i} variants={imaVariants}>
              <Image
                src={`/assets/${img.img}`}
                height={50}
                width={50}
                alt={img.title}
              />
              <p>{img.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <strong>
          <AnimatedText text="Libraries & FrameWorks" speed={10} />
        </strong>

        <div>
          {data2.map((img, i) => (
            <motion.div key={img.title + i} variants={imaVariants}>
              <Image
                src={`/assets/${img.img}`}
                height={50}
                width={50}
                alt={img.title}
              />
              <p>{img.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <strong>
          <AnimatedText text="Other tools" speed={10} />
        </strong>
        <div>
          {data3.map((img, i) => (
            <motion.div key={img.title + i} variants={imaVariants}>
              <Image
                src={`/assets/${img.img}`}
                height={50}
                width={50}
                alt={img.title}
              />
              <p>{img.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;
