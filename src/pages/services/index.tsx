import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import GetInTouch from "../../components/get-in-touch";
import BookAppointment from "../../components/servicesComponents/book-appointment";
import Card from "../../components/servicesComponents/card";
import DedicatedBeauty from "../../components/servicesComponents/dedicated-beauty";
import { servicesData } from "../../data/servicesData";
import { IServiceDataModel } from "../../shared/models/serviceData.model";
import styles from "./services.module.scss";
import Memberships from "../../components/servicesComponents/memberships";
function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
const Services = () => {
  const [activeTab, setActiveTab] = useState<string>("extensions");
  const [serviceList, setServiceList] = useState<IServiceDataModel[]>([]);
  const [servicesCards, setServicesCards] = useState<any>();

  useEffect(() => {
    const data: any = servicesData[activeTab];
    setServiceList(data);
  }, [activeTab]);

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

  useEffect(() => {
    const tempServicesCards: any = serviceList.map(
      (service: any, index: number) => {
        return (
          <div className={styles["service-card"]}>
            <Card data={service} />
          </div>
        );
      }
    );

    setServicesCards(tempServicesCards);
  }, [serviceList]);
  return (
    <>
      <motion.div
        initial="imageOffScreen"
        whileInView="imageOnScreen"
        variants={headingVariants}
      >
        <div className={styles["container"]}>
          <motion.div
            initial="headingOffScreen"
            whileInView="headingOnScreen"
            variants={headingVariants}
          >
            <h1>Our Premiere salon services </h1>
          </motion.div>

          <div className={styles["services-tabs-buttons"]}>
            <label
              className={activeTab === "extensions" ? styles["active-tab"] : ""}
              onClick={(event: any) => {
                setActiveTab("extensions");
              }}
            >
              Extensions
            </label>
            <label
              className={activeTab === "color" ? styles["active-tab"] : ""}
              onClick={(event: any) => {
                setActiveTab("color");
              }}
            >
              Color
            </label>
            <label
              className={activeTab === "haircuts" ? styles["active-tab"] : ""}
              onClick={(event: any) => {
                setActiveTab("haircuts");
              }}
            >
              Haircuts
            </label>
            <label
              className={activeTab === "styling" ? styles["active-tab"] : ""}
              onClick={(event: any) => {
                setActiveTab("styling");
              }}
            >
              Styling
            </label>
            <label
              className={activeTab === "addOns" ? styles["active-tab"] : ""}
              onClick={(event: any) => {
                setActiveTab("addOns");
              }}
            >
              Add-Ons
            </label>
            <label
              className={
                activeTab === "memberships" ? styles["active-tab"] : ""
              }
              onClick={(event: any) => {
                setActiveTab("memberships");
              }}
            >
              Memberships
            </label>
          </div>

          <div className={styles["active-service-tab-container"]}>
            {/* <h1>{activeTab.toLocaleUpperCase()}</h1> */}
            <div className={styles["services-card-container"]}>
              {servicesCards && servicesCards}
            </div>
          </div>
          <motion.div
            initial="headingOffScreen"
            whileInView="headingOnScreen"
            variants={headingVariants}
          >
            <button
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Book
            </button>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial="imageOffScreen"
        whileInView="imageOnScreen"
        variants={headingVariants}
        className={styles["box"]}
      >
        <BookAppointment />
      </motion.div>
      <motion.div
        initial="imageOffScreen"
        whileInView="imageOnScreen"
        variants={headingVariants}
        className={styles["box"]}
      >
        {/* setActiveTab("extensions") */}
        <Memberships setActiveTab={setActiveTab} />
      </motion.div>
      <motion.div
        initial="imageOffScreen"
        whileInView="imageOnScreen"
        variants={headingVariants}
        className={styles["box"]}
      >
        <DedicatedBeauty />
      </motion.div>
      <motion.div
        initial="imageOffScreen"
        whileInView="imageOnScreen"
        variants={headingVariants}
      >
        <GetInTouch />
      </motion.div>
    </>
  );
};

export default Services;
