import { useState } from "react";
import styles from "./accordion.module.scss";

const Accordion = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (props.content) {
    return (
      <>
        <div
          className={`${styles["accordion"]} ${
            isOpen ? `${styles["accordion"]}` : ""
          }`}
        >
          <div
            className={`${styles["accordion-header"]}`}
            onClick={toggleAccordion}
          >
            <h1>{props.title}</h1>
            <div
              className={`${styles["icon"]} ${
                isOpen ? `${styles["open"]}` : ""
              }`}
            >
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/plus_3oJl7DTcn.svg?updatedAt=1692793903211"
                alt="plus icon"
              />
            </div>
          </div>
          {/* <div className={isOpen ? `${styles["accordion-content-show"]}` : `${styles["accordion-content"]}`}>{props.content}</div> */}
          <ul
            className={
              isOpen ? `${styles["slide-show"]}` : `${styles["slide"]}`
            }
          >
            <li>{props.content}</li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className={`${styles["accordion"]} ${
            isOpen ? `${styles["accordion"]}` : ""
          }`}
        >
          <div
            className={`${styles["accordion-header"]}`}
            onClick={toggleAccordion}
          >
            <h1>{props.title}</h1>
            <div
              className={`${styles["icon"]} ${
                isOpen ? `${styles["open"]}` : ""
              }`}
            >
              <img
                draggable={false}
                src="https://ik.imagekit.io/euo36lugk/meraki/plus_3oJl7DTcn.svg?updatedAt=1692793903211"
                alt="plus icon"
              />
            </div>
          </div>
          {/* <div className={isOpen ? `${styles["accordion-content-show"]}` : `${styles["accordion-content"]}`}>{props.content}</div> */}
          <ul
            className={
              isOpen ? `${styles["slide-show"]}` : `${styles["slide"]}`
            }
          >
            {props.memberships.map((membership: any) => {
              return (
                <li>
                  <h3>{membership.title}</h3>
                  <p>{membership.desc}</p>
                  <h4>{membership.price}</h4>
                </li>
              );
            })}
            <label>{props.ending_lable}</label>
          </ul>
        </div>
      </>
    );
  }
};

export default Accordion;
