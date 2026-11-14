import { useEffect, useRef, useState } from 'react'
import "./Counters.css"
import counter_bg from "../../assets/gallery-4.jpeg"
import { CarIcon, RouteIcon, UsersIcon, StarIcon } from '../Icons/Icons'

const stats = [
  { icon: <CarIcon />, value: 120, suffix: "+", label: "Special Vehicles" },
  { icon: <RouteIcon />, value: 8500, suffix: "+", label: "Road Trips Done" },
  { icon: <UsersIcon />, value: 25000, suffix: "+", label: "Happy Travellers" },
  { icon: <StarIcon />, value: 98, suffix: "%", label: "Positive Reviews" },
]

const Counter = ({ value, start }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let frame
    const duration = 2000
    const begin = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return count.toLocaleString("en-IN")
}

const Counters = () => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className='counters' ref={ref} style={{ backgroundImage: `url(${counter_bg})` }}>
      <div className="container counters-grid">
        {stats.map(stat => (
          <div className="counter" key={stat.label}>
            <div className="counter-icon">{stat.icon}</div>
            <h3><Counter value={stat.value} start={visible} />{stat.suffix}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Counters
