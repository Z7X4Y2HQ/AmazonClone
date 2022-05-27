import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Searchbar } from 'react-native-paper'

export default TopSearchBar = ({navigation}) => (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
        <View style={{paddingLeft: 6, paddingRight: 6, paddingTop: 24}}>
          <Searchbar onPressIn={() => navigation.push('Search')} style={{margin: 9, borderRadius: 7}} iconColor="black" placeholder="Search Amazon" />
        </View>
    </LinearGradient>
)