 import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';

export default function ThanksScreen() {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/turkey')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {/* Arka plan görseli */}
      <Image source={require('../../assets/tsk.png')} style={styles.background} />

      {/* İçerik kutusu en altta */}
      <View style={styles.bottomBox}>
        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : country ? (
          <View style={styles.infoBox}>
            <Text style={styles.title}>🇹🇷 Daha planlı yarınlara</Text>
            <Image
              source={{ uri: country.flags.png }}
              style={styles.flag}
              resizeMode="contain"
            />
            <Text style={styles.text}>Başkent: {country.capital[0]}</Text>
            <Text style={styles.text}>Nüfus: {country.population.toLocaleString()}</Text>
            <Text style={styles.text}>Kıta: {country.region}</Text>
          </View>
        ) : (
          <Text style={styles.text}>Bilgiler alınamadı.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomBox: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  flag: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 3,
    textAlign: 'center',
  },
});