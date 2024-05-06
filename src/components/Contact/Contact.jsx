import React, { useRef, useState } from 'react'
import "./Contact.scss";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
const variants ={
    initial:{
        y:80,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}
const Contact = () => {
  const form = useRef();
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gg3f2u2', 'template_jov9y9p', form.current, {
        publicKey: 'k4QP-1Vh7A2dQawHd',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true)
        },
      );
  };
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
      <div className="text-container">
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div className="item" variants={variants} initial="initial" whileInView="animate">
            <h2>Mail</h2>
            <span>jasmeet13112001@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants} initial="initial"
             whileInView="animate">
                <h2>GitHub</h2>
                <a href="http://github.com/Jasmeet1311">Link</a>

            </motion.div>
            <motion.div className="item" variants={variants} initial="initial" whileInView="animate">
                <h2>Linkedln</h2>
                <a href="http://www.linkedin.com/in/jasmeet-kaur-557aa7295">Link</a>

            </motion.div>
      </div>
      <motion.div className="form-container" variants={variants} initial="initial" whileInView="animate">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="name" placeholder='Name' required/>
            <input type="email" name="email" id="email" placeholder='Email' required />
            <textarea rows={8} name="message" id="" placeholder='Message'></textarea>
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
