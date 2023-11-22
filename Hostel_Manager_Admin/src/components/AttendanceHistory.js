import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AttendanceHistory.css";

function AttendanceHistory(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAttendanceRecords = async (studentId, dataCount) => {
    try {
      console.log(studentId, dataCount);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://20.2.80.190:5100/api/students/${searchTerm}?dataCount=${dataCount}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAttendanceRecords(response.data.attendanceRecords);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  useEffect(() => {
    fetchAttendanceRecords(props.studentId, currentPage);
  }, [searchTerm, currentPage]);

  const handleSearch = (event) => {
    event.preventDefault();
    // Add any additional search functionality here
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
    <div className="attendance-history">
      <h2>Attendance History</h2>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" style={{ backgroundColor: "#1e90ff" }}>
          Search
        </button>
      </form>
      {/* render attendance history table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}>Date</th>
            <th style={cellStyle}>action</th>
          </tr>
        </thead>
        <tbody>
          {attendanceRecords.map((record) => (
            <tr key={record._id}>
              <td style={cellStyle}>
                {new Date(record.timestamp).toLocaleDateString()}
              </td>
              <td style={cellStyle}>{record.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
