import React from 'react';
import { View, StyleSheet } from 'react-native';
import AdDetails from './AdDetails';

const AdList = ({ item, navigation }) => {
  return (
    <View style={styles.itemContainer}>
      <AdDetails ad={item} onUpdate={() => navigation.navigate('Atnaujinti', { ad: item })} onDelete={() => navigation.navigate('Ištrinti', { ad: item })} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {

    paddingVertical: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default AdList;