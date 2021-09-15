/* eslint-disable max-len */
import React, { useState } from 'react';
import { send } from 'emailjs-com';
import styles from '../Contact/Contact.css';

export default function Contact() {
  
  const [toSend, setToSend] = useState({
    from_name: '', 
    message: '',
    reply_to: '',
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'service_if82dxp',
      'template_jun1xrr',
      toSend,
      'user_8LLoptgbYBnhM8XRmIb0G'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED', err);
      });
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className={styles.Contact} onSubmit={handleSubmit}>
        <h1>Want to Collaborate?  Let's talk!</h1>
        <div>
          <label>Name
            <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder="From name" required/>
          </label> 
          <label>Message
            <textarea name="message" value={toSend.message} onChange={handleChange} placeholder="Your Message"/>
          </label>
          <label>Your Email
            <input type="text" name="reply_to" value={toSend.reply_to} onChange={handleChange} placeholder="Your Email" required/>
          </label>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
