import React from 'react';
import "./Contact.css";
import {useRef} from"react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ba1x6di', 'template_j94qt9k', form.current, 'Y7BmeDuzrhmtj54Hv2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <div className=" from-container">
      <h1>
        Send a message to us!
      </h1>
      <form   ref={form} onSubmit={sendEmail}>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Subject"/>

        <textarea  placeholder="Message" rows=" 4"></textarea>
        <button>Send message</button>

      </form>
      
      
      
      </div>
  )
}

export default Contact