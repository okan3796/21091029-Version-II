import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function NeighborhoodScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/mahalle.png')} style={styles.background} />
      <TouchableOpacity style={styles.mahalle1} onPress={() => navigation.navigate('Facility')} />
      <TouchableOpacity style={styles.mahalle2} onPress={() => navigation.navigate('Facility')} />
      <TouchableOpacity style={styles.mahalle3} onPress={() => navigation.navigate('Facility')} />
      <TouchableOpacity style={styles.mahalle4} onPress={() => navigation.navigate('Facility')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
  mahalle1: { position: 'absolute', left: 50, top: 300, width: 100, height: 100 },
  mahalle2: { position: 'absolute', left: 200, top: 300, width: 100, height: 100 },
  mahalle3: { position: 'absolute', left: 50, top: 450, width: 100, height: 100 },
  mahalle4: { position: 'absolute', left: 200, top: 450, width: 100, height: 100 },
});