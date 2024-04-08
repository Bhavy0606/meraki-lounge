import { Variants, motion } from "framer-motion";
import styles from "./memberships.module.scss";

function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const Memberships = (props: any) => {
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
        {/* <div className={styles["left"]}>
          <img draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/IMG-1621%20(1)_LbCdNUZPY.JPG?updatedAt=1698686293808"
            alt="left"
          />
        </div> */}
        <div className={styles["mid"]}>
          <motion.div
            initial="headingOffScreen"
            whileInView="headingOnScreen"
            variants={headingVariants}
          >
            <h1>San Diego's Luxury Salon</h1>
          </motion.div>
          <motion.div
            initial="fadeInOffScreen"
            whileInView="fadeInOnScreen"
            variants={fadeInVariants}
          >
            <p>Browse our variety of premium salon memberships</p>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // This creates a smooth scrolling effect, if supported
                });
                props.setActiveTab("memberships");
              }}
            >
              View Our Memberships
            </button>
          </motion.div>
        </div>
        {/* <div className={styles["right"]}>
          <img draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/IMG-6657%20(1)_tZELjZcrD.JPG?updatedAt=1698686278030"
            alt="right"
          />
        </div> */}
      </div>
    </>
  );
};

export default Memberships;
