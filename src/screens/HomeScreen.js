// HomeScreen.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/home.png')} style={styles.background} />
      <TouchableOpacity style={styles.selectArea} onPress={() => navigation.navigate('Neighborhood')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  selectArea: {
    position: 'absolute',
    left: 100, // adjust according to your design
    top: 450,
    width: 200,
    height: 60,
  },
});
