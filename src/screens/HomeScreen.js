// HomeScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from '../button/atom/Button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/home.png')} style={styles.background} />
      
      <Button
        title=""
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Neighborhood')}
      />
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
  buttonStyle: {
    position: 'absolute',
    left: 100,
    top: 750,
    width: 250,
    height: 60,
    justifyContent: 'center',
  },
});
