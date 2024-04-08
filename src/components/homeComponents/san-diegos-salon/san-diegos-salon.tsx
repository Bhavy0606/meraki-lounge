import { useNavigate } from "react-router-dom";
import styles from "./san-diegos-salon.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const SanDiegosSalon = () => {
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
  const navigate = useNavigate();
  return (
    <div className={styles["container"]}>
      <motion.div
        initial="headingOffScreen"
        whileInView="headingOnScreen"
        variants={headingVariants}
      >
        <h1>San Diego's Premiere Salon</h1>

        <p>Choose from our various specialty services</p>
      </motion.div>
      <motion.div
        initial="fadeInOffScreen"
        whileInView="fadeInOnScreen"
        variants={fadeInVariants}
      >
        <button onClick={() => navigate("/services")}>View Our Services</button>
      </motion.div>
    </div>
  );
};

export default SanDiegosSalon;
