import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderStatus from './HeaderStatus';

function BloodDrive() {
    const router = useRouter();

    const eligibilityCriteria = [
        { id: '1', desc: "✔️ Healthy individuals aged 18-60" },
        { id: '2', desc: "✔️ Weighing at least 110 lbs (50 kg)" },
        { id: '3', desc: "✔️ No recent illness, tattoos, or piercings (within the last 6 months)" },
        { id: '4', desc: "✔️ Well-hydrated and well-rested donors" },
    ];

    return (
        <ScrollView style={styles.container}>
            <HeaderStatus title="Blood Drive" onBackPress={router.back}/>

            <View style={styles.content}>
                <View style={styles.hospitalTitle}>
                    <Image source={require("@/assets/images/hospital.png")} style={styles.img} />
                    <View>
                        <Text style={styles.hospitalName}>Kibagabaga Hospital</Text>
                        <Text style={styles.hospitalLocation}>KN4, Kigali, Rwanda</Text>
                    </View>
                </View>

                <View style={styles.desc}>
                    <Text style={styles.text}>
                        Your blood donation can make a life-saving difference for someone in need.
                        Hospitals rely on generous donors like you to ensure there’s enough blood for emergencies, surgeries, and patients battling illnesses.
                        Join us today to give the gift of life. Visit{' '}
                        <Text style={styles.highlight}>Kibagabaga Hospital</Text> or call{' '}
                        <Text style={styles.highlight}>+250737200189</Text> to schedule your donation. Together, we can make a difference!
                    </Text>
                </View>

                <Text style={styles.title}>Event Details</Text>
                <View style={styles.detailsContainer}>
                    <DetailItem icon="location-on" color="#72B5FF" label="Location" text="KN4, Kigali, Rwanda" />
                    <DetailItem icon="schedule" color="#F05E5E" label="Time" text="08:00 AM - 09:00 PM" />
                    <DetailItem icon="calendar-today" color="#71FF97" label="Date" text="14 April 2025" />
                </View>

                <Text style={styles.title}>Who Can Donate</Text>
                <FlatList
                    data={eligibilityCriteria}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.desc}</Text>
                        </View>
                    )}
                    
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:"white",fontFamily:"Poppins", padding:10}}>Schedule an appointment</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const DetailItem = ({ icon, color, label, text }) => (
    <View style={styles.details}>
        <MaterialIcons name={icon} color={color} size={22} />
        <Text style={styles.detailText}>
            <Text style={styles.boldText}>{label}: </Text>
            {text}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        alignItems:"center"
    },
    hospitalTitle: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    img: {
        height: 50,
        width: 50,
    },
    hospitalName: {
        color: "#2E2E30",
        fontFamily: "Poppins",
        fontSize: 18,
    },
    hospitalLocation: {
        color: "#808080",
        fontFamily: "Nunito",
        fontSize: 14,
    },
    desc: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: "Nunito",
        color: "#808080",
    },
    highlight: {
        color: "#EC3333",
        fontFamily: "Poppins",
    },
    title: {
        color: "#717171",
        paddingHorizontal: 10,
        marginVertical: 10,
        fontFamily: "Poppins",
        fontSize: 15,
        alignSelf:"flex-start"
    },
    detailsContainer: {
        paddingHorizontal: 10,
        alignSelf:"flex-start"
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 5,
    },
    detailText: {
        color: "#CCCCCC",
        fontFamily: "Nunito",
    },
    boldText: {
        fontFamily: "Poppins",
        color: "#CCCCCC",
    },
    item: {
        borderRadius: 10,
        marginBottom: 2,
        alignSelf:"flex-start",
        padding:2
    },
    name: {
        fontSize: 14,
        color:"#BFBEBE",
        fontFamily:"Poppins"
    },
    btn:{
        width:"80%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F05E5E",
        borderRadius:32,
        marginTop:10,
        padding:5,
        marginBottom:20
    },
});

export default BloodDrive;
