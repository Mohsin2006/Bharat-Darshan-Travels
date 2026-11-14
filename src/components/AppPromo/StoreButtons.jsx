import { PlayStoreIcon, AppleIcon } from "../Icons/Icons"

const StoreButtons = () => (
  <div className="store-btns">
    <a href="#" className="store-btn">
      <PlayStoreIcon />
      <span><small>Get it on</small>Google Play</span>
    </a>
    <a href="#" className="store-btn">
      <AppleIcon />
      <span><small>Download on the</small>App Store</span>
    </a>
  </div>
)

export default StoreButtons
