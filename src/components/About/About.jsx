import "./About.css"
import about_img from "../../assets/about.jpeg"
import about_small from "../../assets/gallery-1.jpeg"
import Title from "../Title/Title"
import { PHONE, PHONE_LINK } from "../../data"
import { CheckIcon, PhoneIcon, PlayIcon } from "../Icons/Icons"

const points = [
  "Background-checked, professionally trained drivers",
  "Clean, sanitised and well-maintained cars",
  "Strictly on-time pickups and drops",
]

const About = ({ setPlayState }) => {
  return (
    <section className='about section' id='about'>
      <div className="container about-inner">
        <div className="about-left">
          <img src={about_img} alt="Our fleet on the highway" className='about-img-main' />
          <div className="about-img-small">
            <img src={about_small} alt="Our cars on a road trip" />
            <button className='play-btn' onClick={() => setPlayState(true)} aria-label='Play video'>
              <PlayIcon />
            </button>
          </div>
          <div className="about-exp">
            <strong>15+</strong>
            <span>Years of<br />Experience</span>
          </div>
        </div>

        <div className="about-right">
          <Title subTitle='Welcome to Bharat Darshan' title='Feel The Difference And Relaxation!' align='left' />
          <p className="about-lead">
            Our team consists of highly trained, background-checked professional drivers committed to your safety and peace of mind on every journey.
          </p>
          <p>
            They stay alert and proactively manage routes so you enjoy a smooth, hassle-free ride. Count on us for exceptional punctuality, getting you to your destination safely and right on time, every time.
          </p>
          <ul className="about-points">
            {points.map(point => (
              <li key={point}><span><CheckIcon /></span>{point}</li>
            ))}
          </ul>
          <div className="about-bottom">
            <a href={PHONE_LINK} className="about-call">
              <span className="about-call-icon"><PhoneIcon /></span>
              <span>
                <small>Call For a Ride</small>
                <strong>{PHONE}</strong>
              </span>
            </a>
            <div className="about-founder">
              <strong>Rakesh Sharma</strong>
              <span>Founder - CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
