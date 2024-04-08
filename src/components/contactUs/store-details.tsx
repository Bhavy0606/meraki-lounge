import styles from "./contact-us.module.scss";
const StoreDetails = () => {
  return (
    <div className={styles["details-container"]}>
      <div className={styles["top"]}>
        <div className={styles["left"]}>
          <label>
            <label>Sunday and Monday CLOSED</label>
            <label>Tuesday - Friday 9:00am - 7:00pm</label>
            <label>Saturday 10am - 6pm </label>
          </label>
        </div>
        <div className={styles["right"]}>
          {/* <a href="">
            <label>Sunday and Monday CLOSED</label>
            <label>Tuesday - Friday 9:00am - 7:00pm</label>
            <label>Saturday 10am - 6pm </label>
          </a> */}
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["left"]}>
          <a href="mailto:info@merakiloungesd.com">
            <label>EMAIL:</label>
            <label>xyz@mail.com</label>
          </a>
        </div>
        <div className={styles["right"]}>
          <a href="tel:+1 (123) 321-7898">
            <label>TO BOOK AN APPOINTMENT </label>
            <label>+1 (123) 321-7898</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
