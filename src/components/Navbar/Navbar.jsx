import { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.jpeg"
import { Link } from 'react-scroll'
import { PHONE, PHONE_LINK, WHATSAPP_LINK, EMAIL, ADDRESS } from '../../data'
import { PhoneIcon, WhatsAppIcon, MailIcon, PinIcon, MenuIcon, CloseIcon, Socials } from '../Icons/Icons'

const links = [
  { to: 'hero', label: 'Home' },
  { to: 'services', label: 'Services' },
  { to: 'about', label: 'About Us' },
  { to: 'cars', label: 'Our Cars' },
  { to: 'drivers', label: 'Drivers' },
  { to: 'testimonials', label: 'Reviews' },
  { to: 'news', label: 'News' },
]

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 150)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMobileMenu(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <ul className="topbar-info">
            <li><MailIcon /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><PinIcon />{ADDRESS}</li>
          </ul>
          <div className="topbar-right">
            <span><PhoneIcon />Tel: <a href={PHONE_LINK}>{PHONE}</a></span>
            <Socials />
          </div>
        </div>
      </div>

      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="container navbar-inner">
          <Link to='hero' smooth={true} duration={500} className="logo">
            <img src={logo} alt="Bharat Darshan Travels" />
          </Link>

          <ul className={`nav-links ${mobileMenu ? "open" : ""}`}>
            {links.map(link => (
              <li key={link.to}>
                <Link to={link.to} smooth={true} offset={-90} duration={500} spy={true} activeClass='active' onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-mobile-cta">
              <Link to='booking' smooth={true} offset={-90} duration={500} className='btn' onClick={closeMenu}>Book Now</Link>
            </li>
          </ul>

          <div className="nav-right">
            <a href={PHONE_LINK} className="nav-call">
              <span className="nav-call-icon"><PhoneIcon /></span>
              <span>
                <small>Call Anytime</small>
                <strong>{PHONE}</strong>
              </span>
            </a>
            <a
              href={WHATSAPP_LINK}
              className="nav-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <Link to='booking' smooth={true} offset={-90} duration={500} className='btn nav-btn'>Book Now</Link>
            <button className='menu-toggle' aria-label='Toggle menu' onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
