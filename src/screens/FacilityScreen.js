import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

export default function FacilityScreen({ navigation }) {
  const { state } = useAppContext();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tesis.png')} style={styles.background} />

      <Text style={styles.title}>
        Seçilen Mahalle: {state.selectedNeighborhood || 'Henüz seçilmedi'}
      </Text>

   <TouchableOpacity style={[styles.tesis, { top: 180 }]} onPress={() => navigation.navigate('Reason')}>
  <View style={styles.spacer} />
  <Ionicons name="leaf" size={30} color="white" />
</TouchableOpacity>

      <TouchableOpacity style={[styles.tesis, { top: 280 }]} onPress={() => navigation.navigate('Reason')}>
        <View style={styles.spacer} />
        <Ionicons name="book" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.tesis, { top: 390 }]} onPress={() => navigation.navigate('Reason')}>
        <View style={styles.spacer} />
        <Ionicons name="restaurant" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.tesis, { top: 490 }]} onPress={() => navigation.navigate('Reason')}>
        <View style={styles.spacer} />
        <Ionicons name="film" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.tesis, { top: 600 }]} onPress={() => navigation.navigate('Reason')}>
        <View style={styles.spacer} />
        <Ionicons name="cafe" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
  title: { color: 'white', fontSize: 18, margin: 10 },
  tesis: {
    position: 'absolute',
    left: 50,
    top: 200,
    width: 300,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  spacer: {
    flex: 1,
  },
});
