import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ReasonScreen = ({ navigation }) => {
  const [reason, setReason] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (reason && name) {
      navigation.navigate('Thanks');
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/neden.png')} style={styles.background} />

      <TextInput
        style={styles.inputReason}
        placeholder="Neden bu tesisi seçtiniz?"
        placeholderTextColor="#555"
        multiline
        value={reason}
        onChangeText={setReason}
      />

      <TextInput
        style={styles.inputName}
        placeholder="Ad Soyad"
        placeholderTextColor="#555"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.buttonArea} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  inputReason: {
    position: 'absolute',
    top: '30%', // ← biraz daha yukarı alındı
    left: '10%',
    width: '80%',
    height: 80,
    padding: 10,
    backgroundColor: '#ffffffcc',
    borderRadius: 10,
    fontSize: 16,
  },
  inputName: {
    position: 'absolute',
    top: '50%', // ← aynı oranda aşağı kaydırıldı
    left: '10%',
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: '#ffffffcc',
    borderRadius: 10,
    fontSize: 16,
  },
  buttonArea: {
    position: 'absolute',
    bottom: '10%',
    left: '25%',
    width: '50%',
    height: 50,
    backgroundColor: 'transparent', // PNG’deki butonun üstüne denk gelsin
  },
});

export default ReasonScreen;
