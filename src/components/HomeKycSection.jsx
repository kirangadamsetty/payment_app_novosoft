import "../styles/kyc.css"
import qr from "../assets/home-qr.png"
import graph from "../assets/graph.png"

function HomeKycSection() {
  return (
    <div style={{ display: "flex", gap: "18px", margin: "20px 0px", flexWrap: "wrap" }}>
      
      <div className="kyc-container">
        <p>PROFILE</p>
        <div className="kyc-top">
          <img src={graph} className="kyc-graph" alt="progress" />
          <div className="kyc-text">
            <h3>Complete your profile</h3>
            <ul>
              <li>Personal KYC</li>
              <li>Company KYC</li>
              <li>Onboarding details</li>
            </ul>
          </div>
        </div>
        <hr />
        <button>Next</button>
      </div>

      <div className="kyc-container">
        <p>QR</p>
        <div className="kyc-top">
          <img src={qr} className="kyc-graph" alt="qr" />
          <div className="kyc-text">
            <h3>Order QR</h3>
            <ul>
              <li>Receive Payment</li>
              <li>Order new QRs</li>
              <li>Download QR</li>
            </ul>
          </div>
        </div>
        <hr />
        <button>View more</button>
      </div>

    </div>
  )
}
export default HomeKycSection
