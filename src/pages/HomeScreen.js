import { useContext, useEffect } from 'react';
import { Text, Pressable, StyleSheet, View, Dimensions, Image, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Productsdata from '../assets/Data/FakeData.json'
import random from '../assets/Data/random.json'
import Laptops from '../assets/Data/Laptops.json'
import Gaming from '../assets/Data/Gaming.json'
import Mobile from '../assets/Data/Mobiles.json'

import BottomMenu from '../Components/BottomNavigationMenu'
import TopSearchBar from '../Components/TopSearchBar';
import HomeProductlist from '../Components/HomeProductList';
import HomeProductGallery from '../Components/HomeProductGallery';
import LocationIndicator from '../Components/LocationIndicator';
import HomeHeadingText from '../Components/HomeHeadingText';

import { NavBarContext } from '../Contexts/NavBarContext';

const { width } = Dimensions.get("window");
const height = width * 101 / 115;

const headerImage = [
  'https://m.media-amazon.com/images/I/51IpWF-q4RL._SR1236,1080_.jpg',
  'https://m.media-amazon.com/images/I/51FkM+rv2BL._SR1236,1080_.jpg',
  'https://m.media-amazon.com/images/I/81Q62pLRIzL._SR1236,1080_.png'
]

const headerOver = [
  'https://i.imgur.com/fPeEUIZ.png',
  'https://m.media-amazon.com/images/I/51c0KsMQLYL._SR270,360_.png',
  'https://m.media-amazon.com/images/I/51BwEB9glsL._SR270,360_.png',
  'https://m.media-amazon.com/images/I/51c0KsMQLYL._SR270,360_.png',
  'https://m.media-amazon.com/images/I/51BwEB9glsL._SR270,360_.png'
]

export default function HomeScreen({ navigation }) {

  const { currentScreen, checkCurrentScreen } = useContext(NavBarContext);

  useEffect(() => {
    checkCurrentScreen("Home")
  })

  return (
    <View style={styles.singleFlex}>
      <View style={[styles.mainHomeContainer, styles.backgroundColorWhite]}>
        <View style={styles.singleFlex}>
          <TopSearchBar navigation={navigation} />
          <ScrollView>
            <LocationIndicator />
            <ScrollView style={styles.headerImageSlider} pagingEnabled showsHorizontalScrollIndicator={false} horizontal>
              {
                headerImage.map((image, index) => (
                  <Image key={index} source={{ uri: image }} style={styles.headerImage} />
                ))
              }
            </ScrollView>
            <ScrollView style={styles.headerCategorySlider} showsHorizontalScrollIndicator={false} horizontal>
              {
                headerOver.map((image, index) => (

                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={styles.headerCategoryImage} />
                ))
              }
            </ScrollView>
            <View style={{paddingTop: 75}} />
            <View style={styles.backgroundColorWhite}>
              <HomeHeadingText text={"International top sellers"} />
              <HomeProductlist JSONdata={Productsdata} navigation={navigation} />
            </View>
            <View>
              <Pressable onPress={() => navigation.push('List')}>
                <Image style={styles.homeListImage} source={require('../assets/Images/img4.png')} />
              </Pressable>
            </View>
            <View>
              <HomeHeadingText text={"Laptops"} />
              <HomeProductGallery JSONdata={Laptops} numColumns={2} navigation={navigation} />
            </View>
            <Divider />
            <View style={styles.backgroundColorWhite}>
            <HomeHeadingText text={"Gaming Accessories"} />
              <HomeProductlist JSONdata={Gaming} navigation={navigation} />
            </View>
            <Divider />
            <View>
              <HomeHeadingText text={"Modern use electonics"} />
              <HomeProductGallery JSONdata={random} numColumns={3} navigation={navigation} />
            </View>
            <Divider />
            <View style={styles.backgroundColorWhite}>
              <HomeHeadingText text={"Mobile phones"} />
              <HomeProductlist JSONdata={Mobile} navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  singleFlex: { 
    flex: 1 
  },
  imageThumbnail: { 
    justifyContent: "center", 
    alignItems: "center", 
    height: 170, 
    width: 170, 
    resizeMode: "contain" 
  },
  mainHomeContainer: { 
    flex: 14, 
    backgroundColor: "white", 
    flexDirection: 'row', 
    alignItems: 'flex-start' 
  },
  headerImageSlider: { 
    elevation: 50, 
    width 
  },
  headerImage: { 
    width, 
    height, 
    resizeMode: 'contain' 
  },
  headerCategorySlider: {
    elevation: 300, 
    position: 'absolute', 
    top: 280, 
    width
  },
  headerCategoryImage: {
    height: width / 2, 
    width: 130, 
    margin: 8, 
    borderRadius: 3, 
    resizeMode: 'contain'
  },
  homeListImage: {
    width, 
    height: width / 2.5, 
    borderWidth: 5, 
    borderColor: '#d4dbdb', 
    resizeMode: 'contain'
  },
  backgroundColorWhite: {
    backgroundColor: 'white'
  }
});