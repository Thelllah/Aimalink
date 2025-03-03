import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function ScheduleApp() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Don't waste time</Text>
        <Text style={styles.schedule}>Schedule a Donation</Text>
        </View>
        <View style={styles.hospitalCont}>

        </View>
    </SafeAreaView>
  );
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        alignItems:"center"
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    title:{
        color: "#717171",
        paddingHorizontal: 10,
        marginVertical: 10,
        fontFamily: "Nunito",
        fontSize: 15,
        alignSelf:"flex-start"
    },
    schedule:{
        fontFamily:"Poppins",
        color:"#2E2E30",
    },
    hospitalCont:{
        paddingHorizontal: 10,
        alignSelf:"flex-start",
        backgroundColor:"#FFB6B6",
        
    }
})

export default ScheduleApp;
