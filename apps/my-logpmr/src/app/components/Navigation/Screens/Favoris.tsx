import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

const FavoriScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favoris Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: Colors.gray
    }
})

export default FavoriScreen
