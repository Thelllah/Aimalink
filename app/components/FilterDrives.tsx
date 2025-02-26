import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Image, TouchableOpacity, Modal, Text } from 'react-native';
import HeaderStatus from './HeaderStatus';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

function FilterDrives() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  return (
    <SafeAreaView>
      <HeaderStatus title={"Find Nearby Location"} onBackPress={() => { router.push('/components/FindDrives'); }} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.searchInput}>
            <Image source={require("@/assets/images/search.png")} style={{ width: 15, height: 15,marginLeft:15 }} />
            <TextInput placeholder='Search by' style={styles.input} />
          </View>
          <TouchableOpacity style={styles.filter} onPress={() => { setModalVisible(true); }}>
            <Image source={require("@/assets/images/filter.png")} />
          </TouchableOpacity>
        </View>
       
      </View>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(false); }}>
        <View>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={[styles.filterOption, selectedOption === 'name' && styles.selectedOption]} // Conditional styling
              onPress={() => handleOptionSelect('name')}>
              <FontAwesome name="home" size={22} color={selectedOption === 'name' ? "#FFF" : "#F16D6D"} />
              <Text style={[styles.optionText, selectedOption === 'name' && styles.selectedText]}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterOption, selectedOption === 'location' && styles.selectedOption]} // Conditional styling
              onPress={() => handleOptionSelect('location')}>
              <MaterialIcons name='location-on' size={22} color={selectedOption === 'location' ? "#fff" : "#F16D6D"} />
              <Text style={[styles.optionText, selectedOption === 'location' && styles.selectedText]}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
              <Text style={{ color: "#fff", fontFamily: "Nunito", paddingVertical: 10, borderRadius: 20, textAlign:"center" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{marginTop:40, marginLeft:20}}>
            <Text style={{color:"#808080",fontFamily:"Nunito"}}>Filter: {selectedOption}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", marginTop:30,}}>
        <Text style={styles.title}>Results near me</Text>
        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
           <Text style={{fontFamily:"Nunito", color:"#EC3333",textDecorationLine:"underline"}}>See on Map</Text>
           <MaterialIcons name='map' size={20} color={"#EC3333"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  searchInput: {
    padding: 10,
    width: "80%",
    height: 56,
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  input: {
    padding: 10,
    borderRadius: 20,
    width: '70%',
    fontFamily: "Nunito",
    marginLeft: 20,
  },
  filter: {
    height: 50,
    width: 50,
    borderRadius: 20,
    backgroundColor: '#ECECEC',
    marginTop: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  modalContent: {
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    position:"absolute",
    right:0,
    top:120
  },
  filterOption: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical:10,
    borderRadius: 10,
    width: 70,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: "#F16D6D", // Different background color for selected option
  },
  optionText: {
    fontFamily: "Nunito",
    color: '#F16D6D',
    marginLeft: 10,
  },
  selectedText: {
    fontFamily:"Nunito",
    color:"#fff"
  },
  closeBtn: {
    backgroundColor: "#F16D6D",
    marginTop: 10,
    width:"80%",
    borderRadius: 10,
    justifyContent:"center",
  },
  title:{
    paddingHorizontal:20,
    color:"#808080",
    fontFamily:"Poppins",
    fontSize:16
  }
});

export default FilterDrives;
