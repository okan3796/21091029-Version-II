import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

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
    top: '24%', // yukarı taşındı
    left: '9%',
    width: '80%',
    height: 80,
    padding: 10,
    backgroundColor: 'transparent', // tamamen şeffaf
    borderRadius: 10,
    fontSize: 16,
  },
  inputName: {
    position: 'absolute',
    top: '59%', // aşağı kaydırıldı
    left: '12%',
    width: '80%',
    height: 50,
    padding: 10,
    backgroundColor: 'transparent', // tamamen şeffaf
    borderRadius: 10,
    fontSize: 16,
  },
  buttonArea: {
    position: 'absolute',
    bottom: '15%',
    left: '20%',
    width: '50%',
    height: 50,
    backgroundColor: 'transparent',
  },
});

export default ReasonScreen;
