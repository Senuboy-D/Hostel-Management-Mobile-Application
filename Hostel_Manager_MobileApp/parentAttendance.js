import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const StudentAttendanceRecord = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const fetchAttendanceRecords = async () => {
      try {
        const jwt = await AsyncStorage.getItem("parent_jwt");
        const decoded = jwtDecode(jwt);
        console.log("Decoded:", decoded);

        const response = await axios.get(
          `http://20.2.80.190:5100/api/students/parent/${decoded.id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        if (response.data && response.data.attendanceRecords) {
          setAttendanceRecords(response.data.attendanceRecords);
          setStudentId(response.data.studentId);
        }
      } catch (error) {
        console.error("Error fetching attendance records:", error);
      }
    };

    fetchAttendanceRecords();
  }, []);

  return (
    <View style={styles.container}>
      {studentId && (
        <Text style={styles.studentIdText}>Student ID: {studentId}</Text>
      )}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {attendanceRecords.map((record, index) => (
          <View
            key={index}
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  record.action === "check-IN" ? "green" : "#8B0000",
              },
            ]}
          >
            <Text style={styles.statusLabel}>
              Time: {new Date(record.timestamp).toLocaleString()}
            </Text>
            <Text style={styles.statusLabel}>Status: {record.action}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1e90ff",
  },
  studentIdText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    paddingTop: 45,
    color: "white",
  },
  scrollView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  statusContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  statusLabel: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default StudentAttendanceRecord;
