import styles from "./book-appointment.module.scss";

const BookAppointment = () => {
  return (
    <>
      <div className={styles["container"]}>
        {/* <motion.div
          initial="headingOffScreen"
          whileInView="headingOnScreen"
          variants={headingVariants}
        >
          <h1>Book A Service</h1>
        </motion.div>
        <motion.div
          initial="fadeInOffScreen"
          whileInView="fadeInOnScreen"
          variants={fadeInVariants}
        >
          <button>
            <a
              href="https://maps.google.com/maps?q=369 Tenth Ave, San Diego, CA 92101"
              rel="noreferrer"
              target="_blank"
            >
              Book Appointment
            </a>
          </button>
        </motion.div> */}
      </div>
    </>
  );
};

export default BookAppointment;
