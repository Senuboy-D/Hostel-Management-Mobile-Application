import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import StudentWelcomePage from "./studentWelcome";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  return showWelcomePage ? (
    <StudentWelcomePage />
  ) : (
    <StudentLoginPage onLoginSuccess={() => setShowWelcomePage(true)} />
  );
};

const StudentLoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    if (email && email.includes("@") && password && password.length >= 6) {
      try {
        const response = await axios.post(
          "http://20.2.80.190:5100/api/students/login",
          {
            email,
            password,
          }
        );

        if (response.data && response.data.token) {
          await AsyncStorage.setItem("jwt", response.data.token);
          onLoginSuccess();
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during login");
      }
    } else {
      alert("Please enter a valid email and password (minimum 6 characters)");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.icon}
            source={{
              uri: "https://drive.google.com/uc?id=1dDiraS08JrdCfERjNFMPueZPPgqInhHD",
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#612CE8",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    padding: 20,
    width: "100%",
    maxWidth: 400,
  },
  imageContainer: {
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
  },
  icon: {
    width: 225,
    height: 225,
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginBottom: 20,
    color: "white",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});

export default App;
