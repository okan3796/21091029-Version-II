import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function FacilityScreen({ navigation }) {
  const { state } = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tesis.png')} style={styles.background} />

      <Text style={{ color: 'white', fontSize: 18, margin: 10 }}>
        Seçilen Mahalle: {state.selectedNeighborhood || 'Henüz seçilmedi'}
      </Text>

      <TouchableOpacity style={styles.tesis1} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis2} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis3} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis4} onPress={() => navigation.navigate('Reason')} />
      <TouchableOpacity style={styles.tesis5} onPress={() => navigation.navigate('Reason')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
  tesis1: { position: 'absolute', left: 50, top: 200, width: 300, height: 50 },
  tesis2: { position: 'absolute', left: 50, top: 300, width: 300, height: 50 },
  tesis3: { position: 'absolute', left: 50, top: 390, width: 300, height: 50 },
  tesis4: { position: 'absolute', left: 50, top: 460, width: 300, height: 50 },
  tesis5: { position: 'absolute', left: 50, top: 600, width: 300, height: 50 },
});
