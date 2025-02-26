import { useRouter } from 'expo-router'
import React from 'react'
import { SafeAreaView, View,TouchableOpacity,StyleSheet, Image,Text } from 'react-native'

function GettingStarted2() {
    const router= useRouter();
  return (
    <SafeAreaView>
               <View style={styles.imgContainer}>
                 <Image source={require('@/assets/images/logo.png')}/>
                 <Text style={styles.title}>Getting <Text style={{textDecorationLine:'underline'}}>Started</Text></Text> 
               </View>
               <View style={styles.textContainer}>
                <Text style={styles.desc}>Go and start enjoying our app features and say goodbye to the long ques</Text>
               </View>
               <TouchableOpacity onPress={()=>{router.push('/components/GettingStarted')}}>
       
               </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:'center'
    },
    imgContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    title:{
      fontSize:22,
      fontFamily:"Poppins",
      textAlign:'center',
      marginTop:10
    },
    textContainer:{
      backgroundColor:'#F05E5E',
      height:'25%',
      width:"100%",
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      justifyContent:'center',
      paddingHorizontal:10
    },
    desc:{
      color:'#fff',
      fontFamily:'Nunito',
      textAlign:'center'
    },
  })
  


export default GettingStarted2