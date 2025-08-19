import "../styles/usersData.css"

function UsersData({data}){
    return(
       <div className = "user-card-container">
            <h2>{data.count}</h2>
            <p>{data.name}</p>
       </div>
    )
}
export default UsersData