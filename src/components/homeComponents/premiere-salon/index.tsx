import styles from "./premiere-salon.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const PremiereSalon = () => {
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
    <div className={`${styles["container"]}`}>
      <div
        className={`${styles["model-left-container"]} ${styles["meraki-luxury-saloon"]}`}
      >
        <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>The Premier San Diego Salon</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <label>
            Our stylists specialize in hand-tied extensions, color, cuts and
            more.
          </label>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>
            Our woman founded salon is aimed to empower the beauty industry the
            Meraki Way. Our stylists specialize in hand-tied extensions, color,
            cuts, and more.
          </p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>
            While breaking industry boundaries, the chair becomes an experience
            where luxury and education meet. With products lines like Kevin
            Murphy , Kerestase, and Abundance Extensions.
          </p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <p>
            We are dedicated to caring for your hair with soul, creativity, and
            love.
          </p>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <button
            onClick={() => {
              window.open(BOOKING_URL, "_blank");
            }}
          >
            Book
          </button>
        </motion.div>
      </div>
      <div className={`${styles["model-right-container"]} `}>
        <img
          draggable={false}
          src={`https://ik.imagekit.io/euo36lugk/meraki/RevisionStudios-10_z5HWeJBBZ.jpg?updatedAt=1690001740127`}
          alt="luxury salon"
          className={`${styles["model-image"]}`}
        />
      </div>
    </div>
  );
};

export default PremiereSalon;
