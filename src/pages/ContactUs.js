import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/pages/index.scss';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aku35pq', 'template_zsapk5q', form.current, {
        publicKey: '_TPg8W0IWrRda3a87',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
    <h2>contact</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Envoyer" />
    </form>
    </div>
  );
};

export default ContactUs;