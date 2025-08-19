
import rightArrow from "../../assets/qrassets/rightarrow.png"
import "../../styles/activeqr.css"
function ActiveQrCode({data}){
    const {image, code, description, subdes} = data
    return(
        <>
       <div className = "activeqrcodecontainer" style = {{display:"flex"}}>
       <div  style = {{display:"flex", gap:"10px", width:"306px"}}>
       <div style = {{border: "1.33px solid #EEEEEE" , display:"flex", alignItems:"center"}}>
 <img src = {image} width = "75" height = "75"/>
       </div>

          <div>
            <h2>{code}</h2>
            <h3>{description}</h3>
            <p>{subdes}</p>
          </div>
       </div>
         
          <img src  = {rightArrow} width="20" height="20"/>
       </div>
       <hr/>
     
       </>
    )
}
export default ActiveQrCode





