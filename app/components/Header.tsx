import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FontAwesome name="chevron-right" />
      </View>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        height:'15%',
        backgroundColor:"#F05E5E"
    }
})
export default Header