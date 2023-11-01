import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import ParallaxSrollView from '@/components/ParallaxScrollView'
import { StyleSheet } from 'react-native'
import Colors from '@/constants/Colors'
import { restaurant } from '@/assets/data/restaurant'
import { useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
const Details = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: Colors.primary,
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
                    <Ionicons name='arrow-back' size={24} color={Colors.primary} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <View style={styles.bar}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
                        <Ionicons name='share-outline' size={24} color={Colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.roundButton}>
                        <Ionicons name='search-outline' size={24} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

  return (
    <ParallaxSrollView 
        style={{ flex: 1 }}
        backgroundColor={Colors.white}
        renderBackground={
            () => <Image source={restaurant.img} style={{ height: 300, width: '100%' }}/>
        }
        renderStickyHeader={() => (
            <View key={'sticky-header'} style={styles.stickySection}>
                <Text style={styles.stickySectionText}>{restaurant.name}</Text>
            </View>
        )}
        contentBackgroundColor={Colors.lightGrey}
        stickyHeaderHeight={120}
        parallaxHeaderHeight={300}
    >
        <View style={styles.detailsContainer}>
            <Text>Details</Text>
        </View>
    </ParallaxSrollView>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: Colors.lightGrey,
    },
    stickySection: {
        backgroundColor: Colors.white,
        marginLeft: 70,
        height: 100,
        justifyContent: 'flex-end',
    },
    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    stickySectionText: {
        fontSize: 20,
        margin: 10,
    }
})

export default Details