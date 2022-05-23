import { Animated, useWindowDimensions, Text, StyleSheet, ScrollView, Modal, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useState, useRef} from 'react';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import BottomMenu from '../Components/BottomNavigationMenu'
import { Entypo, Foundation, SimpleLineIcons, FontAwesome, EvilIcons, AntDesign} from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Divider from '../Components/Divider';

export default function ProductPage({ route, navigation }) {

  const items = route.params;
  
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  const [qty, setQty] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); 
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [{OSPrice, OSPriceCent}, setOSPrice] = useState({OSPrice: "1,572", OSPriceCent: "89"});
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [detailsSeeMore, setDetailsSeeMore] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible);}}>
          <Pressable onPress={() => setModalVisible(!modalVisible)} style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <View style={{flex: 1, marginVertical:254, margin: 110, backgroundColor: '#f1f1f1',  borderRadius: 10}}>
              <Pressable onPress={() => setModalVisible(true)} style={{flex:1}}>
                <View style={{flex:1, padding: 10, paddingHorizontal: 20, justifyContent: "space-between", alignItems: "flex-start", flexDirection: 'row'}}>
                  <Text style={{fontWeight: 'bold'}}>Qty:</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Entypo name="cross" size={20} color="black" />
                  </Pressable>
                </View>
              </Pressable>
              <View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column'}}>
                <Pressable onPress={() => {setQty(qty => qty = 1);setModalVisible(!modalVisible)}}>
                  <Text style={{borderTopWidth: 1, borderTopColor: '#e8e8e8', padding: 12}}>1</Text>
                </Pressable>
                <Pressable onPress={() => {setQty(qty => qty = 2);setModalVisible(!modalVisible)}}>
                  <Text style={{borderTopWidth: 1, borderTopColor: '#e8e8e8', padding: 12}}>2</Text>
                </Pressable>
                <Pressable onPress={() => {setQty(qty => qty = 3);setModalVisible(!modalVisible)}}>
                  <Text style={{borderTopWidth: 1, borderTopColor: '#e8e8e8', padding: 12}}>3</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
      </Modal>
      <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
            <View style={{ flexDirection: 'row', paddingLeft: 5, paddingRight: 6, paddingTop: 24 }}>
                <Pressable style={{marginTop:22}} onPress={() => navigation.goBack()}>
                  {({ pressed }) => (<AntDesign style={{ color: pressed ? '#008298' : 'black'}} name="arrowleft" size={24} color="black" />)}
                </Pressable>
              <Searchbar onPressIn={() => navigation.push('Search')} style={{ flex: 9, margin: 9, borderRadius: 7 }} iconColor="black" placeholder="Search Amazon" />
            </View>
          </LinearGradient>
          <ScrollView style={{flex: 1}}>
            <LinearGradient style={{padding:10, justifyContent: 'center'}} start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#b6e8f0', '#bfece8', '#caf0e1']}>
              <View style={{flex:1, flexDirection: 'row'}}>
                <SimpleLineIcons style={{paddingLeft:4}} name="location-pin" size={16} color="black" /> 
                <Text style={{fontSize:12}}> Deliver to Pakistan</Text>
              </View>
            </LinearGradient>
            <View style={{flex:1,backgroundColor: 'white', flexDirection: 'row', padding: 4, justifyContent: 'space-between' ,alignItems: 'center', paddingHorizontal: 14}}>
             <Pressable>
                <Text style={{color: '#046f84', fontSize: 12}}>
                  {items.title}
                </Text>
              </Pressable>
                <View style={{flexDirection: "row"}}>
                    <FontAwesome size={12} name="star" color={"#ffa41d"} />
                    <FontAwesome size={12} name="star" color={"#ffa41d"} />
                    <FontAwesome size={12} name="star" color={"#ffa41d"} />
                    <FontAwesome size={12} name="star" color={"#ffa41d"} />
                    <FontAwesome size={12} name="star-half-empty" color={"#ffa41d"}><Text style={{fontSize: 11, color: '#046f84'}}>  {items.reviews}</Text></FontAwesome>
                </View>
            </View> 
            <View>
              <Text style={{fontSize: 12, color: '#626363', backgroundColor: 'white', paddingHorizontal: 14}}>
              {items.description}
              </Text>
            </View>
            <View style={styles.imgcontainer}>
              <View style={styles.container}>
                <View style={styles.scrollContainer}>
                  <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                      {
                        nativeEvent: {
                          contentOffset: {
                            x: scrollX
                          }
                        }
                      }
                    ], {useNativeDriver: false})}
                    scrollEventThrottle={1}
                  >
                    {items.images.map((image, imageIndex) => {
                      return (
                        <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
                          <Image style={[styles.card]} source={{ uri: image }}/>
                        </View>
                      );
                    })}
                  </ScrollView>
                  <View style={styles.indicatorContainer}>
                    {items.images.map((image, imageIndex) => {
                      const width = scrollX.interpolate({
                        inputRange: [
                          windowWidth * (imageIndex - 1),
                          windowWidth * imageIndex,
                          windowWidth * (imageIndex + 1)
                        ],
                        outputRange: [8, 16, 8],
                        extrapolate: "clamp"
                      });
                      return (
                        <Animated.View
                          key={imageIndex}
                          style={[styles.normalDot, { width }]}
                        />
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
            <Divider />
            <View>
              <Pressable onPress={()=> {setIsExpanded(!isExpanded)}}>
                <View style={{flex:1, justifyContent: 'space-between', paddingHorizontal: 14, paddingVertical: 10, flexDirection: 'row',  backgroundColor: 'white'}}>
                  <View style={{flex:10,  flexDirection: 'row'}}>
                    <Text>Operating System: {isExpanded && <Text style={{fontWeight: 'bold'}}> Win 11</Text>} {!isExpanded && <Text style={{fontWeight: 'bold', lineHeight:23}}>{'\n'}Win 11</Text>}</Text>
                  </View>
                  <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {!isExpanded && <AntDesign name="down" size={20} color="black" />}
                    {isExpanded && <AntDesign name="up" size={20} color="black" />}
                  </View>
                </View>
              </Pressable>
              {isExpanded &&
                <View style={{flex: 1, backgroundColor: 'white', flexDirection: 'row'}}>
                  <View style={{paddingLeft: 14, backgroundColor: 'white'}}>
                    <Pressable onPress={()=> {setSelectedCardIndex(0);setOSPrice(currentState => ({...currentState, OSPrice: "1,572", OSPriceCent: "89"}))}} style={{marginVertical:10, borderRadius: 3, borderWidth: 1, borderColor: selectedCardIndex == 0 ? '#b98046' : '#bdbfc3', height: 125, width:140}}>
                      <Text style={{padding: 10, backgroundColor: selectedCardIndex == 0 ? '#fcf8f7' : '#f9f9f9', borderBottomWidth: 0.5, borderBottomColor: '#bdbfc3', color :'black'}}>Win 11</Text>
                      <Text style={{paddingVertical: 10, paddingLeft: 10, color :'black'}}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                          <Text style={{lineHeight:21, fontSize:10}}>$</Text>
                          <Text style={{fontSize:18}}>1572</Text>
                          <Text style={{lineHeight:21, fontSize:10}}>89</Text>
                        </View>
                        <Text style={{fontSize: 13, color: '#0d830c'}}>{'\n'}In Stock.</Text>
                      </Text>
                    </Pressable>
                  </View>
                  <View style={{paddingLeft: 14, backgroundColor: 'white'}}>
                    <Pressable onPress={()=> {setSelectedCardIndex(1);setOSPrice(currentState => ({...currentState, OSPrice: "1,425", OSPriceCent: "79"}))}} style={{marginVertical:10, borderRadius: 3, borderWidth: 1, borderColor: selectedCardIndex == 1 ? '#b98046' : '#bdbfc3', height: 125, width:140}}>
                      <Text style={{padding: 10, backgroundColor: selectedCardIndex == 1 ? '#fcf8f7' : '#f9f9f9', borderBottomWidth: 0.5, borderBottomColor: '#bdbfc3', color :'black'}}>Windows 10</Text>
                      <Text style={{paddingVertical: 10, paddingLeft: 10, color :'black'}}>
                        <View style={{flex:1, flexDirection: 'row'}}>
                          <Text style={{lineHeight:21, fontSize:10}}>$</Text>
                          <Text style={{fontSize:18}}>1425</Text>
                          <Text style={{ lineHeight:21, fontSize:10}}>79</Text>
                        </View>
                        <Text style={{fontSize: 13, color: '#982f17'}}>{'\n'}Only 14 left in stock   - order soon.</Text>
                      </Text>
                    </Pressable>
                  </View>
                </View>
              }
            </View>
            <Divider />
            <View style={styles.detail}>
              <View style={{flex:1, justifyContent: 'flex-start' ,flexDirection:'row', paddingTop: 12, paddingLeft: 14}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <Text style={{lineHeight:30, fontSize:10}}>$</Text>
                  <Text style={{fontSize:32}}>{OSPrice}</Text>
                  <Text style={{lineHeight:30, fontSize:10}}>{OSPriceCent}</Text>
                </View>
                <View style={{ flex:3, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingTop: 12}}>
                  <Text style={{lineHeight: 18, fontSize: 12, textDecorationLine: 'line-through',color: '#969696'}}>$1,849.99</Text> 
                  <Text> </Text><Foundation name="info" size={20} color="#969696"/>
                  <Text style={{lineHeight: 18, fontSize: 12, color: '#969696', fontStyle: 'italic'}}> Save $277.10 (15%)</Text>
                </View>
              </View>
              <Text style={{ paddingHorizontal: 14, color: "#626363" }}>
                $203.47 Shipping & Import Fees Deposit to Pakistan
              </Text>
              <Text style={{ paddingHorizontal: 14, color: "#046f84" }}>Details {'\n'}</Text>
              <Text style={{ paddingHorizontal: 14, color: "black" }}>Delivery <Text style={{fontWeight:'bold'}}>May 4 - 17</Text></Text>
              <View style={{ flexDirection: "row", marginVertical: 15, paddingLeft: 9 }}>
                <EvilIcons name="location" size={25} color="black" />
                <Text style={{ color: "#046f84", paddingLeft: 4 }}> Delivery in Pakistan</Text>
              </View>
              <Text style={{paddingHorizontal: 14, fontSize: 16, color: '#0b6d0c'}}>In Stock.</Text>
              <View style={{flex:1, flexDirection: 'row', paddingVertical:16, paddingHorizontal: 14, alignItems: 'center'}}>
                <Pressable onPress={() => setModalVisible(true)} style={{elevation:3, backgroundColor: '#eff2f1', borderRadius:7, borderWidth:1, borderColor: '#d0d2d4'}}>
                  <Text style={{fontSize:12, paddingHorizontal:8, paddingVertical:8}}>Qty:  {qty}   <AntDesign name="down" size={14} color="black" /></Text>
                </Pressable>
              </View>
              <View style={{paddingHorizontal:14}}>
                <TouchableOpacity onPress={() => {navigation.push('Cart')}} style={styles.cart}>
                  <Text>Add to Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.push('LoginScreen')}} style={styles.buy}>
                  <Text>Buy Now</Text>
                </TouchableOpacity>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft:2, paddingBottom: 12}}>
                  <FontAwesome name="lock" size={20} color="#999999" />
                  <Text style={{color:'#2e899a', fontSize: 15}}>    Secure transaction</Text>
                </View>
              </View>
                <Text style={{paddingHorizontal:14, paddingBottom: 10, fontSize: 15}}>Ships from and sold by Amazon.com</Text>
            </View>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
              <View style={{borderTopWidth: 1, paddingBottom: 10, width: "93%", borderColor: '#ededed'}}></View>
            </View>
            <View style={{paddingHorizontal: 14, backgroundColor: 'white'}}>
              <Text style={{paddingBottom: 10, fontWeight: 'bold', fontSize: 15}}>Add an Accessory:</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingLeft: 14, backgroundColor: 'white'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10, borderTopLeftRadius: 3, borderBottomLeftRadius: 3, borderWidth: 1, borderColor: '#bdbfc3', height: 100, width:"14.5%"}}>                
                <View>
                  <Checkbox style={{padding: 8, borderColor: '#9a9e9e', borderWidth: 1}} value={isChecked} onValueChange={setChecked} color={isChecked ? '#007186' : undefined}/>
                </View>
              </View>
              <View style={{paddingLeft:18, justifyContent: 'center', alignItems: 'flex-start', marginTop:10, borderTopRightRadius: 3, borderBottomRightRadius: 3, borderBottomWidth: 0, borderLeftWidth: 0, borderWidth: 1, borderColor: '#bdbfc3', height: 100, width:"82%"}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{flex: 7, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 15}}>Microsoft 365 Family | Premium Office Apps | Up to 6 Users | 3 Months Free, p...</Text>
                    <Text style={{fontSize: 15, color: '#b44429', paddingTop: 5}}>$89.99</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <AntDesign name="right" size={20} color="black" />
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', paddingLeft: 14, backgroundColor: 'white'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:10, borderTopLeftRadius: 3, borderBottomLeftRadius: 3, borderWidth: 1, borderColor: '#bdbfc3', height: 100, width:"14.5%"}}>                
                <View>
                  <Checkbox style={{padding: 8, borderColor: '#9a9e9e', borderWidth: 1}} value={isChecked2} onValueChange={setChecked2} color={isChecked2 ? '#007186' : undefined}/>
                </View>
              </View>
              <View style={{paddingLeft: 18, justifyContent: 'center', alignItems: 'center', marginBottom:10,  borderTopRightRadius: 3, borderBottomRightRadius: 3, borderTopWidth: 0, borderLeftWidth: 0, borderWidth: 1, borderColor: '#bdbfc3', height: 100, width:"82%"}}>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{flex: 7, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 15}}>Microsoft 365 Personal | Premium Office Apps | 1 User, Up to 5 Devices | 3 Mon...</Text>
                    <Text style={{fontSize: 15, color: '#b44429', paddingTop: 5}}>$69.99</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <AntDesign name="right" size={20} color="black" />
                  </View>
                </View>
              </View>
            </View>
            <View style={{backgroundColor: 'white', paddingHorizontal: 14}}>
              <Text style={{fontSize: 15}}>Return policy: <Text style={{color: '#15798b'}}>Eligible for Return, Refund or Replacement within 30 days of receipt</Text></Text>
              <Text style={{fontSize: 15, paddingVertical: 5}}>Support: <Text style={{color: '#15798b'}}>Free Amazon tech support included</Text></Text>
              <Text style={{fontSize: 16, paddingVertical: 10, color: '#15798b'}}>ADD TO LIST</Text>
            </View>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingTop: 6, paddingBottom: 50}}>
              <View style={{borderTopWidth: 1, paddingBottom: 10, width: "93%", borderColor: '#ededed'}}></View>
            </View>
            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderColor: '#e3e5e4'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Other sellers on Amazon</Text>
              <Pressable>
                <View style={{flex:1, justifyContent: 'space-between',paddingVertical: 10, flexDirection: 'row',  backgroundColor: 'white'}}>
                  <View style={{flex:10}}>
                    <Text style={{fontSize: 15, paddingVertical: 8}}>Compare New (2) from</Text>
                    <Text style={{fontSize: 18}}>$1,572.89</Text>
                  </View>
                  <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <AntDesign name="right" size={20} color="black" />
                  </View>
                </View>
              </Pressable>
            </View>
            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderColor: '#e3e5e4'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}></Text>
              <Text style={{fontSize: 15}}>Available at a lower price from <Text style={{color: '#15798b'}}>other sellers </Text>that may not offer free Prime Shipping.</Text>
            </View>
            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderColor: '#e3e5e4'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}> Details </Text>
                <View style={{flex:1, flexDirection: 'row'}}>
                  <View style={{flex:1, margin:5, justifyContent: 'space-between'}}>
                    <Text style={{color: '#575958', marginVertical: 6}} >Brand</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >Series</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >Screen Size</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >Color</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >Hard Disk Size</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >CPU Model</Text>
                    <Text style={{color: '#575958', marginVertical: 6}} >Ram Memory Installed Size</Text>
                    {!detailsSeeMore && <Pressable onPress={() => {setDetailsSeeMore(!detailsSeeMore)}} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                      <AntDesign name="down" size={10} color="black" />
                      <Text style={{color: '#15798b'}}> See more</Text>
                    </Pressable>}
                    {detailsSeeMore &&
                    <View>
                      <Text style={{color: '#575958', marginVertical: 6}} >Operating System</Text>
                      <Text style={{color: '#575958', marginVertical: 6}} >CPU Speed</Text>
                      <Text style={{color: '#575958', marginVertical: 6}} >Card Description</Text>
                      <Pressable onPress={() => {setDetailsSeeMore(!detailsSeeMore)}} style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <AntDesign name="up" size={10} color="black" />
                        <Text style={{color: '#15798b'}}> See less</Text>
                      </Pressable>
                    </View>
                    }
                  </View>
                  <View style={{flex:1, margin:5, justifyContent: 'space-between'}}>
                    <Text style={{marginVertical: 6}} >LG</Text>
                    <Text style={{marginVertical: 6}} >17Z95P-K.AAB8U1</Text>
                    <Text style={{marginVertical: 6}} >17 Inches</Text>
                    <Text style={{marginVertical: 6}} >Black</Text>
                    <Text style={{marginVertical: 6}} >1 TB</Text>
                    <Text style={{marginVertical: 6}} >Core i7 Family</Text>
                    <Text style={{marginVertical: 6}} >16 GB</Text>
                    {!detailsSeeMore && <Text></Text>}
                    {detailsSeeMore &&
                      <>
                        <Text style={{marginVertical: 6}} >Win 11</Text>
                        <Text style={{marginVertical: 6}} >Integrated</Text>
                        <Text style={{marginVertical: 6}} >5 GHz</Text>
                        <Text></Text>
                      </>
                    }
                  </View>
                </View>
            </View>
            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderColor: '#e3e5e4'}}>
              <Text style={{paddingVertical: 7, fontSize: 15}}><Text style={{fontWeight: 'bold'}}>Note: </Text>Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</Text>
            </View>
            <Divider />
            <View style={{paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image style={{width: 100, height: 100, resizeMode: 'contain'}} source={{uri: 'https://m.media-amazon.com/images/I/71iOM0MH+qL._AC_SX679_.jpg'}}/>
              <View style={{flex: 1, paddingTop: 10}}>
                <Text style={{paddingLeft: 20}}  numberOfLines={3}>2022 Latest Dell Inspiron 5000 5510 15.6" FHD (Intel 4-Core i7-11390H, 16GB RAM, 1TB PCIe SSD), 1080p Full HD Business Laptop, Webcam, Thunderbolt 4, Fingerprint Reader, Backlit KB, Windows 11 Pro</Text>
                <View style={{flex:1, flexDirection: 'row', alignItems: 'center',paddingBottom: 20, paddingLeft: 20}}>
                  <Text style={{lineHeight:15, fontSize:10}}>$</Text>
                  <Text style={{fontSize:13}}>1,769.99 </Text>
                  <Entypo style={{}} name="check" size={13} color="#f8981c" />
                  <Text style={{lineHeight: 12 ,color: '#2491be', fontSize: 12, fontWeight: 'bold'}}>prime</Text>
                </View>
              </View>
            </View>




















            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderColor: '#e3e5e4'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Description</Text>
              <Text style={{paddingVertical: 7, fontSize: 15}}>Deliver necessary portability with uncompromising features on the LG gram 17Z95P. It has a huge 17-Inch WQXGA (2560x1600) IPS display while still slim and light enough to take anywhere. At under three pounds and delivering near all day battery life this LG gram is great to carry around for a long day of work. The 17Z95P also impresses with an Intel 11th Generation i7- 1195G7 CPU on the certified Intel Evo Platform with Iris Xe Graphics 16GB RAM a 1TB NVMe SSD and Thunderbolt 4 connectivity. With Windows 11 Home operating system. MobileMark 2014 standard (MobileMark is a trademark of the Business Applications Performance Corporation) Performance level is utilized for comparison purposes only and does not necessarily reflect the battery life that will be achieved Actual battery life will vary from specifications depending on model setup configuration applications used features utilized and power management settings.</Text>
            </View>
            <View style={{borderTopWidth: 4, paddingHorizontal: 14, paddingVertical: 10, backgroundColor: 'white', borderBottomWidth: 4, borderColor: '#e3e5e4'}}>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom: 5}}> Features and Details</Text>
                <View style={{backgroundColor: "white", flex:1}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 20, lineHeight: 23, paddingLeft: 5, paddingRight: 7, color: 'black'}} >{'\u2022'}</Text>
                      <Text style={{marginRight: 15, marginBottom: 4, fontSize: 15}} >17" WQXGA (2560x1600) IPS LCD, with DCI-P3 99% color expression</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 20, lineHeight: 23, paddingLeft: 5, paddingRight: 7, color: 'black'}} >{'\u2022'}</Text>
                      <Text style={{marginRight: 15, marginBottom: 4, fontSize: 15}} >Intel Evo Platform Powered by 11th generation Intel core i7-1195G7 Processor with Intel Xe Graphics delivers performance for high-resolution content creation and editing</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 20, lineHeight: 23, paddingLeft: 5, paddingRight: 7, color: 'black'}} >{'\u2022'}</Text>
                      <Text style={{marginRight: 15, marginBottom: 4, fontSize: 15}} >16GB LPDDR4X 4266mhz RAM delivers a high level of performance for memory-intensive content creation, designing, editing, and multitasking</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 20, lineHeight: 23, paddingLeft: 5, paddingRight: 7, color: 'black'}} >{'\u2022'}</Text>
                      <Text style={{marginRight: 15, marginBottom: 4, fontSize: 15}} >Improve productivity with 1TB PCIe M.2 NVMe SSD for dependable storage accessible in a flash</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 20, lineHeight: 23, paddingLeft: 5, paddingRight: 7, color: 'black'}} >{'\u2022'}</Text>
                      <Text style={{marginRight: 15, marginBottom: 4, fontSize: 15}} >Connect with Confidence: Two USB-C ports with Thunderbolt 4 support, two USB-A 3.2 ports, a full-size HDMI port, a microSD card reader, and a 3.5mm audio jack</Text>
                    </View>
                </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  
  imgcontainer: { justifyContent: "center", alignItems: "center", backgroundColor: "white", paddingVertical: 24},
  
  img: { height: 250, width: 350, resizeMode: "contain",},
  
  detail: { paddingTop: 6, backgroundColor: "white",},
  
  cart: { alignItems: "center", backgroundColor: "#fed813", marginVertical: 6, paddingVertical: 14, borderRadius: 8},
  
  buy: { alignItems: "center", backgroundColor: "#ffa41d", marginVertical: 6, marginBottom: 15, paddingVertical: 14, borderRadius: 8},
  
  container: { flex: 1, paddingTop: 30, backgroundColor: '#fff', alignItems: "center", justifyContent: "center"},
  
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  
  wrapper: { flexDirection: 'row' },
  
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  
  row: {  height: 28  },
  
  text: { textAlign: 'center' },
  
  scrollContainer: { height: 300, alignItems: "center", justifyContent: "center"},
  
  card: { flex: 1, marginVertical: 4, marginHorizontal: 16, borderRadius: 5, overflow: "hidden", alignItems: "center", justifyContent: "center", resizeMode: "contain"},
  
  textContainer: { backgroundColor: "rgba(0,0,0, 0.7)", paddingHorizontal: 24, paddingVertical: 8, borderRadius: 5},
  
  infoText: { color: "white", fontSize: 16, fontWeight: "bold"},
  
  normalDot: { height: 8, width: 8, borderRadius: 4, backgroundColor: "silver", marginHorizontal: 4},
  
  indicatorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center"}

});

