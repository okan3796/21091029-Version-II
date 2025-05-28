import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function ThanksScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/thanks.png')} style={styles.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
});