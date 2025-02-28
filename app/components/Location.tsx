import React from 'react';
import { View, Text, StyleSheet, FlatList, Button,SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';




const locations = [
  { id: 1, latitude:-1.9496, longitude:30.1246, title:'Kibagabaga Hospital',name:'Kibagabaga Hospital', location:'Kigali, Rwanda', distance:'5 km', available:9 },
  { id: 2, latitude:-1.95755, longitude:30.06146, title: 'CHUK Hospital', name: 'The University Teaching Hospital of Kigali (CHUK)', location: 'Kigali, Rwanda', distance: '1 km', available: 0 },
];

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.9496,
          longitude: 30.1246,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}>
        {locations.map((loc) => (
          <Marker key={loc.id} coordinate={{ latitude: loc.latitude, longitude: loc.longitude }} title={loc.title} description={`${loc.available} Appointments remaining`}/>
        ))}
      </MapView>
    </View>
  );
};

const LocationList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>{item.location} - {item.distance}</Text>
            <Text style={item.available > 0 ? styles.available : styles.unavailable}>
              {item.available > 0 ? `${item.available} Appointments remaining` : 'No more appointments'}
            </Text>
            <Button title="View" color="#FF6961" disabled={item.available === 0} />
          </View>
        )}
      />
    </View>
  );
};


const Location = () => {
  return (
    <NavigationContainer>
         <MapScreen/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1},
  map: { width: '100%', height: '100%' },
  card: {backgroundColor: 'white', marginVertical: 5, borderRadius: 10, elevation: 3 },
  name: { fontSize: 16, fontWeight: 'bold' },
  available: { color: 'green' },
  unavailable: { color: 'red' },
  marker:{padding:2},
});

export default Location;
