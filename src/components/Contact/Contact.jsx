/* eslint-disable max-len */
import React, { useState } from 'react';
import dotenv from 'dotenv';
import { send } from 'emailjs-com';
import styles from '../Contact/Contact.css';

dotenv.config();

export default function Contact() {
  
  const [toSend, setToSend] = useState({
    from_name: '', 
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      'process.env.REACT_APP_SERVICE_ID',
      'process.env.REACT_APP_TEMPLATE_ID',
      toSend, 
      'process.env.REACT_APP_USER_ID'
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
        <label>Name
          <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange} placeholder="From name" required/>
        </label>
        <label>Recipient
          <input type="text" name="to_name" value={toSend.to_name} onChange={handleChange} placeholder="To name" required/>
        </label>  
        <label>Message
          <textarea name="message" value={toSend.message} onChange={handleChange} placeholder="Your Message"/>
        </label>
        <label>Your Email
          <input type="text" name="reply_to" value={toSend.reply_to} onChange={handleChange} placeholder="Your Email" required/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
