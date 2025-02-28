import React,{useState} from 'react';
import "nativewind";
import { SafeAreaView, StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import MapScreen from '../components/Location';
import HeaderStatus from '../components/HeaderStatus';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const drivesData = [
  {
    id: '1',
    name: 'Kibagabaga Hospital',
    location: 'Kigali, Rwanda',
    distance: '2 km',
    appointments: 9,
    desc:`Your blood donation can make a life-saving difference for someone in need.
    Hospitals rely on generous donors like you to ensure there’s enough blood for emergencies, surgeries, and patients battling illnesses.
    Join us today to give the gift of life. 
    Visit CHUB or call +250737200189 to schedule your donation. Together, we can make a difference!
    `,
    img: require('@/assets/images/hospital.png'),
  }
];
function SelectedDrive() {
  const router= useRouter();
  try {
    const { selectedDrive } = useGlobalSearchParams();
  } catch (error) {
    console.error("Error parsing JSON:", error);

  }
 
  return (
   <SafeAreaView style={styles.container}>
    <HeaderStatus title={"Location"} onBackPress={()=>router.back()}/>
    <MapScreen/>
    <View style={styles.driveList}>

      <FlatList
              data={drivesData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.bloodDrive}>
                 <View style={{flexDirection:"row",width:"100%",marginTop:10, paddingHorizontal:10}}>
                 <Image source={item.img} style={styles.img} />
                 <View>
                 <Text style={{ fontFamily: "Poppins" }}>{item.name}</Text>
                 <Text style={{ fontFamily: "Nunito", color: "#808080" }}>{item.location}</Text>
                 </View>
                 </View>
                  <View style={styles.hospitalDesc}>
                   
                    <View style={{ alignItems:"flex-start",marginTop:10 }}>
                      <Text style={{ color: "#808080",textAlign:"left", fontFamily:"Nunito" }}>{item.desc}</Text>
                      
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between"}}>
                      <TouchableOpacity style={styles.view} onPress={()=>router.navigate('/components/BloodDrive')}>
                        <Text style={{ fontFamily: "Poppins", color: "#fff" }}>Continue</Text>
                        <MaterialIcons name='arrow-forward' color={"white"} size={22}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
    </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
container:{
  flex:1,
  
},
bloodDrive: {
  flex:1,
  alignItems: "center",
  paddingHorizontal: 10,
  marginVertical: 10,
},
img: {
  height: 40,
  width: 40,
  marginRight:20,
},
hospitalDesc:{
  width:'100%',
  marginBottom:10
},
view: {
  backgroundColor: "#F05E5E",
  padding: 15,
  fontWeight:"bold",
  width:'100%',
  borderRadius: 32,
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between"
},
driveList:{
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  backgroundColor:"#fff",
  position:"absolute",
  bottom:0,
  width:"100%"
}
})
export default SelectedDrive;