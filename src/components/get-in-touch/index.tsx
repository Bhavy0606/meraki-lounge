import { Variants, motion } from "framer-motion";
import styles from "./get-in-touch.module.scss";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const GetInTouch = () => {
  const BOOKING_URL = `https://www.vagaro.com/lawameraki/book-now`;
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
          <h1>Get In Touch</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>
            Let us bring your hair goals to life and leave you feeling
            confident, beautiful, and completely satisfied. Contact us now for
            an unforgettable hair experience.
          </p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <div className={styles["send-email-group"]}>
            {/* <input type="email" placeholder="Email Address" /> */}
            <button
              onClick={() => {
                window.open(BOOKING_URL, "_blank");
              }}
            >
              Book
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default GetInTouch;
