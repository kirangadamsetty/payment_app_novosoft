import "../styles/sidebar.css";
import { Link, useLocation } from "react-router-dom";
import home from "../assets/sidebarassets/sidebar-home.png";
import history from "../assets/sidebarassets/sidebar-history.png";
import profile from "../assets/sidebarassets/sidebar-profile.png";
import qr from "../assets/sidebarassets/sidebar-qr.png";
import bharatLogo from "../assets/sidebarassets/bharat-connect-logo.png";

function Sidebar() {
  const location = useLocation(); 

  const menuItems = [
    { path: "/", label: "Home", icon: home },
    { path: "/qrpage", label: "QR", icon: qr },
    { path: "/history", label: "History", icon: history },
    { path: "/profile", label: "Profile", icon: profile },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-inner-container">
        <ul className="sidebar-list">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <img src={item.icon} alt={item.label} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sidebar-down-para">
          <img src={bharatLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
