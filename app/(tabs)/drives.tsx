import React from 'react';
import "nativewind";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/HeaderStatus';

function drives() {
  return (
   <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={styles.title}>This is the drives page</Text>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:"center",
},
title:{
  color:'#BFBEBE',

},
})
export default drives