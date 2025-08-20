import { useState } from "react"
import "../../styles/qrcoderequest.css"
import downArrow from "../../assets/qrassets/rightarrow.png"

function QrCodeRequests({data}){
    const {image, description, subdes} = data
    const [expanded, setExpanded] = useState(false)

    return(
        <div className="qrcode-request-container">
            <div className="qrcode-request-top">
                <div className="qrcode-request-img">
                    <img src={image} width="75" height="75" alt="qr"/>
                </div>
                <div style = {{paddingLeft:"10px"}}>
                    <h2>{description}</h2>
                    <p>{subdes}</p>
                    <span className="request-date">Requested on 26.04.2024</span>
                </div>
            </div>

            <div 
                className="qrcode-request-bar" 
                onClick={()=>setExpanded(!expanded)}
            >
                <span className="accepted-text">✔ QR Request Accepted</span>
                <img 
                    src={downArrow} 
                    className={`arrow-icon ${expanded ? "rotate" : ""}`} 
                    width="18" 
                    height="18"
                />
            </div>

            {expanded && (
                <div className="qrcode-request-dropdown">
                    <div className="status">○ Awaiting Production</div>
                    <div className="status">○ Awaiting Dispatch</div>
                    <div className="status">○ Awaiting Delivery</div>
                </div>
            )}
            <hr/>
        </div>
    )
}
export default QrCodeRequests
