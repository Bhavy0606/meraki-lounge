import { Variants, motion } from "framer-motion";
import styles from "./buy-extension.module.scss";
import { useNavigate } from "react-router-dom";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const BuyExtensions = (props: { url: string }) => {
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
    <div className={`${styles["container"]}`}>
      <div
        className={`${styles["model-left-container"]} ${styles["meraki-luxury-saloon"]}`}
      >
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Abundance Hair Extensions</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          {/* <p> Buy our luxury hair extensions </p> */}
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <button
            onClick={() => {
              navigate("/services");
            }}
          >
            Purchase
          </button>
        </motion.div>
      </div>
      <div className={`${styles["model-right-container"]} `}>
        {/* <h1>Abundance Hair Extensions</h1> */}
        <img
          draggable={false}
          src={props.url}
          alt="luxury salon"
          className={`${styles["model-image"]}`}
        />
      </div>
    </div>
  );
};

export default BuyExtensions;
