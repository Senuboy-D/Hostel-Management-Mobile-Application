import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const AttendanceInterface = () => {
  const navigation = useNavigation();

  const apiCall = async (buttonName) => {
    try {
      const qrToken = await AsyncStorage.getItem("qrCodeData");
      const jwt = await AsyncStorage.getItem("jwt");
      const timeStamp = new Date().toISOString();

      const response = await axios.post(
        "http://20.2.80.190:5100/api/guardian/scanQR",
        {
          buttonName,
          qrToken,
          timeStamp,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      console.log(response.data);
      Alert.alert(
        "Success",
        "Attendance taken successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("StudentWelcomePage"),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <AntDesign name="checkcircle" size={85} color="green" />
          <TouchableOpacity
            style={styles.checkInButton}
            onPress={() => apiCall("check-IN")}
          >
            <Text style={styles.buttonText}>IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <MaterialIcons name="cancel" size={85} color="#b92e34" />
          <TouchableOpacity
            style={styles.checkOutButton}
            onPress={() => apiCall("check-OUT")}
          >
            <Text style={styles.buttonText}>OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#612CE8",
    paddingHorizontal: 16,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
    color: "white",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
  },
  checkInButton: {
    backgroundColor: "green",
    borderRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  checkOutButton: {
    backgroundColor: "#b92e34",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AttendanceInterface;
