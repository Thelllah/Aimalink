import React, { useState } from 'react';
import "nativewind";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import MapScreen from '../components/Location';
import HeaderStatus from '../components/HeaderStatus';
import { useRouter } from 'expo-router';

const drivesData = [
  {
    id: '1',
    name: 'CHUK Hospital',
    location: 'Kigali, Rwanda',
    distance: '2 km',
    appointments: 0,
    img: require('@/assets/images/hospital.png'),
    desc:`Your blood donation can make a life-saving difference for someone in need.
     Hospitals rely on generous donors like you to ensure there’s enough blood for emergencies, surgeries, and patients battling illnesses.
     Join us today to give the gift of life. 
     Visit CHUB or call +250737200189 to schedule your donation. Together, we can make a difference!
     `
  },
{
  id: '2',
    name: 'Kibagabaga Hospital',
      location: 'Kigali, Rwanda',
        distance: '5 km',
          appointments: 9,
            img: require('@/assets/images/hospital.png'),
  },
];

function Drives() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDrives, setFilteredDrives] = useState(drivesData);

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

  const handlePress = (item) => {
    // Correctly pass the selected item as a param
    router.push({
      pathname: '/components/SelectedDrive',
      params: { selectedDrive: item }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderStatus title={"Location"} onBackPress={() => router.back()} />
      <MapScreen />
      <View style={styles.driveList}>
        <FlatList
          data={drivesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>router.navigate('/components/SelectedDrive')}>
              <View style={styles.bloodDrive}>
              <Image source={item.img} style={styles.img} />
              <View style={styles.hospitalDesc}>
                <Text style={{ fontFamily: "Poppins" }}>{item.name}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontFamily: "Nunito", color: "#808080" }}>{item.location}</Text>
                  <Text style={{ fontFamily: "Nunito", color: "#808080" }}>{item.distance}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ color: item.appointments > 0 ? "#309B30" : "#EC3333", fontFamily: "Nunito" }}>
                    {item.appointments > 0 ? `${item.appointments} Appointments remaining` : "No more appointments"}
                  </Text>
                  <TouchableOpacity style={styles.view} onPress={() => router.navigate('/components/SelectedDrive')}>
                    <Text style={{ fontFamily: "Nunito", color: "#fff" }}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginRight: 20,
  },
  hospitalDesc: {
    width: '80%',
    marginBottom: 10,
  },
  view: {
    backgroundColor: "#F05E5E",
    padding: 5,
    height: 27,
    borderRadius: 8,
  },
  driveList: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default Drives;
