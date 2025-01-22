async function newSubscription(formD: {
  firstname: string
  lastname: string
  phone: number | string
  email: string
}) {
  const formData = new FormData()
  const currentTime = new Date()
  const options = {
    weekday: "long" as const,
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "numeric" as const,
    minute: "numeric" as const,
    second: "numeric" as const,
    timeZoneName: "short" as const,
  }

  const formatter = new Intl.DateTimeFormat("en-US", options)
  const formattedTime = formatter.format(currentTime)

  formData.append("Email", formD.email)
  formData.append("firstname", formD.firstname)
  formData.append("lastname", formD.lastname)
  formData.append("phone", formD.phone.toString())
  formData.append("Time", JSON.stringify(formattedTime))

  const resp = await fetch(
    "https://script.google.com/macros/s/AKfycbzf0kUtt4J7s_9_qfh8A-WQBW6mgel0qGp08Yu6B7_STRc0lzh8hD2cYeCqHZwiEyB7/exec",
    { method: "POST", body: formData }
    // "https://script.google.com/macros/s/AKfycbzB9BTbZnoSV52Yu_pxYzESRiXX6jMLX9BjtBy-Qnx8HTEUAkmjUYpwzGew9q3b9E0g/exec",
    // { method: "POST", body: formData }
  )
  if (resp.status === 200 || resp.status === 201) {
    return "Subscribed"
  } else {
    return "Something went wrong!"
  }
}
export default newSubscription
