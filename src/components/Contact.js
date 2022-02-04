import { message } from 'antd'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import PageNav from './PageNav'

const Contact = ( ) => {
  const form = useRef();


  const containerVariants = {
    hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {  duration: 1  }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b6xj9i9', 'template_b1li0gl', form.current, 'user_fFuOQJJYwhlEjAlrIakxr')
      .then((result) => {
      message
        .success('Message sent successfully, Thank you', 5);

      console.log(result.text, 'message sent!');
      }, (error) => {
        message
          .error("Sorry failed to send message", 5)
          console.log(error.text, "failed to send message");
      });

  };

    return (
      <motion.div id='contact' className="container info mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <h2> Reach Us </h2>
        <div class="contact-form" id="contact">
            <div class="container">
        <form ref={form} onSubmit={sendEmail}>
         <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <h1>Get in Touch</h1>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 right ">
             <div class="form-group mb-3">
               <input type="text"
                       class="form-control form-control-lg"
                       placeholder="Your Name"
                       name="user_name"/>
             </div>
             <div class="form-group mb-3">
               <input type="email"
                      class="form-control form-control-lg"
                       placeholder="YourEmail@email.com"
                       name="user_email"/>
             </div>
             <div class="form-group mb-3">
               <textarea class="form-control form-control-lg"
                         placeholder="leave a message"
                         name="message">

               </textarea>
             </div>
             <button type="submit" class="btn btn-secondary btn-block">Send</button>
          </div>
         </div>
        </form>
        </div>
        </div>

      <div data-aos="zoom-out-up " data-aos-duration="2000" className="map">

      <div className="container-fluid">
      <div className="mapouter">
      <div className="gmap_canvas embed-responsive embed-responsive-1by1"><iframe title="gMap" className="embed-responsive-item" id="gmap_canvas"
      src="https://maps.google.com/maps?q=asofoatse%20street%20East%20legon&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      <br/><style>
      </style>
      </div>
      </div>
      </div>

      </div>
      <PageNav loc={'/'} text="Go home"/>
        </motion.div>
    )
}

export default Contact
