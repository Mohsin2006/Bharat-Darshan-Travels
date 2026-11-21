import { PHONE } from "../data"

const WHATSAPP_NUMBER = PHONE.replace(/\D/g, "")

const LABELS = {
  name: "Name",
  phone: "Phone",
  trip_type: "Trip Type",
  car_type: "Car Type",
  pickup: "Pickup",
  drop: "Drop",
  date: "Date",
  time: "Time",
  return_date: "Return Date",
  message: "Special Request",
}

const formatDate = (value) => {
  const [y, m, d] = value.split("-")
  return y && m && d ? `${d}-${m}-${y}` : value
}

const formatTime = (value) => {
  const [h, min] = value.split(":").map(Number)
  if (Number.isNaN(h) || Number.isNaN(min)) return value
  const suffix = h >= 12 ? "PM" : "AM"
  return `${h % 12 || 12}:${String(min).padStart(2, "0")} ${suffix}`
}

const formatValue = (key, value) => {
  if (key === "date" || key === "return_date") return formatDate(value)
  if (key === "time") return formatTime(value)
  return value
}

/**
 * Builds a readable booking summary from the form data and opens WhatsApp
 * chat with the business number, pre-filled with that summary.
 * Must be called synchronously inside the submit handler (before any await)
 * so browsers treat it as a user action and don't block the new tab.
 */
export const sendBookingToWhatsApp = (formData, title = "New Ride Booking") => {
  const lines = Object.keys(LABELS)
    .map(key => {
      const value = String(formData.get(key) ?? "").trim()
      return value ? `*${LABELS[key]}:* ${formatValue(key, value)}` : null
    })
    .filter(Boolean)

  const text = [`*${title} - Bharat Darshan Travels*`, "", ...lines].join("\n")
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

  window.open(url, "_blank", "noopener,noreferrer")
}
