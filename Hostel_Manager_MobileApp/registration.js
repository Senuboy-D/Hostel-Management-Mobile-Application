import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import StudentRegistrationPage from './studentReg';
import ParentRegistrationPage from './parentReg';

function RegistrationPage() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://drive.google.com/uc?export=view&id=1IrNKNqXEmkkW1iMiHoUZHt62fLnVpvAE',
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('StudentRegistrationPage')}
            >
                <Text style={styles.buttonText}>STUDENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ParentRegistrationPage')}
            >
                <Text style={styles.buttonText}>PARENT</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function MyApp() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{ headerShown: false }} />
            <Stack.Screen name="StudentRegistrationPage" component={StudentRegistrationPage} options={{ headerShown: false }} />
            <Stack.Screen name="ParentRegistrationPage" component={ParentRegistrationPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#035088',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
    },
    imageContainer: {
        marginTop: 50,
        marginBottom: 20,
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 15,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
    },
});

export default MyApp;
