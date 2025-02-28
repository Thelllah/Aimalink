import { useRouter } from 'expo-router';
import { Image, StyleSheet, Platform, Text, TouchableOpacity,SafeAreaView } from 'react-native';


export default function HomeScreen() {
  const router= useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={()=>{router.push('/components/GettingStarted')}}>
         <Text style={styles.text}>
          Continue
         </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center"
 },
 btn:{
  backgroundColor:'#F05E5E',
  padding:20,
  borderRadius:30,
  
 },
 text:{
  fontFamily:"Nunito",
  color:'#fff',
  fontWeight:"500"
 }
});
