import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function FacilityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tesis.png')} style={styles.background} />
      <TouchableOpacity style={styles.tesis1} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis2} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis3} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis4} onPress={() => navigation.navigate('Reason')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
  tesis1: { position: 'absolute', left: 50, top: 250, width: 300, height: 50 },
  tesis2: { position: 'absolute', left: 50, top: 320, width: 300, height: 50 },
  tesis3: { position: 'absolute', left: 50, top: 390, width: 300, height: 50 },
  tesis4: { position: 'absolute', left: 50, top: 460, width: 300, height: 50 },
});