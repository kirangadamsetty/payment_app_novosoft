import BannerCard from "../components/BannerCard"
import "../styles/home.css"
import UsersData from "../components/UsersData.jsx"
import HomeKycSection from "../components/HomeKycSection.jsx"
import CashDetails from "../components/CashDetails.jsx"
  const accountHoldersData = [
    {
      name : "Account Holders",
      count : "1.5k"
    },
     {
      name : "Account Holders",
      count : "1.5k"
    },
     {
      name : "Account Holders",
      count : "1.5k"
    },
     {
      name : "Account Holders",
      count : "1.5k"
    }
  ]
  const homecashDetails = [
    {
        name :"Settlement",
        total : "₹1,23,816.19",
        transitions : [
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            },
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            },
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            }

        ],
        button  : "Settle Now"
        },
        {
        name :"Settlement",
        total : "₹1,23,816.19",
        transitions : [
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            },
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            },
            {
                name : "Ibrahim",
                date : "23 Oct, 09:15 AM",
                price : "+₹90"
            }

        ],
        button  : "View All"
        }

  ]

function Home(){
  
    return(
     <div className = "home-container">
       <BannerCard/>
       <div style = {{display:"flex", gap:"18px", margin:"20px 0px", flexWrap:"wrap"}}>
 {
        accountHoldersData.map((data)=>{
            return <UsersData data = {data}/>
        })
       }
       </div>
       
            <HomeKycSection/>
     
        <div style = {{display:"flex", gap:"18px", margin:"20px 0px", flexWrap:"wrap"}}>
            {
                homecashDetails.map((val, index)=>{
                    return <CashDetails key = {index} data = {val}/>
                })
            }
        </div>
     </div>
    )
}
export default Home