import "../styles/qrpage.css"
import mainqr from  "../assets/qrassets/mainqr.png"
import qrpagelogo from "../assets/qrassets/qrpagelogo.png"
import download from "../assets/qrassets/download.png"
import share from "../assets/qrassets/share.png"
import QrCodeRequests from "../components/qrpagecomponents/QrCodeRequests.jsx"
import copy from "../assets/qrassets/copy.png"
import {useState} from "react"
import ActiveQrCode from "../components/qrpagecomponents/ActiveQrCode.jsx"

const activeqrdata = [
  { image: mainqr, code: "Q201946579", description: "All Marketing Sales-MS1903041155331648980231", subdes: "Terminal" },
  { image: mainqr, code: "Q201946579", description: "All Marketing Sales-MS1903041155331648980231", subdes: "Terminal" },
  { image: mainqr, code: "Q201946579", description: "All Marketing Sales-MS1903041155331648980231", subdes: "Terminal" },
  { image: mainqr, code: "Q201946579", description: "All Marketing Sales-MS1903041155331648980231", subdes: "Terminal" },
]

const qrcodeData = [
  { image: mainqr, description: "All Marketing Sales", subdes: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.", codes: "Requested on 26.04.202" },
  { image: mainqr, description: "All Marketing Sales", subdes: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.", codes: "Requested on 26.04.202" },
]

function QrPage(){
    const [buttonStatus, setButtonStatus] = useState({
        activeButton  : true,
        qrcodeButton : false
    })

    const handleButtonClick = ()=>{
        setButtonStatus({
            activeButton  : !buttonStatus.activeButton,
            qrcodeButton : !buttonStatus.qrcodeButton
        })
    }

    return(
        <div className ="qr-container">
            <h1>Manage QR/POS</h1>
            <div style ={{display:"flex", gap:"18px"}}>
                
                <div className = "qr-box-container">
                    <div style = {{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
                        <img src = {qrpagelogo} className = "qr-page-logo"/>
                        <img src = {mainqr} className ="main-qr-image" />
                        <h2>UPI ID : 9876543210@qpay <img src = {copy} /></h2>
                        <p>Ibrahim Mohammedali</p>
                        <div style = {{display:"flex",gap:"20px"}}>
                            <button className = "main-qr-button"><img src = {download} className = "icons"/>Download</button>
                            <button className = "main-qr-button"><img src = {share} className = "icons"/>Share</button>
                        </div>
                    </div>
                </div>

                <div className = "qr-box-container qr-right-container">
                    <div>
                        <div className = "qr-box-inner-container" style = {{border:"1px solid #42794A",padding:"4px",marginBottom:"10px",borderRadius:"4px",display:"flex"}}>
                            <button onClick ={handleButtonClick} className = {`switch-button ${buttonStatus.activeButton ? "green-button" : "white-button"}`}>Active QR Codes</button>
                            <button onClick = {handleButtonClick} className =  {`switch-button ${buttonStatus.qrcodeButton ? "green-button" : "white-button"}`}>QR Code Requests</button>
                        </div>

                        <div className="qr-toggle-content">
                            {buttonStatus.qrcodeButton ? 
                                qrcodeData.map((data, index)=>(
                                    <QrCodeRequests key = {index} data = {data}/>
                                ))
                                :
                                activeqrdata.map((data, index)=>(
                                    <ActiveQrCode data = {data} key  ={index}/>
                                ))
                            }
                        </div>
                    </div>

                    <button className ="active-qr-code-page-button">Request more QR Codes</button>
                </div>
            </div>
        </div>
    )
}
export default QrPage
