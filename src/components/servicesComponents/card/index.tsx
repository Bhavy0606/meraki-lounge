import styles from "./card.module.scss";

const Card = ({ data }: any) => {
  return (
    <>
      <div className={styles["container"]}>
        <h3>{data.service}</h3>

        <p className={styles["service-tab-para"]}>{data.details}</p>
        <label className={styles["service-tab-rate"]}>{data.rate}</label>
      </div>
    </>
  );
};

export default Card;
