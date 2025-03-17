import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/pages/index.scss";

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);

  emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        // console.log("SUCCESS!");
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 3000);
        setIsLoading(false);
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Erreur d'envoi d'email, veuillez réessayer.");
        setIsLoading(false);
      }
    );
};

  return (
    <section id="contact-section">
      <h2>Contact</h2>

      {isSent && (
        <p className="success-message">
          ✅ Merci ! Nous allons traiter votre demande.
        </p>
      )}
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Nom</label>
        <input id="user_name" type="text" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input id="user_email" type="email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" className={isSent ? "sent" : ""}>
  {isLoading ? "Envoi en cours..." : isSent ? "Envoyé ✅" : "Envoyer"}
</button>

      </form>
    </section>
  );
};

export default ContactUs;
