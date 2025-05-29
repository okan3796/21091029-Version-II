import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, Text } from 'react-native';

const neighborhoods = ['Feriköy', 'Fulya', 'Halaskargazi', 'Harbiye'];

export default function NeighborhoodScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const results = neighborhoods.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  const handleSelect = (name) => {
    setSearch(name);
    setFiltered([]);
    navigation.navigate('Facility'); // mahalle adı istenirse burada parametreyle de yollanabilir
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/mahalle.png')} style={styles.background} />

      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={handleSearch}
      />

      {filtered.length > 0 && (
        <FlatList
          data={filtered}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.listText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Harita Üzerindeki Dokunmatik Alanlar */}
      <TouchableOpacity style={styles.mahalle1} onPress={() => handleSelect('Feriköy')} />
      <TouchableOpacity style={styles.mahalle2} onPress={() => handleSelect('Fulya')} />
      <TouchableOpacity style={styles.mahalle3} onPress={() => handleSelect('Halaskargazi')} />
      <TouchableOpacity style={styles.mahalle4} onPress={() => handleSelect('Harbiye')} />
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
searchInput: {
  marginTop: 100,
  marginLeft: 60,
  width: '60%', // genişlik azaltıldı, daha küçük görünecek
  backgroundColor: 'rgba(0,0,0,0)', // tamamen şeffaf arka plan
  paddingHorizontal: 8,
  paddingVertical: 6,
  fontSize: 15,
  color: '#fff', // metin beyaz, görünür kalması için
},

listItem: {
  backgroundColor: 'white', // arka plan beyaz
  marginHorizontal: 20,
  marginTop: 10,
  padding: 10,
  borderRadius: 8,
  elevation: 2, // Android için hafif gölge efekti
  shadowColor: '#000', // iOS için gölge
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
},

  listText: {
    fontSize: 16,
  },
  mahalle1: { position: 'absolute', left: 50, top: 300, width: 100, height: 100 },
  mahalle2: { position: 'absolute', left: 200, top: 300, width: 100, height: 100 },
  mahalle3: { position: 'absolute', left: 50, top: 450, width: 100, height: 100 },
  mahalle4: { position: 'absolute', left: 200, top: 450, width: 100, height: 100 },
});
