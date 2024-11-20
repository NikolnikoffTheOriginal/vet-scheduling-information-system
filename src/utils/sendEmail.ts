import emailjs from "emailjs-com";

export const sendEmail = (name: string, email: string, date: string, time: string) => {

  const templateParams = {
    name: name,
    email: email,
    date: date, 
    time: time,
  };

  emailjs
    .send(
      "service_9ch61on", // Replace with your EmailJS service ID
      "template_z6bsbe6", // Replace with your EmailJS template ID
      templateParams,
      "qIomtGRyyzjBKtOwy" // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch((err) => {
      console.error("Error sending email:", err);
    });

};