import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserSearch.css";

const UserSearch = () => {
  const [studentId, setstudentId] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setstudentId(event.target.value);
  };
  const handleLogin = async () => {
    // Your login or sign-up logic here
    // After a successful login or sign-up, save the token to the localStorage
    const token = localStorage.getItem("token");
    localStorage.setItem("token", token);
  };

  const handleSearch = async () => {
    try {
      handleLogin();
      console.log(process.env.SERVER_IP);
      console.log(studentId);
      const response = await axios.get(
        `http://20.2.80.190:5100/api/students/getStudentDetailsByStudentID/${studentId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log("API response:", response.data); // Keep this line to log the API response
      setSearchResults([response.data.student]); // Wrap the student object in an array
    } catch (error) {
      console.error("Error searching for students:", error);
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
    <div className="user-search">
      <h2>Search Students</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter student name or ID"
          value={studentId}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {Array.isArray(searchResults) &&
          searchResults.map((student) => (
            <div key={student._id} className="student-details">
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={cellStyle}>Student ID</th>
                    <th style={cellStyle}>Email</th>
                    <th style={cellStyle}>First Name</th>
                    <th style={cellStyle}>Last Name</th>
                    <th style={cellStyle}>Room No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={cellStyle}>{student.studentId}</td>
                    <td style={cellStyle}>{student.email}</td>
                    <td style={cellStyle}>{student.firstName}</td>
                    <td style={cellStyle}>{student.lastName}</td>
                    <td style={cellStyle}>{student.roomNo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserSearch;
