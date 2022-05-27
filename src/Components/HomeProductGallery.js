import React from 'react'
import { View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'


export default HomeCategorylist = ({JSONdata, numColumns ,navigation}) => (
  <FlatList data={JSONdata} numColumns={numColumns} renderItem={({ item }) => (
    <View style={[styles.product, styles.center]}>
      <TouchableOpacity onPress={() => {navigation.push("ProductPage", item)}}>
        <View style={[styles.ImageContainer, styles.center]}>
          <Image style={[styles.image, styles.center]} source={{ uri: item.images[0] }}/>
        </View> 
      </TouchableOpacity>
    </View>
  )}/>
)

const styles = StyleSheet.create({
  product: {
    flex: 1
  },
  ImageContainer: {
    backgroundColor: "white", 
    height: 130, 
    width: 130
  },
  image: {
    height: 120, 
    width: 120, 
    resizeMode: "contain"
  },
  center: {
    justifyContent: "center", 
    alignItems: "center", 
  }
})