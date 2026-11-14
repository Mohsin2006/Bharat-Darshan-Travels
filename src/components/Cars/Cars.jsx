import "./Cars.css"
import car_1 from "../../assets/program-1.jpeg"
import car_2 from "../../assets/program-2.jpeg"
import car_3 from "../../assets/program-3.jpeg"
import car_4 from "../../assets/hero.jpeg"
import Title from "../Title/Title"
import { PinIcon, ArrowIcon } from "../Icons/Icons"

const cars = [
  { image: car_1, name: "Toyota Fortuner", route: "Delhi, Agra, Jaipur", seats: "7 Seats", rate: 22 },
  { image: car_2, name: "Kia Seltos", route: "Delhi, Chandigarh", seats: "5 Seats", rate: 16 },
  { image: car_3, name: "Mahindra Scorpio", route: "Delhi, Manali, Shimla", seats: "7 Seats", rate: 18 },
  { image: car_4, name: "Toyota Innova", route: "All India Permit", seats: "7 Seats", rate: 20 },
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
