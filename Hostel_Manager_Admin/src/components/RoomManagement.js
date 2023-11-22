import React, { useState } from "react";
import axios from "axios";

function RoomManagement() {
  const [roomNumber, setRoomNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [updateStudentId, setUpdateStudentId] = useState("");
  const token = localStorage.getItem("token");
  const [successMessage, setSuccessMessage] = useState("");

  const addRoom = async () => {
    try {
      const response = await axios.post(
        "http://20.2.80.190:5100/api/guardian/changeStudentRoom",
        {
          studentId,
          roomNo: roomNumber,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error adding room:", error);
    }
  };

  const updateRoom = async () => {
    try {
      const response = await axios.post(
        "http://20.2.80.190:5100/api/guardian/changeStudentRoom",
        {
          studentId: updateStudentId,
          roomNo: roomId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setSuccessMessage("Room changed successfully");
    } catch (error) {
      console.log("adsd" + updateStudentId, roomId);
      console.error("Error updating room:", error.response.data);
      setSuccessMessage("");
    }
  };

  return (
    <div className="room-management">
      <div className="update-room-container">
        <h2>Update Room</h2>
        <label style={{ paddingRight: "15px" }} htmlFor="room-id">
          Room ID
        </label>
        <input
          id="room-id"
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <label style={{ paddingRight: "15px" }} htmlFor="update-student-id">
          Student ID
        </label>
        <input
          id="update-student-id"
          type="text"
          value={updateStudentId}
          onChange={(e) => setUpdateStudentId(e.target.value)}
        />
        <p style={{ color: "green" }}>{successMessage}</p>
        <button
          style={{
            backgroundColor: "#270075",
            border: "none",
            borderRadius: "3px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "170px",
            marginTop: "20px",
            padding: "10px",
            width: "10%",
          }}
          onClick={updateRoom}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default RoomManagement;
