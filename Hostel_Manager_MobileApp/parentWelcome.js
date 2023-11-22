import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import MonthlyBill from './parentPayment';
import ParentAttendance from './parentAttendance';

const ParentWelcomePage = ({ navigate }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Welcome</Text>
            </View>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://drive.google.com/uc?id=1MhZOwuAUhkyuT_9L32gbnPK3Ff3nB3nd',
                }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('ParentPayment')}
            >
                <Text style={styles.buttonText}>MONTHLY BILL</Text>
            </TouchableOpacity>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://drive.google.com/uc?id=1sedyVTWR1cJdegyO7yl_iTHEqJBcjb9G',
                }}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('ParentAttendance')}
            >
                <Text style={styles.buttonText}>ATTENDANCE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#612CE8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        marginBottom: 30,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 55,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});

const ParentComponent = () => {
    const [currentPage, setCurrentPage] = useState('ParentWelcomePage');

    const handleNavigate = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {currentPage === 'ParentWelcomePage' && (
                <ParentWelcomePage navigate={handleNavigate} />
            )}
            {currentPage === 'ParentPayment' && <MonthlyBill />}
            {currentPage === 'ParentAttendance' && <ParentAttendance />}
        </>
    );
};

export default ParentComponent;
