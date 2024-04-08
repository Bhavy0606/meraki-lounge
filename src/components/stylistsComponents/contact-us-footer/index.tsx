import { useNavigate } from "react-router-dom";
import styles from "./contact-us-footer.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const ContactUsFooter = () => {
  const headingVariants: Variants = {
    headingOffScreen: {
      opacity: 0,
      scale: 0.6,
      filter: "blur(20px)",
      transform: "translateX(-50px)",
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
      <div className={styles["left"]}>
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Contact Us</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>Give us a call at 619-535-7828.</p>
        </motion.div>
      </div>
      <div className={styles["right"]}>
        <button
          onClick={() => {
            navigate("/contact");
          }}
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default ContactUsFooter;
