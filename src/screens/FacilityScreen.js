import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function FacilityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tesis.png')} style={styles.image} resizeMode="contain" />
      {['Park', 'Kütüphane', 'Kent Lokantası', 'Tiyatro', 'Kafe'].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('Reason')}
        >
          <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 30, backgroundColor: '#fff' },
  image: { width: '90%', height: 300 },
  button: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
