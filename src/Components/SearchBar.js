import React, { useContext, useEffect, useRef } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Searchbar } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';


import { NavBarContext } from '../Contexts/NavBarContext'

export default SearchBar = ({ref, navigation}) => {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext)


  return(
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
        <View style={styles.searchBarContainer}>
          { currentScreen == "ProductPageFromHome"
          ?    
          <Pressable style={{marginTop:22, paddingHorizontal: 8}} onPress={() => {navigation.goBack()}}>
            {({ pressed }) => (<AntDesign style={{ color: pressed ? '#008298' : 'black'}} name="arrowleft" size={24} color="black" />)}
          </Pressable>
          : undefined
          }
          <Searchbar onPressIn={() => {navigation.navigate('Search');setCurrentScreen("Search")}} style={styles.searchBar} iconColor="black" placeholder="Search Amazon" />
        </View>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 6,
    paddingTop: 24,
    flexDirection: 'row'
  },
  searchBar: {
    flex: 9,
    margin: 9, 
    borderRadius: 7
  }
})