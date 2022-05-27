import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SimpleLineIcons } from '@expo/vector-icons';

export default LocationIndicator = () => (
    <LinearGradient style={styles.mainContainer} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#b6e8f0', '#bfece8', '#caf0e1']}>
    <View style={styles.location}>
      <SimpleLineIcons style={{paddingLeft: 4}} name="location-pin" size={16} color="black" /> 
      <Text style={{fontSize:12}}> Deliver to Pakistan</Text>
    </View>
  </LinearGradient>
)
const styles = StyleSheet.create({
  mainContainer: {
    padding:10, 
    justifyContent: 'center'
  },
  location: {
    flex:1, 
    flexDirection: 'row'
  }

})