import billImage from "../assets/homeassets/billpayment.png"
import "../styles/bannercard.css"

function BannerCard() {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2>
          Pay <span>₹1/month*</span> for the <span>QPay POS Device</span>
        </h2>
        <p>One device for accepting all modes of payments</p>
        <button>Download App Now!</button>
      </div>

      <div className="card-image">
        <img src={billImage} alt="bill" />
      </div>
    </div>
  )
}

export default BannerCard
