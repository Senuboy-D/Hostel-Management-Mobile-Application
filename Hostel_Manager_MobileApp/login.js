import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import StudentLoginPage from './studentLogin';
import ParentLoginPage from './parentLogin';

class LoginPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Log In</Text>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://drive.google.com/uc?id=1IrNKNqXEmkkW1iMiHoUZHt62fLnVpvAE',
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('StudentLoginPage')}
                >
                    <Text style={styles.buttonText}>STUDENT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('ParentLoginPage')}
                >
                    <Text style={styles.buttonText}>PARENT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        LoginPage: {
            screen: LoginPage,
            navigationOptions: {
                headerShown: false,
            },
        },
        StudentLoginPage: {
            screen: StudentLoginPage,
            navigationOptions: {
                headerShown: false,
            },
        },
        ParentLoginPage: {
            screen: ParentLoginPage,
            navigationOptions: {
                headerShown: false,
            },
        },
    },
    {
        initialRouteName: 'LoginPage',
    }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#612CE8',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
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

export default class MyApp extends React.Component {
    render() {
        return <AppContainer />;
    }
}
