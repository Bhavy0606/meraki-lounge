import React from "react";
import styles from "./dedicated-beauty.module.scss";
import { useNavigate } from "react-router-dom";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const DedicatedBeauty = () => {
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
      <div className={styles["left"]}>
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Dedicated to bringing your inner beauty outward</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>The Meraki Way_</p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p className={styles["para"]}>
            Meraki Lounge is an absolute cutting edge beauty experience. Located
            in the heart of the Finest City, Meraki Lounge is dedicated to
            making a difference in people's lives. We believe that when people
            feel good on the outside, it helps amplify the beauty already
            inside. Experts in extensions, blonding, color, cutting and
            treatments...Meraki Lounge Stylists create iconic trends among a
            wide range of specialty services
          </p>
        </motion.div>

        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <button
            onClick={() => {
              navigate("/stylists");
            }}
          >
            Meet our Stylists
          </button>
        </motion.div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["img-box"]}>
          {/* <img draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/RevisionStudios-96_X3EamNjZs.jpg?updatedAt=1692687906287"
            alt="services-model-1"
          /> */}
          <img
            draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/Revision%20Studios-139_zxZIe_UIa.heic?updatedAt=1702964507539"
            alt="services-model-1"
          />
          <img
            draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/RevisionStudios-124_BnR8VuN7_.jpg?updatedAt=1692687908833"
            alt="services-model-2"
          />
        </div>
      </div>
    </div>
  );
};

export default DedicatedBeauty;
