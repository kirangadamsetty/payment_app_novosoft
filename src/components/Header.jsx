import "../styles/header.css"
import logo from "../assets/logo.png"
import profile from "../assets/profile.jpg"
import {useNavigate} from "react-router-dom"
import downArrow from "../assets/downArrow.png"
function Header(){
    const navigate = useNavigate()
    return(
        <div className = "header">
              <div className = "header-container">
              <div onClick  = {()=>navigate("/")}>
<img src = {logo} className = "logo" />
              </div>
                
                <div className = "profile-container">
                    <img src = {profile} alt = "profile" className = "profile"/>
                    <div>
                        <p className = "profile-greet">Hello</p>
                        <h3 className = "profile-name">Thomas Shelbey</h3>
                        
                    </div>
                    <img src  = {downArrow} />
                </div>
              </div>
        </div>
    )
}
export default Header
