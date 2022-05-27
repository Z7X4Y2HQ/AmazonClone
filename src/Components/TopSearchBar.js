import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Searchbar } from 'react-native-paper'

export default TopSearchBar = ({navigation}) => (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
        <View style={styles.searchBarContainer}>
          <Searchbar onPressIn={() => navigation.push('Search')} style={styles.searchBar} iconColor="black" placeholder="Search Amazon" />
        </View>
    </LinearGradient>
)
const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 6,
    paddingTop: 24
  },
  searchBar: {
    margin: 9, 
    borderRadius: 7
  }
})