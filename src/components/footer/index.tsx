import React from "react";
import styles from "./footer.module.scss";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["footer-top"]}>
          <div className={styles["footer-left"]}>
            <img
              draggable={false}
              src="./img/gray-logo.png"
              alt="Meraki Logo"
            />
          </div>
          <div className={styles["footer-right"]}>
            <div className={styles["footer-right-item"]}>
              <h5>Quick Links</h5>
              <label
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact
              </label>
              <label>
                <a
                  href="https://instagram.com/merakiloungesd?igshid=MzRlODBiNWFlZA=="
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit Us On Instagram
                </a>
              </label>
              <label>
                <a
                  href="https://www.facebook.com/LawaMerakiSalon/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit Us On Facebook
                </a>
              </label>
            </div>
            <div className={styles["footer-right-item"]}>
              <h5>Meraki Lounge Links</h5>
              <label
                onClick={() => {
                  navigate("/services");
                }}
              >
                Book a Service
              </label>
              <label
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Shop Extensions
              </label>
              {/* <label>
                <a href="tel:+1 (619) 535-7828">+1 (619) 535-7828</a>
              </label> */}
            </div>
            <div className={styles["footer-right-item"]}>
              <h5>Quick Links</h5>
              <label
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Shop Extensions
              </label>
            </div>
            <div className={styles["footer-right-item"]}>
              <h5>Meraki Lounge Info</h5>
              <label>Tuesday-Saturday 9am - 7pm</label>
              <label>Sunday and Mondays CLOSED</label>
              <h5>Address</h5>
              <label>
                <a
                  href="https://www.google.com/maps/place/Lawa+Meraki/@32.709126,-117.1552452,21z/data=!4m6!3m5!1s0x80d95358e188793b:0x6a28a3c166a9e1d3!8m2!3d32.7091321!4d-117.1553064!16s%2Fg%2F11c61btvw1?entry=ttu"
                  rel="noreferrer"
                  target="_blank"
                >
                  369 10th Ave. San Diego, CA 92101
                </a>
              </label>
              <h5>Phone:</h5>
              <label>
                <a href="tel:+1 (619) 535-7828">+1 (619) 535-7828</a>
              </label>
            </div>
          </div>
        </div>
        <div className={styles["footer-bottom"]}>
          <p>All Rights Reserved 2023 &copy;</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
