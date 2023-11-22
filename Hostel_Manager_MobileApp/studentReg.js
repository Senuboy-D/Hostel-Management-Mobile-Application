import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const StudentRegistrationPage = () => {
  const navigation = useNavigation();

  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const registerStudent = async () => {
    try {
      await axios.post(
        "http://20.2.80.190:5100/api/students/register",
        {
          studentId,
          firstName,
          lastName,
          email,
          address,
          roomNo,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      showAlertAndNavigateToLogin();
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  const showAlertAndNavigateToLogin = () => {
    Alert.alert("Registration successful", "", [
      {
        text: "OK",
        onPress: () => navigation.navigate("LoginPage"),
      },
    ]);
  };

  const validateForm = () => {
    if (!studentId) {
      alert("Please enter a student ID");
      return;
    }

    if (!firstName) {
      alert("Please enter first name");
      return;
    }
    if (!lastName) {
      alert("Please enter last name");
      return;
    }

    if (!email) {
      alert("Please enter an email");
      return;
    }

    if (!address) {
      alert("Please enter an address");
      return;
    }

    if (!roomNo) {
      alert("Please enter a room number");
      return;
    }

    if (!password) {
      alert("Please enter a password");
      return;
    }

    if (password !== retypePassword) {
      alert("Passwords do not match");
      return;
    }

    registerStudent();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Student Registration</Text>
        <TextInput
          style={styles.input}
          onChangeText={setStudentId}
          value={studentId}
          placeholder="Student ID"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
          placeholder="First Name"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setLastName}
          value={lastName}
          placeholder="Last Name"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder="Address"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRoomNo}
          value={roomNo}
          placeholder="Room No"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRetypePassword}
          value={retypePassword}
          placeholder="Re-type Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.button} onPress={validateForm}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "white",
    marginBottom: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#001475",
    borderRadius: 20,
    width: 70,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
});

export default StudentRegistrationPage;
