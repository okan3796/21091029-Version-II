import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ThanksScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/tsk.png')} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: '90%', height: '80%' },
});
