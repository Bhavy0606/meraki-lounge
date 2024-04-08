async function newSubscription(email: string) {
  const formData = new FormData();
  const currentTime = new Date();
  const options = {
    weekday: "long" as const,
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "numeric" as const,
    second: "numeric" as const,
    timeZoneName: "short" as const,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedTime = formatter.format(currentTime);

  formData.append("Email", email);
  formData.append("Time", JSON.stringify(formattedTime));

  // const resp = await fetch(
  //   "https://script.google.com/macros/s/AKfycbwsiZ-EkkIgOrytKymH9l2a5hmkQTB3cXMLu3gK-h0OVYJmRHPfaTkFIjOpBLYNNP90/exec",
  //   { method: "POST", body: formData }
  // );
  // if (resp.status === 200 || resp.status === 201) {
  //   console.log(resp);
  //   message= "Subscribed";
  // } else {
  //   return "Something went wrong!";
  // }
  let message = "";
  await fetch(
    "https://script.google.com/macros/s/AKfycbw9alKKDojlt2mLfoIqpouteC_Ik39dRu5I2HWazM169YqpRuIiMvq36MwV1uqCUgiG/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => response.text())
    .then((data) => {
      if (data === "Subscribed") {
        message = "Subscribed";
      }
      if (data === "Exists") {
        message = "Subscription failed: Email already exists.";
      }
    });

  return message;
}
export default newSubscription;
