
import "../../styles/servicescards.css"
function ServicesCards({data}){
    const {title, info} = data
    return(
        <div className = "service-card-container">
             <h2>{title}</h2>
             <div style = {{display:"flex"}}>
                {info &&
                    info.map((val, index)=>{
                        return <div key = {index} className = "services-image-container">
                           <div className ="services-inner-image-container">
 <img src = {val.image}/>
                           </div>
                           
                            <p>{val.description}</p>
                        </div>
                    })
                }
             </div>
        </div>
    ) 
}
export default ServicesCards