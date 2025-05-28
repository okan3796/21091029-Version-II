import React from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';

export default function NeighborhoodScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/mahalle.png')} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Facility')}>
        <Text style={styles.boxText}>Mahalle Seçimi Simülasyonu (Herhangi bir mahalle)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 20, backgroundColor: '#fff' },
  image: { width: '90%', height: 400 },
  box: {
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 12,
    marginTop: 20,
  },
  boxText: { fontSize: 16, fontWeight: '500' },
});
