import React,{ useContext } from 'react';
import { StyleSheet, View, Pressable} from 'react-native';
import { Ionicons, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { NavBarContext } from '../Contexts/NavBarContext';


export default function BottomMenu({navigation}){
  const {currentScreen} = useContext(NavBarContext);
  
  return(
    <View style={styles.BottomMenu}>
            <Pressable onPress={() => navigation.push('Home')}>
              {({ pressed }) => ( <AntDesign style={{ color: pressed || currentScreen == "Home" ? '#008298' : 'black', margin: 8}} name="home" size={26} color="black" />)}
            </Pressable>
            <Pressable onPress={() => navigation.push('Account')}>
              {({ pressed }) => (
              <FontAwesome  style={{ color: pressed || currentScreen == "Account" ? '#008298' : 'black', margin: 8}} name="user-o" size={24} color="black" />)}
            </Pressable>
            <Pressable onPress={() => navigation.push('Cart')}>
              {({ pressed }) => (
              <Ionicons  style={{ color: pressed || currentScreen == "Cart" ? '#008298' : 'black', margin: 8}} name="ios-cart-outline" size={27} color="black" />)}
            </Pressable>
            <Pressable onPress={() => navigation.push('Settings')}>
              {({ pressed }) => (
              <Entypo  style={{ color: pressed || currentScreen == "Settings" ? '#008298' : 'black', margin: 8}} name="menu" size={26} color="black" />)}
            </Pressable>  
      </View>
)};

const styles = StyleSheet.create({
    BottomMenu: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 2,
      borderTopColor: "#d6dbda",
      backgroundColor: "white"
    },
  });
  