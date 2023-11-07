import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Carte } from './components/maps/carte';
import Tabs from './components/myTabs/Tabs';
import { MainNavigator } from './components/Navigation/NavigationRoot';

export default function App() {

  return (
    <View style={styles.container}>
     <MainNavigator/>
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
