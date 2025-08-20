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

    const handleDownload = async () => {
        try {
          const response = await fetch(mainqr);
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'qr-code.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error("Error downloading the QR code:", error);
        }
      };
      
    const handleCopy = async () => {
        const upiId = "9876543210@qpay";
        try {
          await navigator.clipboard.writeText(upiId);
          alert("UPI ID copied to clipboard!");
        } catch (error) {
          console.error("Failed to copy UPI ID:", error);
          const tempInput = document.createElement('input');
          tempInput.value = upiId;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          alert("UPI ID copied to clipboard!");
        }
    };

    return(
        <div className ="qr-container">
            <h1>Manage QR/POS</h1>
            <div style ={{display:"flex", gap:"18px"}}>
                
                <div className = "qr-box-container" style = {{padding:"10px 0px"}}>
                    <div style = {{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
                        <img src = {qrpagelogo} className = "qr-page-logo"/>
                        <img src = {mainqr} className ="main-qr-image" />
                        <h2>UPI ID : 9876543210@qpay <img src = {copy} onClick={handleCopy} style={{ cursor: "pointer" }}/></h2>
                        <p>Ibrahim Mohammedali</p>
                        <div style = {{display:"flex",gap:"20px"}}>
                            <button className = "main-qr-button" onClick={handleDownload}><img src = {download} className = "icons"/>Download</button>
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