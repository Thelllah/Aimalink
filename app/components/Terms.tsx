import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const sections = [
    {
        title: "Basic Eligibility Criteria",
        data: [
            "Age: Typically, you must be at least 16–18 years old (varies by country) and meet the legal requirements.",
            "Weight: Minimum weight is usually 50 kg (110 lbs) to ensure safe donation.",
            "Health: You should be in good general health without any active illness."
        ]
    },
    {
        title: "Pre-Donation Preparation",
        data: [
            "Eat Well: Have a healthy meal 2-3 hours before donating. Avoid fatty foods as they can affect test results.",
            "Hydrate: Drink plenty of water or non-caffeinated beverages before donation.",
            "Sleep: Ensure you get a good night’s sleep before donating.",
            "Avoid Alcohol and Smoking: Refrain from alcohol at least 24 hours prior, and avoid smoking a few hours before and after donation."
        ]
    }
];

function Terms() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn} onPress={() => router.back()}>
                        <MaterialIcons name='arrow-back' color={"#fff"} size={22} />
                    </TouchableOpacity>
                    <Text style={styles.title}>What do I need to know before donating</Text>
                </View>

                <Text style={styles.introText}>
                    Before donating blood, it's important to be well-informed about the process and the requirements.
                </Text>

                {sections.map((section, index) => (
                    <View key={index} style={styles.section}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                        {section.data.map((item, i) => (
                            <Text key={i} style={styles.listItem}>{`\u2022 ${item}`}</Text>
                        ))}
                    </View>
                ))}

                {/* Checkbox for Accepting Terms */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={accepted ? 'checked' : 'unchecked'}
                        onPress={() => setAccepted(!accepted)}
                        color="#F05E5E"
                    />
                    <Text style={styles.checkboxText}>I accept the terms and conditions</Text>
                </View>

                {/* Proceed Button */}
                <TouchableOpacity 
                    style={[styles.proceedBtn, { backgroundColor: accepted ? "#F05E5E" : "#ccc" }]}
                    disabled={!accepted}
                    onPress={()=>{router.push('/components/ScheduleAppTime')}}
                >
                    <Text style={styles.proceedText}>Continue</Text>
                    <MaterialIcons name="arrow-forward" color={'white'} size={22}/>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        padding: 10
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    btn: {
        backgroundColor: "#F05E5E",
        padding: 5,
        borderRadius: 5,
        alignSelf: "flex-start"
    },
    title: {
        fontFamily: "Poppins",
        fontSize: 18,
        color: "#2E2E30",
        flex: 1,
        flexWrap: "wrap"
    },
    introText: {
        fontFamily: "Nunito",
        color: "#808080",
        marginTop: 10
    },
    section: {
        marginTop: 15
    },
    sectionTitle: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        color: "#808080",
        marginBottom: 5
    },
    listItem: {
        fontFamily: "Nunito",
        color: "#606060",
        marginVertical: 4
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    checkboxText: {
        fontFamily: "Nunito",
        fontSize: 14,
        color: "#606060"
    },
    proceedBtn: {
        padding: 12,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 20,
        justifyContent: "space-between",
        flexDirection:"row"
    },
    proceedText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
});

export default Terms;
