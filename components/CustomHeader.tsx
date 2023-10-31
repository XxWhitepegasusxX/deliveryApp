import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomHeader() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Text>Custom Header</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        height: 60,
        backgroundColor: 'red',
    }
})