
import rightArrow from "../../assets/qrassets/rightarrow.png"

function QrCodeRequests({data}){
    const {image, code, description, subdes} = data
    return(
        <>
       <div style = {{display:"flex"}}>
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
         
       
       </div>
       <select>
        <option>QR Request Accepted</option>
        <option>Awaiting Production</option>
        <option>Awaiting Dispatch</option>
        <option>Awaiting Delivery</option>
       </select>
       <hr/>
     
       </>
    )
}
export default QrCodeRequests





