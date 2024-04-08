import styles from "./book-stylist.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const BookStylist = () => {
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
      <div className={styles["left"]}>
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Book One of our Stylists </h1>
        </motion.div>
        {/* <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>Get connected</p>
        </motion.div> */}
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p className={styles["para"]}>
            "Meraki lounge stylists create iconic trends among a wide range of
            specialty services. Tiffany is building her empire through raising
            the next generation of master stylists. Training them to be experts
            in extensions, blonding, and color and cutting, meraki lounge
            fosters an environment of excellence."
          </p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <a href="#">Follow us on Instagram</a>
        </motion.div>
      </div>
      <div className={styles["right"]}>
        {/* <p>invest in your dream hair</p> */}
        <div className={styles["img-box"]}>
          {/* <img draggable={false}
            src="https://ik.imagekit.io/euo36lugk/meraki/RevisionStudios-164_p5xw6WL-p.jpg?updatedAt=1692771655981"
            alt="services-model-1"
          /> */}
          <video autoPlay muted loop playsInline preload={"auto"}>
            <source
              src="https://ik.imagekit.io/euo36lugk/meraki/b856eb6c31d045eb801ad92e92356453_7m7nzAr7A.mov?updatedAt=1702965169193"
              type="video/mp4"
            />
          </video>
          {/* <img draggable={false} src="https://ik.imagekit.io/euo36lugk/meraki/RevisionStudios-124_BnR8VuN7_.jpg?updatedAt=1692687908833" alt="services-model-2" /> */}
        </div>
        {/* <label>buy our luxury extensions</label> */}
      </div>
    </div>
  );
};

export default BookStylist;
