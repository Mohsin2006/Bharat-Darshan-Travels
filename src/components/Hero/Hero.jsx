import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import "./Hero.css"
import hero_1 from "../../assets/hero.jpeg"
import hero_2 from "../../assets/about.jpeg"
import { ArrowIcon, ChevronLeft, ChevronRight } from '../Icons/Icons'
import HeroBooking from './HeroBooking'

const slides = [
  {
    image: hero_1,
    sub: "Explore India in unmatched comfort and style",
    title: <>Book Your <span>Ride</span> From Anywhere Today!</>,
  },
  {
    image: hero_2,
    sub: "From majestic mountains to historic landmarks",
    title: <>Your Trusted <span>Road Trip</span> Companion</>,
  },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(c => (c + 1) % slides.length)
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section className='hero' id='hero'>
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? "active" : ""}`}>
            <div className="hero-bg" style={{ backgroundImage: `url(${slide.image})` }}></div>
            <div className="container hero-content">
              <p className="hero-sub">{slide.sub}</p>
              <h1>{slide.title}</h1>
              <div className="hero-btns">
                <Link to='booking' smooth={true} offset={-90} duration={500} className='btn'>Find a Ride <ArrowIcon /></Link>
                <Link to='cars' smooth={true} offset={-90} duration={500} className='btn btn-outline'>Our Cars</Link>
              </div>
            </div>
          </div>
        ))}

        <div className="hero-arrows">
          <button onClick={prev} aria-label='Previous slide'><ChevronLeft /></button>
          <button onClick={next} aria-label='Next slide'><ChevronRight /></button>
        </div>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button key={i} className={i === current ? "active" : ""} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}></button>
          ))}
        </div>
      </div>

      <HeroBooking />
    </section>
  )
}

export default Hero
