import { Text, FlatList, StyleSheet, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomMenu from '../Components/BottomNavigationMenu'
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Productsdata from '../assets/FakeData.json' 
import data from '../assets/random.json' 
import Laptops from '../assets/Laptops.json'
import Gaming from '../assets/Gaming.json'
import Mobile from '../assets/Mobiles.json'

const {width} = Dimensions.get("window");
const height = width * 101/115 ;

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
  return (
    <View style={{flex:1}}>
      <View style={{flex:14, backgroundColor: "white", flexDirection: 'row', alignItems: 'flex-start'}}>
        <View style={{flex:1}}>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
            <View style={{paddingLeft: 6, paddingRight: 6, paddingTop: 24}}>
              <Searchbar onPressIn={() => navigation.push('Search')} style={{margin: 9, borderRadius: 7}} iconColor="black" placeholder="Search Amazon" />
            </View>
          </LinearGradient>
          <ScrollView>
            <LinearGradient style={{padding:10, justifyContent: 'center'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#b6e8f0', '#bfece8', '#caf0e1']}>
              <View style={{flex:1, flexDirection: 'row'}}>
                <SimpleLineIcons style={{paddingLeft: 4}} name="location-pin" size={16} color="black" /> 
                <Text style={{fontSize:12}}> Deliver to Pakistan</Text>
              </View>
            </LinearGradient>
            <ScrollView style={{elevation:50, width}} pagingEnabled showsHorizontalScrollIndicator={false} horizontal>
              {
                headerImage.map((image, index) => (
                   <Image key={index} source={{uri: image}} style={{width, height, resizeMode: 'contain'}} />
                ))
              }
            </ScrollView>
            <ScrollView style={{elevation:300, position: 'absolute', top: 280,width}} showsHorizontalScrollIndicator={false} horizontal>
                {
                headerOver.map((image, index) => (
                  
                  <Image 
                  key={index}
                  source={{uri: image}}
                  style={{height: width/2, width: 130, margin: 8, borderRadius: 3, resizeMode: 'contain'}} />
                  ))
                }
            </ScrollView>
            <View style={{backgroundColor: "white", paddingTop: 80}}>
              <Text style={{ margin: 16, fontSize: 18}}>
                International top sellers
              </Text>
              <FlatList data={Productsdata} renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.push('ProductPage', item)}>
                    <View style={{flex:1, flexDirection: 'row', paddingBottom:5}}>
                      <Image style={{flex:1, height: 100, width: 100, resizeMode: 'contain', margin: 5}} source={{uri: item.images[0]}}/>
                      <View style={{flex:2, flexDirection: 'column'}}>
                        <Text numberOfLines={3} style={{margin: 5, fontSize:15}} >{item.description}</Text>
                        <View style={{flex:1, flexDirection: 'row'}}>
                          <Text style={{lineHeight:28, fontSize:16}}>$</Text>
                          <Text style={{fontSize:24}}>{item.newPrice}</Text>
                          <Text style={{fontSize:16, lineHeight:28}}>00</Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                </View>
              )}
              />
            </View>
            <View>
              <Pressable onPress={() => navigation.push('List')}>
                <Image style={{width, height: width/2.5, borderWidth: 5, borderColor: '#d4dbdb', resizeMode: 'contain'}} source={require('../assets/img4.png')}/>
              </Pressable>
            </View>
            <View>
              <Text style={{ marginHorizontal: 16, marginTop: 16, fontSize: 18}}>
                Laptops
              </Text>
              <FlatList data={Laptops} numColumns={2} renderItem={({ item }) => (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                  <TouchableOpacity onPress={() => {navigation.push("ProductPage", item)}}>
                    <View style={{backgroundColor: "white", height: 200, width: 200, justifyContent: "center", alignItems: "center"}}>
                      <Image style={styles.imageThumbnail} source={{ uri: item.images[0] }}/>
                    </View>
                  </TouchableOpacity>
                </View>
              )}/>
            </View>
            <View style={{borderTopWidth: 4, borderColor: '#e3e5e4'}}></View>
            <View style={{backgroundColor: "white"}}>
              <Text style={{ margin: 16, fontSize: 18}}>
                Gaming Accessories
              </Text>
              <FlatList data={Gaming} renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.push('ProductPage', item)}>
                    <View style={{flex:1, flexDirection: 'row', paddingBottom:5}}>
                      <Image style={{flex:1, height: 100, width: 100, resizeMode: 'contain', margin: 5}} source={{uri: item.images[0]}}/>
                      <View style={{flex:2, flexDirection: 'column'}}>
                        <Text numberOfLines={3} style={{margin: 5, fontSize:15}} >{item.description}</Text>
                        <View style={{flex:1, flexDirection: 'row'}}>
                          <Text style={{lineHeight:28, fontSize:16}}>$</Text>
                          <Text style={{fontSize:24}}>{item.newPrice}</Text>
                          <Text style={{fontSize:16, lineHeight:28}}>00</Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                </View>
              )}
              />
            </View>
            <View style={{borderTopWidth: 4, borderColor: '#e3e5e4'}}></View>
            <View>
              <Text style={{ marginHorizontal: 16, marginTop: 16, fontSize: 18}}>
                Modern use electonics
              </Text>
              <FlatList data={data} numColumns={3} renderItem={({ item }) => (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                  <TouchableOpacity onPress={() => {navigation.push("ProductPage", item)}}>
                    <View style={{backgroundColor: "white", height: 130, width: 130, justifyContent: "center", alignItems: "center"}}>
                      <Image style={{justifyContent: "center", alignItems: "center", height: 120, width: 120, resizeMode: "contain"}} source={{ uri: item.images[0] }}/>
                    </View>
                  </TouchableOpacity>
                </View>
              )}/>
            </View>
            <View style={{borderTopWidth: 4, borderColor: '#e3e5e4'}}></View>
            <View style={{backgroundColor: "white"}}>
              <Text style={{ margin: 16, fontSize: 18}}>
              Mobile phones
              </Text>
              <FlatList data={Mobile} renderItem={({ item }) => (
                <View>
                  <Pressable onPress={() => navigation.push('ProductPage', item)}>
                    <View style={{flex:1, flexDirection: 'row', paddingBottom:5}}>
                      <Image style={{flex:1, height: 100, width: 100, resizeMode: 'contain', margin: 5}} source={{uri: item.images[0]}}/>
                      <View style={{flex:2, flexDirection: 'column'}}>
                        <Text numberOfLines={3} style={{margin: 5, fontSize:15}} >{item.description}</Text>
                        <View style={{flex:1, flexDirection: 'row'}}>
                          <Text style={{lineHeight:28, fontSize:16}}>$</Text>
                          <Text style={{fontSize:24}}>{item.newPrice}</Text>
                          <Text style={{fontSize:16, lineHeight:28}}>00</Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                </View>
              )}
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  imageThumbnail: { justifyContent: "center", alignItems: "center", height: 170, width: 170, resizeMode: "contain",
  },
});