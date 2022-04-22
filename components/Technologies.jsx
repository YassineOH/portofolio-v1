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
    title: "javscript",
  },
];
const data2 = [
  {
    img: "react.svg",
    title: "react",
  },
  {
    img: "bootstrap.svg",
    title: "bootstrap",
  },
  {
    img: "mui.svg",
    title: "material UI",
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
    img: "framerMotion.svg",
    title: "FramerMotion",
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
    img: "github.svg",
    title: "github",
  },
  {
    img: "markdown.svg",
    title: "markdown",
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
            <motion.div
              key={img.title + i}
              variants={imaVariants}
              whileHover={{
                scaleX: 1.3,
                scaleY: 1.3,
                backgroundColor: "rgba(255, 255, 255, .3)",
                borderRadius: 10,
                cursor: "pointer",
                padding: 5,
                cursor: "pointer",
              }}
            >
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
            <motion.div
              key={img.title + i}
              variants={imaVariants}
              whileHover={{
                scaleX: 1.3,
                scaleY: 1.3,
                backgroundColor: "rgba(255, 255, 255, .3)",
                borderRadius: 10,
                cursor: "pointer",
                padding: 5,
                cursor: "pointer",
              }}
            >
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
            <motion.div
              key={img.title + i}
              variants={imaVariants}
              whileHover={{
                scaleX: 1.3,
                scaleY: 1.3,
                backgroundColor: "rgba(255, 255, 255, .3)",
                borderRadius: 10,
                cursor: "pointer",
                padding: 5,
                cursor: "pointer",
              }}
            >
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
