import styles from "./get-direction.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const GetDirection = () => {
  const headingVariants: Variants = {
    headingOffScreen: {
      opacity: 0,
      scale: 0.6,
      filter: "blur(20px)",
      transform: "translateY(-50px)",
    },
    headingOnScreen: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transform: "translateY(0px)",
      transition: {
        duration: getRandomFloat(0.8, 1.0),
      },
    },
  };
  const fadeInVariants: Variants = {
    fadeInOffScreen: {
      opacity: 0,
      scale: 0.6,
      filter: "blur(20px)",
      transform: "translateY(50px)",
    },
    fadeInOnScreen: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transform: "translateY(0px)",
      transition: {
        duration: getRandomFloat(0.8, 1.0),
      },
    },
  };
  return (
    <>
      <div className={styles["container"]}>
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Visit Us</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <button>
            <a
              href="https://www.google.com/maps/place/Lawa+Meraki/@32.7091044,-117.1553372,20z/data=!4m6!3m5!1s0x80d95358e188793b:0x6a28a3c166a9e1d3!8m2!3d32.7091321!4d-117.1553064!16s%2Fg%2F11c61btvw1?entry=ttu"
              rel="noreferrer"
              target="_blank"
            >
              Get Directions
            </a>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default GetDirection;
