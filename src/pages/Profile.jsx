import BannerCard from "../components/BannerCard"
import "../styles/profile.css"
import ProfileCards from "../components/profilepagecomponents/ProfileCards"
import img1 from "../assets/profilepageassets/profileimage1.png"
import img2 from "../assets/profilepageassets/profileimage2.png"
import img3 from "../assets/profilepageassets/profileimage3.png"
import img4 from "../assets/profilepageassets/profileimage4.png"
import services1 from "../assets/profilepageassets/profileservicesimage1.png"
import services2 from "../assets/profilepageassets/profileservicesimage2.png"
import services3 from "../assets/profilepageassets/profileservicesimage3.png"
import services4 from "../assets/profilepageassets/profileservicesimage4.png"
import services5 from "../assets/profilepageassets/profileservicesimage5.png"
import ServicesCards from "../components/profilepagecomponents/ServicesCards"

const profilecarddata = [
    {
        title : "XXXX 9820",
        description: "ICICI Bank | Chennai Egmore Branch",
        image : img1
    },
    {
        title : "Business Profile",
        description: "View and edit your business details",
        image : img2
    },
    {
        title : "KYC Verification",
        description: "Unlock exclusive benefits with KYC",
        image : img3
    },
    {
        title : "Order QR",
        description: "Get paid, manage & order QRs",
        image : img4
    }
]

const profilepageservicesData = [
    {
         title : "Business Services",
         info : [
            {
                image : services1,
                description : "Smart Speaker "
            },{
                image : services2,
                description : "POS Machine"
            }
         ]
    },
     {
         title : "Manage Business",
         info : [
            {
                image : services3,
                description : "Payment Setting"
            },{
                image : services4,
                description : "Manage Staff"
            },{
                image : services5,
                description : "Change Language"
            }
         ]
    }
]
function Profile(){
    return(
        <div className = "profile-page-container">
            <BannerCard/>
            <div className = "profile-page-card-container" style ={{margin:"20px 0px"}}>
                {
                    profilecarddata.map((item, index)=>{
                        return <ProfileCards key = {index} data = {item}/>
                    })
                }
            </div>
            <div className = "profile-page-card-container" style ={{margin:"20px 0px"}}>
                {
                    profilepageservicesData.map((data, index)=>{
                        return <ServicesCards key  ={index} data = {data}/>
                    })
                }
            </div>
       </div>
    )
}
export default Profile