import "../styles/sidebar.css"
import home from "../assets/sidebarassets/sidebar-home.png"
import history from "../assets/sidebarassets/sidebar-history.png"
import profile from "../assets/sidebarassets/sidebar-profile.png"
import qr from "../assets/sidebarassets/sidebar-qr.png"
import bharatLogo from "../assets/sidebarassets/bharat-connect-logo.png"

function Sidebar() {
  return (
    <div className ="sidebar-container">
    <div className ="sidebar-inner-container">
<ul className = "sidebar-list">
        <li><img src = {qr}/>Home</li>
        <li><img src = {qr}/>QR</li>
        <li><img src = {history}/>Histroy</li>
        <li><img src = {profile}/>Profile</li>
       </ul>
       <div className = "sidebar-down-para">
        <img src ={bharatLogo}/>
       
       </div>
    </div>
       
    </div>
  );
}

export default Sidebar;
