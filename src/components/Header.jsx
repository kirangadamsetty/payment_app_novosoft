import "../styles/header.css"
import logo from "../assets/logo.png"
import profile from "../assets/profile.jpg"
import downArrow from "../assets/downArrow.png"
function Header(){
    return(
        <div className = "header">
              <div className = "header-container">
                <img src = {logo} className = "logo"/>
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
