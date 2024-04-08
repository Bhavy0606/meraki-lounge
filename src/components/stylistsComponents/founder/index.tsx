import { Variants, motion } from "framer-motion";
import styles from "./founder.module.scss";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const Founder = () => {
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
        <div className={styles["founder-container"]}>
          <div className={styles["founder-left"]}>
            {/* <motion.div
              initial="headingOffScreen"
              whileInView="headingOnScreen"
              variants={headingVariants}
            > */}
            <h1>
              Meet Our
              {/* <motion.div
                  initial="fadeRightOffScreen"
                  whileInView="fadeRightOnScreen"
                  variants={fadeRightVariants}
                > */}
              <span>Founder</span>
              {/* </motion.div> */}
            </h1>
            {/* </motion.div> */}
            {/* <div className={styles["img-box"]}> */}
            <img
              draggable={false}
              src={
                "https://ik.imagekit.io/euo36lugk/meraki/F3780A7E-07C4-4F62-8CE5-B776E3270C13_AWtGQFDV9.JPG?updatedAt=1684215395714"
              }
              alt={"Founder"}
            />
            {/* </div> */}
          </div>
          <div className={styles["founder-right"]}>
            <motion.div
              initial="fadeInOffScreen"
              whileInView="fadeInOnScreen"
              variants={fadeInVariants}
            >
              <span>
                My message to everyone is that <h3> "you are enough.“</h3>
              </span>
            </motion.div>
            <motion.div
              initial="fadeInOffScreen"
              whileInView="fadeInOnScreen"
              variants={fadeInVariants}
            >
              <p>
                “I started in this business, not only for the passion of hair,
                but for the passion of people. I believe that everything you do
                needs purpose. I quickly learned my purpose was not only to help
                others feel beautiful physically, but also to show them their
                worth internally. You can do anything you want to do if you are
                willing to put in the work required.“
              </p>
            </motion.div>
            <motion.div
              initial="fadeInOffScreen"
              whileInView="fadeInOnScreen"
              variants={fadeInVariants}
            >
              <h2> TIFFANY HOOVER </h2>
              <h6>Owner & Founder</h6>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
