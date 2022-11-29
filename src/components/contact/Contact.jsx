import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_g0urera',
      'template_vfi75ki',
      form.current,
      'p6qrFGqePlQp2UCRT',
    )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>aman6201@gmail.com</h5>
            <a href="mailto:manmaharjan6201@gmail.com" target="blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>aman maharjan</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100075416950777"
              target="blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp </h4>
            <h5>+123456789</h5>
            <a href="https://www.whatsapp.com/ " target="blank">
              Send a message
            </a>
          </article>
        </div>

        {/* =======END OF CONTACT OPTIONS========= */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="your full name"
            required
          />
          <input type="email" name="email" placeholder="your email" required />
          <textarea
            name="message"
            row="7"
            placeholder="Leave your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
