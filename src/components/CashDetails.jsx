import "../styles/cashdetails.css";
import { useNavigate } from "react-router-dom";

function CashDetails({ data }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (data.button === "Settle Now") {
      navigate("/history"); 
    } else {
      console.log("Button clicked:", data.button);
    }
  };

  return (
    <div className="cash-details-container">
      <p>{data.name}</p>
      <h3>{data.total}</h3>
      <hr />
      {data.transitions.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              padding: "10px 0px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <h2>{item.date}</h2>
            </div>
            <h3>{item.price}</h3>
          </div>
        );
      })}
      <button onClick={handleButtonClick}>{data.button}</button>
    </div>
  );
}

export default CashDetails;
