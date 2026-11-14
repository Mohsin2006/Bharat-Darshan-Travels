import { useState } from "react"
import "./Footer.css"
import logo from "../../assets/logo.jpeg"
import StoreButtons from "../AppPromo/StoreButtons"
import { PHONE, PHONE_LINK, EMAIL, ADDRESS } from "../../data"
import { PhoneIcon, MailIcon, PinIcon, ArrowIcon, Socials } from "../Icons/Icons"

const services = ["Airport Transfer", "Business Transport", "City Tours", "Outstation Trips", "Online Booking", "Wedding Cars"]

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    e.target.reset()
  }

  return (
    <footer className='footer'>
      <div className="checker"></div>
      <div className="container footer-grid">
        <div className="footer-col">
          <img src={logo} alt="Bharat Darshan Travels" className="footer-logo" />
          <p>Explore India in unmatched comfort and style. From majestic mountains to historic landmarks, your trusted companion for unforgettable road trips.</p>
          <a href={PHONE_LINK} className="footer-call">
            <span><PhoneIcon /></span>
            <span><small>Call for a ride</small>{PHONE}</span>
          </a>
        </div>

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <ul className="footer-contact">
            <li><PinIcon />{ADDRESS}</li>
            <li><MailIcon /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><PhoneIcon /><a href={PHONE_LINK}>{PHONE}</a></li>
          </ul>
          <Socials />
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            {services.map(s => (
              <li key={s}><a href="#services"><ArrowIcon />{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Sign up to receive travel deals, trip ideas and fresh articles straight to your inbox.</p>
          <form className="footer-newsletter" onSubmit={onSubscribe}>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit" className="btn">Subscribe</button>
          </form>
          {subscribed && <span className="footer-subscribed">Thanks for subscribing!</span>}
          <StoreButtons />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Bharat Darshan Travels. All rights reserved.</p>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#booking">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
