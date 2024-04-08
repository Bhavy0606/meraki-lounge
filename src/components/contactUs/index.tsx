import Accordion from "./accordion";
import data from "./accordion-data.json";
import styles from "./contact-us.module.scss";
import GoogleMapComponent from "./map";
import StoreDetails from "./store-details";
import Subscription from "./subscription";
const ContactUs = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <div className={styles["get-connected-container"]}>
            <h1>Get Connected</h1>
            <div className={styles["img-box"]}>
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/Revision%20Studios-36_tNOJj8ILd.jpeg?updatedAt=1692858420396"
                alt="contact model"
              />
            </div>
          </div>
        </div>
        <div className={styles["right"]}>
          <StoreDetails />
          <div className={styles["accordion-container"]}>
            {data.map((item: any) => {
              if (item.content) {
                return <Accordion title={item.title} content={item.content} />;
              } else {
                return (
                  <Accordion
                    title={item.title}
                    memberships={item.memberships}
                    ending_lable={item.ending_lable}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles["map-container"]}>
        <GoogleMapComponent
          center={{ lat: 32.7091321, lng: -117.1553064 }}
          zoom={14}
        />
      </div>
      <Subscription />
    </>
  );
};

export default ContactUs;
