import "./Drivers.css"
import driver_1 from "../../assets/user-2.png"
import driver_2 from "../../assets/user-3.png"
import driver_3 from "../../assets/user-4.png"
import Title from "../Title/Title"
import { PHONE, PHONE_LINK } from "../../data"
import { PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "../Icons/Icons"

const drivers = [
  { image: driver_1, name: "Arjun Mehta", role: "Senior Driver, 12 yrs" },
  { image: driver_2, name: "Neha Kapoor", role: "Tour Guide & Driver" },
  { image: driver_3, name: "Rohit Verma", role: "Outstation Specialist" },
]

const Drivers = () => {
  return (
    <section className='drivers section' id='drivers'>
      <div className="container">
        <Title subTitle='Our Expert Drivers' title='Meet Our Drivers' />
        <div className="drivers-grid">
          {drivers.map(driver => (
            <div className="driver-card" key={driver.name}>
              <div className="driver-img">
                <img src={driver.image} alt={driver.name} />
                <ul className="driver-socials">
                  <li><a href="#" aria-label="Facebook"><FacebookIcon /></a></li>
                  <li><a href="#" aria-label="Twitter"><TwitterIcon /></a></li>
                  <li><a href="#" aria-label="Instagram"><InstagramIcon /></a></li>
                </ul>
              </div>
              <div className="driver-body">
                <h3>{driver.name}</h3>
                <span>{driver.role}</span>
                <a href={PHONE_LINK} className="driver-phone"><PhoneIcon />{PHONE}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Drivers
