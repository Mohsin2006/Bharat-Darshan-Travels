import "./Cars.css"
import car_1 from "../../assets/program-1.png"
import car_2 from "../../assets/program-2.png"
import car_3 from "../../assets/program-3.png"
import car_4 from "../../assets/hero.jpeg"
import car_5 from "../../assets/Force Urbania.jpeg"
import Title from "../Title/Title"
import { PinIcon, ArrowIcon } from "../Icons/Icons"

const cars = [
  { image: car_1, name: "Hatchback", route: "Delhi, Kathmandu, Pokhra, Agra, Mathura", seats: "5 Seats", rate: 17 },
  { image: car_2, name: "Maruti Suzuki Ertiga", route: "Ayodhya, Varanasi, Lucknow", seats: "7 Seats", rate: 22 },
  { image: car_3, name: "Sedan", route: "Prayagraj, Gorakhpur, Kanpur, Lumbini", seats: "5 Seats", rate: 18 },
  { image: car_5, name: "Force Urbania", route: "Delhi, Agra, Patna, Siwan", seats: "16 Seats", rate: 45 },
  { image: car_4, name: "Toyota Innova", route: "All India Permit", seats: "7 Seats", rate: 30 },
]

const Cars = () => {
  return (
    <section className='cars section' id='cars'>
      <div className="container">
        <Title subTitle='Select a car that suits' title='Choose Your Car to Ride!' />
        <div className="cars-grid">
          {cars.map(car => (
            <div className="car-card" key={car.name}>
              <div className="car-img">
                <img src={car.image} alt={car.name} />
                <span className="car-seats">{car.seats}</span>
              </div>
              <div className="car-body">
                <h3>{car.name}</h3>
                <p className="car-route"><PinIcon />{car.route}</p>
                <ul className="car-prices">
                  <li><span>Per KM Rate:</span><strong>₹{car.rate}</strong></li>
                  <li><span>Driver Allowance:</span><strong>₹300</strong></li>
                  <li><span>24/7 Support:</span><strong>Free</strong></li>
                </ul>
                <a href="#booking" className="btn car-btn">Book Now <ArrowIcon /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cars
