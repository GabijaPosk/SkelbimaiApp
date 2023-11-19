import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import AdList from '../adSettings/AdList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';

const MainScreen = ({ navigation }) => {
  const ads = useSelector((state) => state.ads.ads);
  
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchDesc, setSearchDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  const filteredAds = ads.filter((ad) => {
    const hasSearchTerm = ad.title.toLowerCase().includes(searchTerm.toLowerCase());
    const hasSearchDesc = ad.description.toLowerCase().includes(searchDesc.toLowerCase());
    const isCategoryMatch = selectedCategory === 'All' || ad.category === selectedCategory;
    return hasSearchTerm && hasSearchDesc && isCategoryMatch;
  });

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleAdsChange = useCallback(() => {
    console.log('MainScreen rendered');
    console.log('Ads in Redux state:', JSON.stringify(ads));
  }, [ads]);

  useEffect(() => {
    handleAdsChange();
  }, [ads, handleAdsChange]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Skelbimai</Text>
        <TouchableOpacity onPress={toggleSearch}>
          <View style={styles.searchIconContainer}>
            <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.categoryPicker}
      >
        <Picker.Item label="Visos kategorijos" value="Visos kategorijos" />
        <Picker.Item label="Nešiojami kompiuteriai" value="Nešiojami kompiuteriai" />
        <Picker.Item label="Staliniai kompiuteriai" value="Staliniai kompiuteriai" />
        <Picker.Item label="Planšetiniai kompiuteriai" value="Planšetiniai kompiuteriai" />
        <Picker.Item label="Elektroninės skaityklės" value="Elektroninės skaityklės" />
        <Picker.Item label="Monitoriai" value="Monitoriai" />
        <Picker.Item label="Vaizdo plokštės" value="Vaizdo plokštės" />
        <Picker.Item label="Pagrindinės plokštės" value="Pagrindinės plokštės" />
        <Picker.Item label="Garso plokštės" value="Garso plokštės" />
        <Picker.Item label="Įvesties/išvesties išplėtimo plokštės" value="Įvesties/išvesties išplėtimo plokštės" />
        <Picker.Item label="Optiniai įrenginiai" value="Optiniai įrenginiai" />
        <Picker.Item label="korpusai ir priedai" value="korpusai ir priedai" />
        <Picker.Item label="Išorinės duomenų laikmenos" value="Išorinės duomenų laikmenos" />
        <Picker.Item label="Kompiuterių priedai ir aksesuarai" value="Kompiuterių priedai ir aksesuarai" />
        <Picker.Item label="Kabeliai, adapteriai ir priedai" value="Kabeliai, adapteriai ir priedai" />
      </Picker>
      {isSearchExpanded && (
        <View style={styles.filterContainer}>
          <TextInput
            style={styles.expandedInput}
            placeholder="Pavadinimas"
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
          <TextInput
            style={styles.expandedInput}
            placeholder="Aprašymas"
            value={searchDesc}
            onChangeText={(text) => setSearchDesc(text)}
          />
        </View>
      )}
      <FlatList
        data={filteredAds}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AdList item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#B38481',
  },
  categoryPicker: {
    height: 50,
    width: '80%',
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchIconContainer: {
    backgroundColor: '#B38481',
    borderRadius: 40,
    padding: 10,
  },
  searchIcon: {
    marginRight: 1,
  },
  expandedInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginBottom: 10,
    padding: 10,
    width: '50%',
    color: '#C0C0C0',
  },
});

export default MainScreen;
