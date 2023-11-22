import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

const RulesAndRegulationsPage = () => {
    const buildBulletText = (text) => (
        <View style={styles.bulletTextContainer}>
            <Text style={styles.bulletIcon}>•</Text>
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Rules and Regulations</Text>
            {buildBulletText('Smoking, Alcohol & Narcotic consumption is strictly prohibited in and around the Hostel premises.')}
            {buildBulletText('Strict adherence to the prescribed dress code is required. Decency in dressing & demeanor is a must.')}
            {buildBulletText('Loitering in the Hostel campus during the class hours will not be appreciated.')}
            {buildBulletText('The Management & Staff will not be responsible for personal belongings.')}
            {buildBulletText('Late comers will be penalized.')}
            {buildBulletText('Students must keep the Campus & Rooms clean. Defacing walls, equipment, furniture etc., is strictly prohibited.')}
            {buildBulletText('Birthday/Other Celebrations are strictly prohibited in Hostel.')}
            {buildBulletText('Students must turn off all the electrical equipments & lights before leaving their rooms.')}
            {buildBulletText('Students are not allowed to use electric stoves, heaters etc in rooms except in designated places.')}
            {buildBulletText('Students are not allowed to organize any group activities in their room.')}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#612CE8',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    header: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    bulletTextContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bulletIcon: {
        fontSize: 14,
        color: 'white',
        marginRight: 8,
        marginTop: 4,
    },
    bulletText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
    },
});

export default RulesAndRegulationsPage;
