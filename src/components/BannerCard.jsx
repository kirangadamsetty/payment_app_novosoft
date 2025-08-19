import billImage from "../assets/homeassets/billpayment.png"
import "../styles/bannercard.css"

function BannerCard(){
    return(
         <div className  = "card-container">
        <div className = "card-content">
          <h2>Pay <span style = {{fontWeight:"bold"}}>$1/month*</span> of the <span style = {{fontWeight:"bold"}}>QPay POS Device</span></h2>
          <p>One device for accepting all modes of payments</p>
          <button>Download App Now!</button>
        </div>
        <img src = {billImage}/>
       </div>
    )
}
export default BannerCard