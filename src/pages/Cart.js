import React, { useContext, useEffect } from "react";
import { Text, ScrollView, StyleSheet, View, Image, Pressable } from "react-native";
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';

import BottomMenu from '../Components/BottomNavigationMenu'
import TopSearchBar from "../Components/TopSearchBar";
import LocationIndicator from "../Components/LocationIndicator";

import { NavBarContext } from "../Contexts/NavBarContext";


export default function Cart({ navigation }) {
  const { setCurrentScreen } = useContext(NavBarContext);

  useEffect(() => {
    setCurrentScreen("Cart")
  }, [])

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <TopSearchBar navigation={navigation} />
          <ScrollView>
            <LocationIndicator />
            <View style={{flex: 1}}>
              <View style={{ alignItems: "center", flex: 0.8, borderBottomWidth: 1, borderBottomColor: "#f2f2f2" }}>
                <View style={{ backgroundColor: "white", width: 250, height: 250, justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ height: 300, width: 300, resizeMode: "center" }}
                    source={require("../assets/Images/cart.png")}></Image>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                    Your Amazon cart is Ready
                  </Text>
                  <Text style={{ color: '#646564' }} >Nothing in here. Only possibilities</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={{ color: "#458090" }}>
                    Shop today's deals
                  </Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 30, width: "100%" }}>
                  <Pressable onPress={() => navigation.push('LoginScreen')} style={{ backgroundColor: "#fdd031", borderWidth: 0.5, borderColor: '#e5e7e8', elevation: 2, borderRadius: 8, padding: 14, color: "black", width: "95%", alignItems: "center", marginBottom: 15 }}>
                    <Text>Sign in to your account</Text>
                  </Pressable>
                  <Pressable onPress={() => navigation.push('LoginScreen')} style={{ backgroundColor: "#fff", borderWidth: 0.5, borderColor: '#e5e7e8', borderRadius: 8, elevation: 2, padding: 14, color: "black", width: "95%", alignItems: "center", marginBottom: 15 }}>
                    <Text>Sign up now</Text>
                  </Pressable>
                </View>
              </View>
              <View style={{ flex: 0.3, borderTopWidth: 1, borderTopColor: "#f2f2f2", alignItems: "center", marginTop: 14 }}>
                <Pressable onPress={() => navigation.push('Home')} style={{ borderColor: '#e5e7e8', backgroundColor: "#fdd031", borderRadius: 8, elevation: 2, padding: 14, color: "black", width: "95%", alignItems: "center", marginTop: 30, marginBottom: 35 }}>
                  <Text>Continue Shopping </Text>
                </Pressable>
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
  mainContainer: {
    flex: 1, 
    backgroundColor: 'white'
  }
});