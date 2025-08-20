import ReactDOM from "react-dom";
import "../styles/modal.css";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") 
  );
}

export default Modal;
