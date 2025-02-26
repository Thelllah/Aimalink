import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View,StyleSheet } from 'react-native';

function GettingStarted() {
  const router= useRouter();
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('@/assets/images/logo.png')}/>
          <Text style={styles.title}>Getting <Text style={{textDecorationLine:'underline'}}>Started</Text></Text> 
        </View>
        <View style={styles.textContainer}>
         <Text style={styles.desc}>Go and start enjoying our app features and say goodbye to the long ques</Text>
         <TouchableOpacity onPress={()=>{router.push('/componentsGettingStarted2')}} style={styles.btn}>
           <Text style={{color:'#fff', fontSize:18, fontFamily:'Nunito'}}>Continue</Text>
           <MaterialIcons name="arrow-forward" size={20} color={"white"}/>
        </TouchableOpacity>
        </View>
        
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
    padding:20,
    paddingVertical:30
  },
  desc:{
    color:'#fff',
    fontFamily:'Nunito',
    textAlign:'center',
    fontSize:16
  },
  btn:{
    backgroundColor:"#F05E5E",
    justifyContent:"space-between",
    alignItems:'center',
    width:"100%",
    paddingHorizontal:20,
    flexDirection:'row',
    borderBlockColor:"#fff",
    borderWidth:1,
    marginTop:30,
    padding:10,
    borderRadius:20
  }
})

export default GettingStarted