import "./AppPromo.css"
import StoreButtons from "./StoreButtons"

const AppPromo = () => {
  return (
    <section className='app-promo'>
      <div className="checker"></div>
      <div className="container app-promo-inner">
        <div>
          <h2>Get The Free <span>Bharat Darshan</span> App</h2>
          <p>Book rides, track your driver live and pay securely, all from your phone.</p>
        </div>
        <StoreButtons />
      </div>
    </section>
  )
}

export default AppPromo
