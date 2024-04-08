import staff from "../../../data/staff.json";
import styles from "./all-stylists.module.scss";
import { Variants, motion } from "framer-motion";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const AllStylists = () => {
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
      <div className={styles["container"]}>
        <div className={styles["staff-container"]}>
          <div className={styles["staff-bottom"]}>
            <h1>Stylists</h1>
            <div className={styles["stylists-container"]}>
              {staff.stylists.map((stylist, index) => {
                return (
                  <motion.div
                    initial="imageOffScreen"
                    whileInView="imageOnScreen"
                    variants={imageVariants}
                  >
                    <div className={styles["stylist"]} key={`stylist${index}`}>
                      <img
                        draggable={false}
                        loading="lazy"
                        src={stylist.img.url}
                        alt=""
                      />
                      <h1 className={styles["img-hover-element"]}>
                        {stylist.name}
                      </h1>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className={styles["staff-top"]}>
            <motion.div
              initial="imageOffScreen"
              whileInView="imageOnScreen"
              variants={imageVariants}
            >
              <div className={styles["staff-managers"]}>
                <h1>Managers</h1>
                <div className={styles["managers-photos-box"]}>
                  <div className={styles["manager-img-container"]}>
                    <img
                      draggable={false}
                      loading="lazy"
                      src={staff.manager[0].img.url}
                      alt=""
                    />
                    <h1 className={styles["img-hover-element"]}>
                      {staff.manager[0].name}
                    </h1>
                  </div>
                  <div className={styles["manager-img-container"]}>
                    <img
                      draggable={false}
                      loading="lazy"
                      src={staff.manager[1].img.url}
                      alt=""
                    />
                    <h1 className={styles["img-hover-element"]}>
                      {staff.manager[1].name}
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className={styles["assistant-container"]}>
              <h1>Front Desk</h1>
              <div className={styles["frontdesk-photos-box"]}>
                {staff.frontDesk.map((frontdesk, index) => {
                  return (
                    <motion.div
                      initial="imageOffScreen"
                      whileInView="imageOnScreen"
                      variants={imageVariants}
                    >
                      <div
                        className={styles["assistant"]}
                        key={`frontdesk${index}`}
                      >
                        <img
                          draggable={false}
                          loading="lazy"
                          src={frontdesk.img.url}
                          alt={frontdesk.name}
                        />
                        <h1 className={styles["img-hover-element"]}>
                          {frontdesk.name}
                        </h1>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className={styles["assistant-container"]}>
              <h1>Assistant</h1>
              <div className={styles["assistants-photos-box"]}>
                {staff.assistants.map((assistant, index) => {
                  return (
                    <motion.div
                      initial="imageOffScreen"
                      whileInView="imageOnScreen"
                      variants={imageVariants}
                    >
                      <div
                        className={styles["assistant"]}
                        key={`assistant${index}`}
                      >
                        <img
                          draggable={false}
                          loading="lazy"
                          src={assistant.img.url}
                          alt={assistant.name}
                        />
                        <h1 className={styles["img-hover-element"]}>
                          {assistant.name}
                        </h1>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStylists;
