import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Carte } from './components/maps/carte';

export default function App() {



  return (
    <View style={styles.container}>
      <Carte/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
