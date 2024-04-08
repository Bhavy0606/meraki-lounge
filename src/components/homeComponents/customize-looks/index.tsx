import React from "react";
import { Variants, motion } from "framer-motion";

import styles from "./customize-looks.module.scss";

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const CustomizeLooks = () => {
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
          <h1>Customize Your Looks</h1>
        </motion.div>
        <div className={styles["image-grid-container"]}>
          {/* <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/pers_3_Y5YRQUDOm.jpg?updatedAt=1690000845174"
                  alt="new look"
                />
              </div>
            </div> */}
          <div className={styles["grid-item"]}>
            <div className={styles["new-look-image-container"]}>
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/pers_2_yMWkkY9pq.jpg?updatedAt=1690000845246"
                alt="new look"
              />
            </div>
          </div>
          {/* <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/IMG-3543__1__V0Hpqk_4e.JPG?updatedAt=1684219698592"
                  alt="new look"
                />
              </div>
            </div>
            <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/IMG-3547__1__-e6zhka7M.JPG?updatedAt=1684219732482"
                  alt="new look"
                />
              </div>
            </div>
            <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/65174C9C-4B0D-47F6-A3C3-2050B282D683__1__roSEjG677.JPG?updatedAt=1684219762097"
                  alt="new look"
                />
              </div>
            </div>
            <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/IMG-2259__1__KFUJf5YXy.jpg?updatedAt=1684219789691"
                  alt="new look"
                />
              </div>
            </div>
            <div className={styles["grid-item"]}>
              <div className={styles["new-look-image-container"]}>
                <img draggable={false}
                  src="https://ik.imagekit.io/euo36lugk/meraki/F03C0F07-EE25-4B83-B11E-2D823C4C6797_T1lqpfLy2.jpeg?updatedAt=1691598924788"
                  alt="new look"
                />
              </div>
            </div> */}
          <div className={styles["grid-item"]}>
            <div className={styles["new-look-image-container"]}>
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/F03C0F07-EE25-4B83-B11E-2D823C4C6797_T1lqpfLy2.jpeg?updatedAt=1691598924788"
                alt="new look"
              />
            </div>
          </div>
          <div className={styles["grid-item"]}>
            <div className={styles["new-look-image-container"]}>
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/IMG_2299_bhSVvVhcx.jpg?updatedAt=1690391698258"
                alt="new look"
              />
            </div>
          </div>
          <div className={styles["grid-item"]}>
            <div className={styles["new-look-image-container"]}>
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/IMG-2259__1__KFUJf5YXy.jpg?updatedAt=1684219789691"
                alt="new look"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomizeLooks;
