import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput, FlatList, Text } from 'react-native';

// Global state için context'i import et
import { useAppContext } from '../context/AppContext';

const neighborhoods = ['Feriköy', 'Fulya', 'Halaskargazi', 'Harbiye'];

export default function NeighborhoodScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  // Global state'den dispatch fonksiyonunu alıyoruz
  const { dispatch } = useAppContext();

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

    // Global state'e seçilen mahalleyi kaydet
    dispatch({ type: 'SET_NEIGHBORHOOD', payload: name });

    // Sonraki sayfaya geçiş
    navigation.navigate('Facility');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/mahalle.png')} style={styles.background} />

      <TextInput
        style={styles.searchInput}
        placeholder=""
        placeholderTextColor="#aaa"
        value={search}
        onChangeText={handleSearch}
      />

      {filtered.length > 0 && (
        <FlatList
          data={filtered}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listContainer}
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
  container: {
    flex: 1,
    backgroundColor: '#fff', // Arka plan beyaz, istersen değiştir
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  searchInput: {
    marginTop: 100,
    left: 45,
    marginHorizontal: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderRadius: 8,
    color: '#000',
    elevation: 2,
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    maxHeight: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  listItem: {
    padding: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  listText: {
    fontSize: 16,
    color: '#333',
  },
  mahalle1: {
    position: 'absolute',
    left: 50,
    top: 300,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  mahalle2: {
    position: 'absolute',
    left: 200,
    top: 300,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  mahalle3: {
    position: 'absolute',
    left: 50,
    top: 450,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
  mahalle4: {
    position: 'absolute',
    left: 200,
    top: 450,
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
  },
});
