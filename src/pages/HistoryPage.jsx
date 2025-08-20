import "../styles/historypage.css";
import filterIcon from "../assets/historypageassets/filtericon.png";
import timer from "../assets/historypageassets/historyicon.png";
import settleicon from "../assets/historypageassets/settleicon.png";
import { transitionsDetails } from "../utils/transitionsDetails"; // already has 100 dummy transactions
import { useState, useRef } from "react";
import Modal from "../components/Modal";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const [showModal, setShowModal] = useState(false);

  // Create a ref for the element you want to convert to PDF
  const tableRef = useRef(null);

  const indexOfLast = currentPage * transactionsPerPage;
  const indexOfFirst = indexOfLast - transactionsPerPage;
  const currentTransactions = transitionsDetails.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(transitionsDetails.length / transactionsPerPage);

  const handleDownloadPdf = () => {
    const input = tableRef.current;
    if (input) {
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("settlement-statement.pdf");
      });
    }
  };

  const renderPagination = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`page-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - 2 ||
        i === currentPage + 2
      ) {
        pages.push(<span key={i} className="dots">...</span>);
      }
    }

    return (
      <div className="pagination-container">
        <button
          className="page-btn"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pages}
        <button
          className="page-btn"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="history-page-container">
      <div className="history-page-heading">
        <h2>Settlement History</h2>
        <button
          style={{ width: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}
          onClick={handleDownloadPdf}
        >
          Download statement
        </button>
      </div>

      <div className="search-container">
        <input type="search" placeholder="search" />
        <div className="filter-icon-container">
          <img src={filterIcon} />
        </div>
      </div>

      <div className="settle-now-container" style={{ paddingLeft: "18px", paddingRight: "18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={timer} />
          <p>
            Today’s total collection will be auto-settled by{" "}
            <span className="inner-span">08:00AM, 23rd Oct’22</span> Tomorrow.
          </p>
        </div>
        <button onClick={() => setShowModal(true)}>
          <img src={settleicon} alt="settle" /> Settle Now
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Manage QR/POS</h2>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <div>
              <p><b>Today's Total Collection</b></p>
              <p style={{ color: "#42794A" }}>Already Settled</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <h3>₹1,023</h3>
              <p>₹100</p>
            </div>
          </div>
          <h4 style={{ color: "#999", fontSize: "14px", marginBottom: "10px" }}>SETTLEMENT CALCULATION</h4>
          <p>Amount yet to be settled <span style={{ float: "right" }}>IBRAHIM MOHAMMEDALI</span></p>
          <p>Past pending amount <span style={{ float: "right" }}>092141241127</span></p>
          <p>Charges <span style={{ float: "right" }}>07, Aug 2024</span></p>
          <div className="settle-footer" >
            <div>
              <p>Tap ‘Settle Now’ to instantly get settlements in your bank account.</p>
              <p style={{ color: "#42794A" }}>Settle Now is Chargeable</p>
            </div>
            <button>Settle Now</button>
          </div>
        </Modal>
      )}

      <div className="transation-table" ref={tableRef}>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date & Time</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((txn, idx) => (
              <tr key={idx}>
                <td className="table-data-name">{txn.name}</td>
                <td className="table-data-name">{txn.datetime}</td>
                <td className="table-data-name2">{txn.account}</td>
                <td className="table-data-name">{txn.amount}</td>
                <td className="status-button">
                  <span className={`status-badge ${txn.status.toLowerCase()}`}>
                    {txn.status}
                  </span>
                </td>
                <td className="details-link">{txn.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderPagination()}
    </div>
  );
}

export default HistoryPage;