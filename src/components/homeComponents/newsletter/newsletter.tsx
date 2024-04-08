import React from "react";
import styles from "./newsletter.module.scss";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const NewsLetter = () => {
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
    <div className={styles["container"]}>
      <motion.div
        initial="headingOffScreen"
        whileInView="headingOnScreen"
        variants={headingVariants}
      >
        <h1>Get To Know The Meraki Way</h1>
      </motion.div>
      <motion.div
        initial="fadeInOffScreen"
        whileInView="fadeInOnScreen"
        variants={fadeInVariants}
      >
        <p>
          Join our email list to receive our salon newsletter giving you
          discounts, a peak into salon news, hairstyle tips, product spotlights,
          trend forecasting, and more.
        </p>
      </motion.div>
      <motion.div
        initial="fadeInOffScreen"
        whileInView="fadeInOnScreen"
        variants={fadeInVariants}
      >
        <div className={styles["send-email-group"]}>
          <button
            onClick={() => {
              navigate("/contact");
              setTimeout(() => {
                window.scrollTo({
                  top: document.documentElement.scrollHeight,
                  behavior: "smooth",
                });
              }, 0);
            }}
          >
            Contact
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
