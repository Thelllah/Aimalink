import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function HeaderStatus({ title, onBackPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <MaterialIcons size={22} color={'white'} name='chevron-left' />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F05E5E',
    paddingTop: 40, // Adjust for safe area on iOS
    paddingBottom: 15,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },
  header: {
    paddingHorizontal: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    fontSize: 13,
    marginLeft: 5,
    fontFamily:"Nunito"
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
    fontFamily:"Poppins",
    marginLeft:20,
  },
});

export default HeaderStatus;