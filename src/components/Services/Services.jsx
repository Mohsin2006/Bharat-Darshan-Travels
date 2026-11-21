import "./Services.css"
import service_1 from "../../assets/gallery-2.jpeg"
import service_2 from "../../assets/gallery-4.jpeg"
import service_3 from "../../assets/program-1.png"
import Title from "../Title/Title"
import { ArrowIcon, RouteIcon, ClockIcon, CarIcon } from "../Icons/Icons"

const services = [
  {
    image: service_1,
    icon: <RouteIcon />,
    title: "Outstation Trips",
    text: "Comfortable one-way and round trips to hill stations, heritage sites and every corner of India.",
  },
  {
    image: service_2,
    icon: <ClockIcon />,
    title: "Online Booking",
    text: "Reserve your car in under a minute and get instant confirmation with driver details.",
  },
  {
    image: service_3,
    icon: <CarIcon />,
    title: "City Transport",
    text: "Airport pickups, local sightseeing and business transfers, on time, every time.",
  },
]

const Services = () => {
  return (
    <section className='services section' id='services'>
      <div className="container">
        <Title subTitle='What We Offer' title='Our Best Services' />
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title}>
              <div className="service-img">
                <img src={s.image} alt={s.title} />
                <span className="service-num">0{i + 1}</span>
              </div>
              <div className="service-body">
                <div className="service-icon">{s.icon}</div>
                <h3><a href="#booking">{s.title}</a></h3>
                <p>{s.text}</p>
                <a href="#booking" className="service-link">Read More <ArrowIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
