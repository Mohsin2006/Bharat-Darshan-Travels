import { useState } from 'react'
import { ArrowIcon, PinIcon, CalendarIcon, ClockIcon, UserIcon, PhoneIcon, CarIcon, ShieldIcon } from '../Icons/Icons'

const tripTypes = ["One Way", "Round Trip", "Airport", "Local"]

const today = new Date().toISOString().split("T")[0]

const Field = ({ icon: Icon, children }) => (
  <label className="hb-field">
    <Icon />
    {children}
  </label>
)

const HeroBooking = () => {
  const [trip, setTrip] = useState(tripTypes[0])
  const [result, setResult] = useState("")
  const [sending, setSending] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setSending(true)
    setResult("")
    const formData = new FormData(event.target)

    formData.append("trip_type", trip)
    formData.append("access_key", "4d5aad18-c75c-4266-aae2-8bc74d4cb7bc")
    formData.append("subject", "New ride booking (Home) - Bharat Darshan Travels")

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
    setSending(false)
  }

  return (
    <div className="hero-booking">
      <div className="container hero-booking-inner">
        <div className="hb-card">
          <div className="hb-head">
            <span className="hb-badge"><CarIcon /></span>
            <div>
              <h3>Book Your <span>Ride</span></h3>
              <p>Quick booking in under a minute</p>
            </div>
          </div>

          <div className="hb-tabs" role="tablist">
            {tripTypes.map(t => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={trip === t}
                className={trip === t ? "active" : ""}
                onClick={() => setTrip(t)}
              >{t}</button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="hb-form">
            <div className="hb-route">
              <Field icon={PinIcon}>
                <input type="text" name="pickup" placeholder={trip === "Airport" ? "Pickup (address or airport)" : "Pickup Location"} required />
              </Field>
              <Field icon={PinIcon}>
                <input type="text" name="drop" placeholder={trip === "Local" ? "Places to visit" : "Drop Location"} required />
              </Field>
            </div>

            <div className="hb-row">
              <Field icon={CalendarIcon}>
                <input type="date" name="date" min={today} aria-label="Pickup date" required />
              </Field>
              <Field icon={ClockIcon}>
                <input type="time" name="time" aria-label="Pickup time" required />
              </Field>
            </div>

            {trip === "Round Trip" && (
              <Field icon={CalendarIcon}>
                <input type="date" name="return_date" min={today} aria-label="Return date" required />
              </Field>
            )}

            <Field icon={CarIcon}>
              <select name="car_type" required defaultValue="">
                <option value="" disabled>Choose Car Type</option>
                <option>Toyota Fortuner</option>
                <option>Kia Seltos</option>
                <option>Mahindra Scorpio</option>
                <option>Toyota Innova</option>
              </select>
            </Field>

            <div className="hb-row">
              <Field icon={UserIcon}>
                <input type="text" name="name" placeholder="Your Name" required />
              </Field>
              <Field icon={PhoneIcon}>
                <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9+ ]{10,15}" required />
              </Field>
            </div>

            <button type="submit" className="btn hb-submit" disabled={sending}>
              {sending ? "Sending..." : <>Book Now <ArrowIcon /></>}
            </button>
            {result && <span className="hb-result">{result}</span>}
          </form>

          <p className="hb-note"><ShieldIcon /> No advance payment &middot; Free cancellation</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBooking
