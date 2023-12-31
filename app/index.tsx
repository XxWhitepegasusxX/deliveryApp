import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Categories from '@/components/Categories';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Restaurants from '@/components/Restaurants';

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories/>
        <Text style={styles.header}>
          Top picks in your neighborhood
        </Text>
        <Restaurants/>
        <Text style={styles.header}>
          Offers near you
        </Text>
        <Restaurants/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  }
})

export default Page