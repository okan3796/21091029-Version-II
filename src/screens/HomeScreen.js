import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/home.png')} style={styles.image} resizeMode="contain" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Neighborhood')}>
        <Text style={styles.buttonText}>Mahalle Seçiniz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: '90%', height: '70%' },
  button: {
    backgroundColor: '#467fd0',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
