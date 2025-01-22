import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import newSubscription from "../../../shared/services/subscription";
import styles from "../contact-us.module.scss";

interface IFormData {
  firstname: string,
  lastname: string,
  phone: number | string,
  email: string

}


const Subscription = () => {

  const initFormData: IFormData = {
    firstname: "",
    lastname: "",
    phone: "",
    email: ""
  }

  const [formData, setFormData] = useState<IFormData>(initFormData)


  const [open, setOpen] = useState(false);
  const [subStatus, setSubStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);




  useEffect(() => {
    if (!initialLoad) {
      (formData.email.length === 0) ? handleClose() :
        validateEmail(formData.email).then((isValid) => {
          if (!isValid) {
            setSubStatus("Invalid Email");
            setOpen(!isValid);
            setIsDisabled(true);
          } else {
            handleClose();
            setIsDisabled(false);
          }
        });
    } else {
      setInitialLoad(false);
    }
  }, [formData.email, initialLoad]);

  const handleSubscribe = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const isValid = await validateEmail(formData.email);

    if (!isValid) {
      setSubStatus("Invalid Email");
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      const status = await newSubscription(formData);
      setSubStatus(status);
    }

    setOpen(true);
  };
  const handleClose = () => {
    setSubStatus("");
    setOpen(false);
  };

  // Email Validation
  const validateEmail = async (search: string) => {
    const regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|("([^\\"]|\\")*"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+.)+[a-zA-Z]{2,}))$/  // eslint-disable-line

    return regexp.test(search);
  };

  return (
    <>
      <div className={styles["newsletter-container"]}>
        <div className={styles["newsletter"]}>
          <h1>Get to know the meraki way</h1>
          <p>
            Join our email list to receive our salon newsletter giving you
            discounts, a peak into salon news, hairstyle tips, product
            spotlights, trend forecasting, and more.
          </p>
          <div className={styles["form-container"]}>
            <div className={styles["two-form-group"]}>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  required
                  id="firstname"
                  onChange={(event) => {
                    setFormData({ ...formData, firstname: event.target.value })
                  }}
                />
                <label
                  htmlFor="firstname"
                  className={"floated-label"}
                >
                  First Name
                </label>
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  required
                  id="lastname"
                  onChange={(event) => {
                    setFormData({ ...formData, lastname: event.target.value })
                  }}

                />
                <label
                  htmlFor="lastname"
                  className={"floated-label"}
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className={styles["form-group"]}>
              <input
                type="text"

                required
                id="phone"
                onChange={(event) => {
                  setFormData({ ...formData, phone: event.target.value })
                }}

              />
              <label
                htmlFor="phone"
                className={"floated-label"}
              >
                Phone
              </label>
            </div>

            <div className={styles["form-group"]}>
              <input
                type="email"

                required
                id="email"
                onChange={(event) => {
                  setFormData({ ...formData, email: event.target.value })
                }}
              />
              <label
                htmlFor="email"
                className={"floated-label"}
              >
                Email
              </label>
            </div>
            <button
              disabled={isDisabled}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div>
          {/* <div className={styles["form-group"]}>
            <div className={styles["input-group"]}>
              <input
                type="email"
                required
                id="input-id"
                onChange={(e) => {
                  updateEmail(e.target.value);
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <label
                htmlFor="input-id"
                className={filledInput ? "floated-label" : ""}
              >
                Email
              </label>
            </div>
            <button
              disabled={isDisabled}
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
          </div> */}
          {
            !initialLoad && (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={subStatus}
              >
                <Alert severity="success" sx={{ width: "100%" }}>
                  {subStatus}
                </Alert>
              </Snackbar>
            )
          }
        </div>
      </div>

    </>
  );
};
export default Subscription;
