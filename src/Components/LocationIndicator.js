import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { SimpleLineIcons } from '@expo/vector-icons';

export default LocationIndicator = () => (
    <LinearGradient style={{padding:10, justifyContent: 'center'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#b6e8f0', '#bfece8', '#caf0e1']}>
    <View style={{flex:1, flexDirection: 'row'}}>
      <SimpleLineIcons style={{paddingLeft: 4}} name="location-pin" size={16} color="black" /> 
      <Text style={{fontSize:12}}> Deliver to Pakistan</Text>
    </View>
  </LinearGradient>
)