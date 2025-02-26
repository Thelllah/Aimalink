import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function FindDrives() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image source={require('@/assets/images/location.png')} />
                <Text style={styles.title}>Find Nearby Drives</Text>
                <Text style={styles.desc}>Looking to donate blood but not sure where to go? Our Nearby Drive Locator makes it simple! Find the closest blood donation drive in just a few clicks and make a life-saving impact.</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#fff', fontFamily: "Nunito", fontWeight: 'bold' }}>Continue</Text>
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
        padding: 10,
        borderRadius: 30,
    },
})
export default FindDrives