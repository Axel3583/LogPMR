import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/Colors'

const ServiceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profil Screen</Text>
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

export default ServiceScreen
