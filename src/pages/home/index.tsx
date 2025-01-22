import { Variants, motion } from "framer-motion";
import BuyExtensions from "../../components/homeComponents/buy-extensions";
import GetDirection from "../../components/homeComponents/get-direction";
import NewsLetter from "../../components/homeComponents/newsletter/newsletter";
import PremiereSalon from "../../components/homeComponents/premiere-salon";
import SanDiegosSalon from "../../components/homeComponents/san-diegos-salon/san-diegos-salon";
import UrbanLuxury from "../../components/homeComponents/urban-luxury";
import styles from "./home.module.scss";
import GoogleReviews from "../../components/homeComponents/google-reviews";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function Home() {
  const imageVariants: Variants = {
    imageOffScreen: {
      scale: 0.6,
      opacity: 0,
      zIndex: -11,
    },
    imageOnScreen: {
      scale: 1,
      opacity: 1,
      zIndex: 0,
      transition: {
        duration: getRandomFloat(0.5, 1.0),
      },
    },
  };
  return (
    <>
      <div className={`${styles["home-container"]}`}>
        <div className={`${styles["video-container"]}`}>
          <video autoPlay muted loop playsInline preload={"auto"}>
            <source
              src="https://ik.imagekit.io/euo36lugk/meraki/Abundance-_Website_Video__UeskLrn0g.mp4?updatedAt=1685177496130"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles["home-content"]}>
          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <div className={`${styles["empty-box"]}`}></div>
          </motion.div>

          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <UrbanLuxury
              url={`https://ik.imagekit.io/euo36lugk/meraki/67B59C11-42D5-43DB-BF2D-EF0F60B9F190_AJfKAvmpCm.jpeg?updatedAt=1684213650203`}
            />
          </motion.div>
          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <PremiereSalon />
          </motion.div>

          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <BuyExtensions
              url={`https://ik.imagekit.io/euo36lugk/meraki/abundance%20hair%20-%20deenna%20_T1U22R5Ns.jpeg?updatedAt=1703131409217`}
            />
          </motion.div>

          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <SanDiegosSalon />
          </motion.div>
          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <GetDirection />
          </motion.div>

          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <NewsLetter />
          </motion.div>
          <motion.div
            initial="imageOffScreen"
            whileInView="imageOnScreen"
            variants={imageVariants}
          >
            <GoogleReviews />
          </motion.div>
          {/* <motion.div initial="imageOffScreen" whileInView="imageOnScreen" variants={imageVariants}>
                        <GetInTouch />
                    </motion.div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
