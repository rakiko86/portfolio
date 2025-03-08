import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/pages/index.scss';

export const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // Gère l'état du bouton et du message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aku35pq', 'template_zsapk5q', form.current, {
        publicKey: '_TPg8W0IWrRda3a87',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true); // Met à jour l'état après l'envoi
          form.current.reset(); // Réinitialise le formulaire

          // Masquer le message après quelques secondes
          setTimeout(() => setIsSent(false), 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <h2>Contact</h2>

      {isSent && <p className="success-message">✅ Merci ! Nous allons traiter votre demande.</p>}
      <form ref={form} onSubmit={sendEmail}>
  <label htmlFor="user_name">Nom</label>
  <input id="user_name" type="text" name="user_name" required />

  <label htmlFor="user_email">Email</label>
  <input id="user_email" type="email" name="user_email" required />

  <label htmlFor="message">Message</label>
  <textarea id="message" name="message" required></textarea>




        <button 
          type="submit" 
          className={isSent ? 'sent' : ''}
        >
          {isSent ? 'Envoyé ✅' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
