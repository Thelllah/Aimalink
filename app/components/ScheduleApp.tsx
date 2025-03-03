import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ScheduleApp() {
    const router = useRouter()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Don't waste time</Text>
                <Text style={styles.schedule}>Schedule a Donation</Text>
            </View>
            <View style={styles.hospitalCont}>
                <Image source={require('@/assets/images/doctor.png')} />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => { router.push('/components/Terms') }}>
                <Text style={{ color: "white", fontFamily: "Poppins", padding: 10 }}>Schedule an appointment</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        marginTop: 25,
        paddingHorizontal: 10,
    },
    title: {
        color: "#717171",
        paddingHorizontal: 10,
        marginVertical: 10,
        fontFamily: "Nunito",
        fontSize: 15,
        alignSelf: "flex-start"
    },
    schedule: {
        fontFamily: "Poppins",
        color: "#2E2E30",
        fontSize: 20,
        paddingHorizontal: 10
    },
    hospitalCont: {
        paddingHorizontal: 10,
        alignSelf: "flex-start",
    },
    btn: {
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F05E5E",
        borderRadius: 32,
        marginTop: 10,
        padding: 5,
        marginBottom: 20,
        alignSelf: "center",
    },
})

export default ScheduleApp;
