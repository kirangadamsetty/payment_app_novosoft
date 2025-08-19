import "../../styles/profilecards.css"
import rightArrow from "../../assets/profilepageassets/profilerightarrow.png"
function ProfileCards({data}){
    return(
 <div className = "profile-card"> 
 <div style = {{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
 <div className = "profile-page-image-container">
  <img src = {data.image} />
 </div>
 
 <img src  = {rightArrow}/>
 </div>

  
    <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
 </div>
    )
}
export default ProfileCards