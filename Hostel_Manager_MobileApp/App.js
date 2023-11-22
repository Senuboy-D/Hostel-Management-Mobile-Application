import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import studentAttendance from "./studentAttendance";

import RegistrationPage from "./registration";
import LoginPage from "./login";
import RulesAndRegulationsPage from "./rulesAndReg";
import StudentWelcomePage from "./studentWelcome";

const Stack = createStackNavigator();

function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Welcome To Hostel Manager</Text>
        <Image
          style={styles.logo}
          source={{
            uri: "https://drive.google.com/uc?export=view&id=1CHQOCAJX4UQznKlOJR6kzsOIkXozE-P8",
          }}
        />
      </View>
      <View style={styles.bottom}>
        {
          <TouchableOpacity
            onPress={() => navigation.navigate("RulesAndRegulationsPage")}
          >
            <Text style={styles.rulesText}>Rules and Regulations</Text>
          </TouchableOpacity>
        }
        {
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("RegistrationPage")}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        }
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HostelManagerApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen
          name="RulesAndRegulationsPage"
          component={RulesAndRegulationsPage}
        />
        <Stack.Screen
          name="StudentWelcomePage"
          component={StudentWelcomePage}
        />
        <Stack.Screen name="studentAttendance" component={studentAttendance} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d47a1",
    justifyContent: "center",
  },
  top: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 150,
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: 125,
    marginTop: 30,
  },
  bottom: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  rulesText: {
    fontSize: 22,
    color: "white",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 18,
  },
  buttonText: {
    fontSize: 22,
    color: "white",
  },
});

export default HostelManagerApp;
