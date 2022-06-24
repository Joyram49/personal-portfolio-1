import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r017zf8",
        "template_poyr4cr",
        form.current,
        "06uH0dBiUE_e6kpF0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact' id='Contact'>
      <div className='contact_left'>
        <h1>Get in Touch</h1>
        <h1>Contact Me</h1>
      </div>
      <div className='contact_right'>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            placeholder='Name'
            name='user_name'
            className='user'
          />
          <input
            type='email'
            placeholder='Email'
            name='user_email'
            className='user'
          />
          <textarea
            name='message'
            placeholder='Enter meassage'
            className='user user_textarea'
          ></textarea>
          <input type='submit' value='Send' className='btn contact_btn' />
          <p style={{ textAlign: "center" }}>
            {done && "Thanks for Contacting me!!"}
          </p>
        </form>
        <div
          className='blur'
          style={{
            position: "absolute",
            background: "var(--purple)",
            top: "0rem",
            left: "3rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
