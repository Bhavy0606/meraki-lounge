import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import newSubscription from "../../../shared/services/subscription";
import styles from "../contact-us.module.scss";
const Subscription = () => {
  const [filledInput, setFilledInput] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [subscribing, setSubscribing] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const updateEmail = (e: string) => {
    setEmail(e);
  };

  const handleFocus = () => {
    setFilledInput(true);
    setOpen(false);
  };

  const handleBlur = async () => {
    setFilledInput(email.length > 0);
  };

  const validateEmail = async (search: string) => {
    const regexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|("([^\\"]|\\")*"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

    return regexp.test(search);
  };

  const handleSubscribe = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setSubscribing(true);
    const isValid = await validateEmail(email);
    setOpen(!isValid);
    if (!isValid) {
      setSnackbarMessage("Invalid Email");
    } else {
      const status = await newSubscription(email);

      setSnackbarMessage(status);
      setOpen(true);
    }

    setEmail("");
  };
  const handleClose = () => {
    setSnackbarMessage("");
    setOpen(false);
  };
  useEffect(() => {
    setSubscribing(false);
  }, [snackbarMessage]);

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
          <div className={styles["form-group"]}>
            <div className={styles["input-group"]}>
              <input
                type="email"
                required
                id="input-id"
                value={email}
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
            <button disabled={subscribing} onClick={handleSubscribe}>
              {subscribing ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          {open && (
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message={snackbarMessage}
            >
              <Alert
                severity={
                  snackbarMessage === "Subscribed" ? "success" : "error"
                }
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          )}
        </div>
      </div>
      ;
    </>
  );
};
export default Subscription;
