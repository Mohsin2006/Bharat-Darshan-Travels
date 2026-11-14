import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Cars from './components/Cars/Cars'
import Booking from './components/Booking/Booking'
import Drivers from './components/Drivers/Drivers'
import AppPromo from './components/AppPromo/AppPromo'
import Counters from './components/Counters/Counters'
import Testimonials from './components/Testimonials/Testimonials'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About setPlayState={setPlayState} />
      <Cars />
      <Booking />
      <Drivers />
      <AppPromo />
      <Counters />
      <Testimonials />
      <News />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
