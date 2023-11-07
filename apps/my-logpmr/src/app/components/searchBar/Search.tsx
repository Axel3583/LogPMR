import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Search () {
  return (
    <View>
        <View style={styles.searchBar}>
        <Text>📍 My current location</Text>
        <TextInput placeholder="Search" style={styles.input} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    }
})