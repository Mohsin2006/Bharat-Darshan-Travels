import { useState } from 'react'
import "./Booking.css"
import booking_img from "../../assets/gallery-3.jpeg"
import { PHONE, PHONE_LINK } from '../../data'
import { ArrowIcon, PhoneIcon, ShieldIcon, ClockIcon } from '../Icons/Icons'

const Booking = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "4d5aad18-c75c-4266-aae2-8bc74d4cb7bc")
    formData.append("subject", "New ride booking - Bharat Darshan Travels")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setResult("Booking request sent! We will call you shortly.")
        event.target.reset()
      } else {
        console.log("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.log("Error", error)
      setResult("Something went wrong. Please call us directly.")
    }
  }

  return (
    <section className='booking' id='booking'>
      <div className="booking-img" style={{ backgroundImage: `url(${booking_img})` }}>
        <div className="booking-img-card">
          <span><PhoneIcon /></span>
          <small>Need a ride now?</small>
          <a href={PHONE_LINK}>{PHONE}</a>
        </div>
      </div>

      <div className="booking-form-wrap">
        <h2>Book Your Ride</h2>
        <p>To book your ride please fill in the following details:</p>

        <form onSubmit={onSubmit} className="booking-form">
          <select name="car_type" required defaultValue="">
            <option value="" disabled>Choose Car Type</option>
            <option>Toyota Fortuner</option>
            <option>Kia Seltos</option>
            <option>Mahindra Scorpio</option>
            <option>Toyota Innova</option>
          </select>
          <select name="trip_type" required defaultValue="">
            <option value="" disabled>Trip Type</option>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Airport Transfer</option>
            <option>Local / City Tour</option>
          </select>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="text" name="pickup" placeholder="Pickup Location" required />
          <input type="text" name="drop" placeholder="Drop Location" required />
          <input type="date" name="date" required />
          <input type="time" name="time" required />
          <textarea name="message" rows="3" placeholder="Any special request (optional)"></textarea>
          <button type="submit" className="btn btn-dark">Book Now <ArrowIcon /></button>
          {result && <span className="booking-result">{result}</span>}
        </form>

        <div className="booking-features">
          <span><ShieldIcon />Safe & Verified Drivers</span>
          <span><ClockIcon />24/7 Availability</span>
        </div>
      </div>
    </section>
  )
}

export default Booking
