import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import MonthlyBill from "./studentPayment";
import QRCodeScannerComponent from "./qrScanner";

const StudentWelcomePage = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <Image
        style={styles.icon}
        source={{
          uri: "https://drive.google.com/uc?id=1MhZOwuAUhkyuT_9L32gbnPK3Ff3nB3nd",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("StudentPayment")}
      >
        <Text style={styles.buttonText}>MONTHLY BILL</Text>
      </TouchableOpacity>
      <Image
        style={styles.icon}
        source={{
          uri: "https://drive.google.com/uc?id=1sedyVTWR1cJdegyO7yl_iTHEqJBcjb9G",
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate("QRCodeScannerComponent")}
      >
        <Text style={styles.buttonText}>ATTENDANCE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#612CE8",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 55,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

const ParentComponent = () => {
  const [currentPage, setCurrentPage] = useState("StudentWelcomePage");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentPage === "StudentWelcomePage" && (
        <StudentWelcomePage navigate={handleNavigate} />
      )}
      {currentPage === "StudentPayment" && <MonthlyBill />}
      {currentPage === "AttendanceInterface" && <AttendanceInterface />}
      {currentPage === "QRCodeScannerComponent" && <QRCodeScannerComponent />}
    </>
  );
};

export default ParentComponent;
