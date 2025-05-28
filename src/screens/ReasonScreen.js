import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform } from 'react-native';

export default function ReasonScreen({ navigation }) {
  const [reason, setReason] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (reason && name) {
      navigation.navigate('Thanks');
    } else {
      alert('Lütfen tüm alanları doldurun');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <TextInput
        placeholder="Neden bu tesisi seçtiniz?"
        style={styles.input}
        multiline
        numberOfLines={4}
        onChangeText={setReason}
        value={reason}
      />
      <TextInput
        placeholder="Ad Soyad"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
