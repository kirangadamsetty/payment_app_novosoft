import "../styles/kyc.css"
import qr from "../assets/home-qr.png"
import graph from "../assets/graph.png"
function HomeKycSection(){
    return(
      <div style = {{display:"flex", gap:"18px", margin:"20px 0px",flexWrap:"wrap"}}>
        <div className ="kyc-container">
           <p>PROFILE</p>
           <div style = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
           <img src = {graph} className = "qr-image"/>
           <div>
            <h3>Complete your profile</h3>
            <ul>
            
                <li>Personal KYC</li>
                <li>Company KYC</li>
                <li>Onboarding details</li>
            </ul>
           </div>
           </div>

           <hr/>
             <button>Next</button>
        </div>
       <div className ="kyc-container">
           <p>PROFILE</p>
           <div style = {{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
           <img src = {qr} className = "qr-image"/>
           <div>
            <h3>Complete your profile</h3>
            <ul>
            
                <li>Personal KYC</li>
                <li>Company KYC</li>
                <li>Onboarding details</li>
            </ul>
           </div>
           </div>

           <hr/>
             <button>Next</button>
        </div>
      </div>
    )
}
export default HomeKycSection