import React from 'react';
import "../styles/pages/index.scss";
const Contact = () => {
    return (
        <div>
            <article className='contact'>
                <h1>Contact</h1>
                <section>
                    
                    <form action="#" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Envoyer</button> 

                    </form>
                </section>
            
            </article>
            
        </div>
    );
};

export default Contact;