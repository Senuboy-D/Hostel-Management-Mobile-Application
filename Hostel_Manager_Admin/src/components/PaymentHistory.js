import React, { useState } from "react";
import "./PaymentHistory.css";
import axios from "axios";

function PaymentHistory(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentHistory, setPaymentHistory] = useState([]);

  const handleSearch = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://20.2.80.190:5100/api/payments/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPaymentHistory(response.data.payments);
    } catch (error) {
      console.error("Error fetching payment history:", error.response.data);
    }
  };

  const tableStyle = {
    borderCollapse: "separate",
    borderSpacing: "3px",
  };

  const cellStyle = {
    padding: "5px",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
  };

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <table className="payment-history-table" style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>Amount</th>
            <th style={cellStyle}>Payer Type</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment, index) => (
            <tr key={index}>
              <td style={cellStyle}>
                {new Date(payment.datePaid).toLocaleDateString()}
              </td>
              <td style={cellStyle}>{payment.amount}</td>
              <td style={cellStyle}>{payment.payerType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistory;
