import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function ReasonScreen({ navigation }) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/neden.png')} style={styles.background} />
      <TextInput
        value={text1}
        onChangeText={setText1}
        style={styles.input1}
        placeholder="Neden 1"
        placeholderTextColor="#999"
      />
      <TextInput
        value={text2}
        onChangeText={setText2}
        style={styles.input2}
        placeholder="Neden 2"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Thanks')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { width: '100%', height: '100%', resizeMode: 'cover' },
  input1: { position: 'absolute', left: 50, top: 300, width: 300, height: 50, color: 'black' },
  input2: { position: 'absolute', left: 50, top: 370, width: 300, height: 50, color: 'black' },
  button: { position: 'absolute', left: 100, top: 450, width: 200, height: 60 },
});