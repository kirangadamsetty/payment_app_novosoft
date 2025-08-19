import Header from "./components/Header.jsx"
import "./App.css"
import Sidebar from "./components/Sidebar.jsx"
import QrPage from "./Pages/QrPage.jsx"
import Home from "./pages/Home.jsx"
import HistoryPage from "./pages/HistoryPage.jsx"
import Profile from "./pages/Profile.jsx"
function App(){
  
  return(
     <div>
     <Header/>
     <div style = {{display:"flex", gap:"30px"}}>
<Sidebar/>
<div style = {{flexGrow:1}}>
{/* <Home/> */}
{/* <QrPage/> */}
{/* <Profile/> */}
<HistoryPage/>
</div>
     </div>
     
     </div>

  )
}
export default App