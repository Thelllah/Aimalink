import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function FindDrives() {
    const router= useRouter();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('@/assets/images/location.png')} style={styles.img}/>
                <Text style={styles.title}>Find Nearby Drives</Text>
                <Text style={styles.desc}>Looking to donate blood but not sure where to go? Our Nearby Drive Locator makes it simple! Find the closest blood donation drive in just a few clicks and make a life-saving impact.</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>router.navigate('./FilterDrives')}>
                    <Text style={{ color: '#fff', fontFamily: "Nunito", fontWeight:"500", fontSize:18 }}>Continue</Text>
                    <MaterialIcons name="arrow-forward" size={22} color={'white'} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: 'center',
        flex: 1
    },
    img:{
        width:140,
        height:200
    },
    title: {
        color: '#2E2E30',
        fontSize: 20,
        fontFamily: "Nunito",
        fontWeight: "bold",
        marginTop: 20
    },
    desc: {
        fontSize: 16,
        color: '#717171',
        fontFamily: 'Nunito',
        textAlign: "center",
        paddingHorizontal: 20
    },
    btn: {
        backgroundColor: '#F05E5E',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 15,
        borderRadius: 30,
    },
})
export default FindDrives