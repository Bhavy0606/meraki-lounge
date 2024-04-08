import { useEffect, useState } from "react";
import styles from "./header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<String>("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) &&
      document.documentElement.clientWidth > 768
    ) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  return (
    <>
      <div className={`${styles["container"]}`}>
        {/* <div className={`${isScrolled ? styles["logo-container-scrolled"] : styles["logo-container"]}`}> */}
        <div className={`${styles["logo-container-scrolled"]}`}>
          <img
            draggable={false}
            src={
              "https://ik.imagekit.io/euo36lugk/meraki/merakilogo1_1_iqs--eyeW.png?updatedAt=1685192727141"
            }
            alt="meraki-logo"
            onClick={() => {
              setIsSideMenuVisible(false);
              navigate("/");
            }}
          />
          <div
            className={`${styles["hamburger-container"]} `}
            onClick={() => {
              setIsSideMenuVisible(!isSideMenuVisible);
            }}
          >
            <img
              draggable={false}
              src="/img/hamburger-button.svg"
              alt="hamburger"
            />
          </div>
        </div>

        <nav
          className={
            isSideMenuVisible
              ? isScrolled
                ? `${styles["show-side-menu"]} ${styles["show-side-menu-scrolled"]}`
                : styles["show-side-menu"]
              : ""
          }
        >
          <ul>
            <li
              className={activeLink === "home" ? styles["active-link"] : ""}
              onClick={() => {
                setIsSideMenuVisible(false);
                setActiveLink("home");
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={activeLink === "services" ? styles["active-link"] : ""}
              onClick={() => {
                setIsSideMenuVisible(false);
                setActiveLink("services");
                navigate("/services");
              }}
            >
              Services
            </li>
            <li
              className={activeLink === "stylists" ? styles["active-link"] : ""}
              onClick={() => {
                setIsSideMenuVisible(false);
                setActiveLink("stylists");
                navigate("/stylists");
              }}
            >
              Stylists
            </li>
            <li
              className={activeLink === "classes" ? styles["active-link"] : ""}
              onClick={() => {
                setIsSideMenuVisible(false);
                //   setActiveLink("classes");
                navigate("/classes");
              }}
            >
              Classes
            </li>
            <li
              className={activeLink === "contact" ? styles["active-link"] : ""}
              onClick={() => {
                setIsSideMenuVisible(false);
                setActiveLink("contact");
                navigate("/contact");
              }}
            >
              Contact
            </li>
          </ul>
          <label
            className={`${styles["shop-link"]}`}
            onClick={() => {
              setIsSideMenuVisible(false);
              navigate("/shop");
            }}
          >
            Shop
          </label>
        </nav>
      </div>
    </>
  );
};

export default Header;
