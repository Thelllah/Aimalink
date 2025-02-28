import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, Image, TouchableOpacity, Modal, Text, FlatList } from 'react-native';
import HeaderStatus from './HeaderStatus';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const drivesData = [
  {
    id: '1',
    name: 'University Teaching Hospital Butare',
    location: 'Huye, Rwanda',
    distance: '2 km',
    appointments: 9,
    img: require('@/assets/images/hospital.png'),
  },
  {
    id: '2',
    name: 'Kibagabaga Hospital',
    location: 'Kigali, Rwanda',
    distance: '5 km',
    appointments: 0,
    img: require('@/assets/images/hospital.png'),
  },
  {
    id: '3',
    name: 'CHUK Hospital',
    location: 'Kigali, Rwanda',
    distance: '3 km',
    appointments: 5,
    img: require('@/assets/images/hospital.png'),
  },
];

function FilterDrives() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDrives, setFilteredDrives] = useState(drivesData);

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  // Search Functionality
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim().length === 0) {
      setFilteredDrives(drivesData);
    } else {
      const filtered = drivesData.filter(
        (drive) =>
          drive.name.toLowerCase().includes(text.toLowerCase()) ||
          drive.location.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredDrives(filtered);
    }
  };

  return (
    <SafeAreaView>
      <HeaderStatus title={"Find Nearby Location"} onBackPress={() => router.back()} />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.searchInput}>
            <Image source={require("@/assets/images/search.png")} style={{ width: 15, height: 15, marginLeft: 15 }} />
            <TextInput
              placeholder="Search by name or location"
              style={styles.input}
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.filter} onPress={() => { setModalVisible(true); }}>
            <Image source={require("@/assets/images/filter.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal */}
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(false); }}>
        <TouchableOpacity style={styles.modalOverlay} onPress={() => { setModalVisible(false); }}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={[styles.filterOption, selectedOption === 'name' && styles.selectedOption]}
              onPress={() => handleOptionSelect('name')}>
              <FontAwesome name="home" size={22} color={selectedOption === 'name' ? "#FFF" : "#F16D6D"} />
              <Text style={[styles.optionText, selectedOption === 'name' && styles.selectedText]}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.filterOption, selectedOption === 'location' && styles.selectedOption]}
              onPress={() => handleOptionSelect('location')}>
              <MaterialIcons name='location-on' size={22} color={selectedOption === 'location' ? "#fff" : "#F16D6D"} />
              <Text style={[styles.optionText, selectedOption === 'location' && styles.selectedText]}>Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
              <Text style={{ color: "#fff", fontFamily: "Nunito", paddingVertical: 10, borderRadius: 20, textAlign: "center" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={{ marginLeft: 20 }}>
        <Text style={{ color: "#808080", fontFamily: "Nunito" }}>Filter: {selectedOption}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center", marginTop:30, paddingHorizontal:20}}>
        <Text style={styles.title}>Results near me</Text>
        <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
           <Text style={{fontFamily:"Nunito", color:"#EC3333",textDecorationLine:"underline"}}>See on Map</Text>
           <MaterialIcons name='map' size={20} color={"#EC3333"} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredDrives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>{router.navigate('/(tabs)/drives')}}>
            <View style={styles.bloodDrive}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.hospitalDesc}>
              <Text style={{ fontFamily: "Poppins" }}>{item.name}</Text>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontFamily: "Nunito", color: "#808080" }}>{item.location}</Text>
                <Text style={{ fontFamily: "Nunito", color: "#808080" }}>{item.distance}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between"}}>
                <Text style={{ color: item.appointments > 0 ? "#309B30" : "#EC3333", fontFamily: "Nunito" }}>
                  {item.appointments > 0 ? `${item.appointments} Appointments remaining` : "No more appointments"}
                </Text>
                <TouchableOpacity style={styles.view}  onPress={()=>{router.navigate('/(tabs)/drives')}}>
                  <Text style={{ fontFamily: "Nunito", color: "#fff" }}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    backgroundColor: "#F16D6D",
    marginTop: 10,
    width: "80%",
    borderRadius: 10,
    justifyContent: "center",
  },
  bloodDrive: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  img: {
    height: 40,
    width: 40,
    marginRight:20,
  },
  view: {
    backgroundColor: "#ec3333",
    padding: 5,
    height: 27,
    borderRadius: 8,
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
  hospitalDesc:{
    width:'80%',
    marginBottom:20
  },
  selectedText: {
    fontFamily:"Nunito",
    color:"#fff"
  },
  modalContent: {
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    position:"absolute",
    right:0,
    top:120
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  title:{
    color:"#808080",
    fontFamily:"Poppins",
    fontSize:16
  },
});

export default FilterDrives;
