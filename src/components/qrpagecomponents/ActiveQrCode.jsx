import rightArrow from "../../assets/qrassets/rightarrow.png"
import "../../styles/activeqr.css"

function ActiveQrCode({data}){
    const {image, code, description, subdes} = data
    return(
        <>
            <div className="activeqrcodecontainer">
                <div className="activeqr-left">
                    <div className="activeqr-imgbox">
                        <img src={image} width="75" height="75"/>
                    </div>
                    <div className="activeqr-content">
                        <h2>{code}</h2>
                        <h3>{description}</h3>
                        <p>{subdes}</p>
                    </div>
                </div>
                <img src={rightArrow} width="20" height="20" className="activeqr-arrow"/>
            </div>
            <hr/>
        </>
    )
}
export default ActiveQrCode
