import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Button, StyleSheet } from 'react-native';

export default function ReasonScreen({ navigation }) {
  const [reason, setReason] = useState('');
  const [name, setName] = useState('');

  return (
    <ImageBackground source={require('../../assets/neden.png')} style={styles.container} resizeMode="contain">
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Neden bu tesisi, seçtiniz?"
          value={reason}
          onChangeText={setReason}
        />
        <TextInput
          style={styles.input}
          placeholder="Ad Soyad"
          value={name}
          onChangeText={setName}
        />
        <Button title="Gönder" onPress={() => navigation.navigate('Thanks')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 300
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  }
});
