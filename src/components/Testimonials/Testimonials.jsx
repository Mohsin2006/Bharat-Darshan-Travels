import { useEffect, useState } from 'react'
import "./Testimonials.css"
import Title from '../Title/Title'
import { QuoteIcon, StarIcon, ChevronLeft, ChevronRight } from '../Icons/Icons'

const reviews = [
  {
    name: "Aishwarya Singh", place: "Lucknow, INDIA",
    text: "Our family trip to Manali was perfect. The car was spotless, the driver knew every scenic stop and we always felt safe on the mountain roads.",
  },
  {
    name: "Faisal Sheikh", place: "Delhi, INDIA",
    text: "I book their airport transfers every month for work. Always on time, polite drivers and transparent pricing. Highly recommended!",
  },
  {
    name: "Deepa Sharma", place: "Patna, INDIA",
    text: "Booked a Golden Triangle tour with them. Comfortable Fortuner, friendly driver and great suggestions for food along the way.",
  },
  {
    name: "Rajesh Kumar", place: "Haryana, INDIA",
    text: "Very professional service from start to finish. Booking took a minute and the driver called me before arrival. Will travel again.",
  },
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(2)

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 992 ? 1 : 2)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = reviews.length - perView
  const current = Math.min(index, maxIndex)

  const next = () => setIndex(current >= maxIndex ? 0 : current + 1)
  const prev = () => setIndex(current <= 0 ? maxIndex : current - 1)

  return (
    <section className='testimonials section' id='testimonials'>
      <div className="container">
        <div className="testimonials-head">
          <Title subTitle='Testimonials' title="Client's Reviews" align='left' />
          <div className="testimonials-nav">
            <button onClick={prev} aria-label='Previous review'><ChevronLeft /></button>
            <button onClick={next} aria-label='Next review'><ChevronRight /></button>
          </div>
        </div>

        <div className="testimonials-slider">
          <ul style={{ transform: `translateX(-${current * (100 / perView)}%)` }}>
            {reviews.map(review => (
              <li key={review.name} style={{ flexBasis: `${100 / perView}%` }}>
                <div className="review">
                  <QuoteIcon className="review-quote" />
                  <div className="review-stars">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <p>{review.text}</p>
                  <div className="review-user">
                    <span className="review-avatar">{review.name.split(" ").map(w => w[0]).join("")}</span>
                    <div>
                      <h3>{review.name}</h3>
                      <span>{review.place}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
