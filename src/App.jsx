import Header from "./components/Header.jsx"
import "./App.css"
import Sidebar from "./components/Sidebar.jsx"
import QrPage from "./Pages/QrPage.jsx"
import {createBrowserRouter, Outlet} from "react-router-dom"
import Home from "./pages/Home.jsx"
import HistoryPage from "./pages/HistoryPage.jsx"
import Profile from "./pages/Profile.jsx"
import ErrorElement from "./utils/ErrorElement.jsx"
function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
         
        }}
      >
        <div
  className="main-layout"
  style={{
    display: "flex",
    gap: "30px",
    maxWidth: "1400px",
    width: "100%",
    padding: "0 20px",   // ✅ default left & right spacing
    boxSizing: "border-box",
  }}
>
  <Sidebar />
  <div style={{ flexGrow: 1 }}>
    <Outlet />
  </div>
</div>

      </div>
    </div>
  )
}


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
     errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home />,errorElement: <ErrorElement /> },
      { path: "/qrpage", element: <QrPage /> ,errorElement: <ErrorElement />},
      { path: "/profile", element: <Profile /> ,errorElement: <ErrorElement />},
      { path: "/history", element: <HistoryPage />,errorElement: <ErrorElement /> },
    ],
   
  },
]);



