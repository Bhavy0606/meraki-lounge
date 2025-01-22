import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./urban-luxury.module.scss";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const UrbanLuxury = (props: { url: string }) => {
  //   const BOOKING_URL = `https://www.vagaro.com/lawameraki/book-now`;
  const navigate = useNavigate();
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
    <div className={`${styles["container"]}`}>
      <div className={`${styles["model-left-container"]}`}>
        <img
          draggable={false}
          src={props.url}
          alt="model"
          className={`${styles["model-image"]}`}
        />
      </div>
      <div
        className={`${styles["model-right-container"]} ${styles["meraki-welcome-container"]}`}
      >
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Urban Luxury</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>Welcome to the Meraki Lounge.</p>

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
            View Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default UrbanLuxury;
