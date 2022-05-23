import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { List } from "react-native-paper";
import BottomMenu from '../Components/BottomNavigationMenu'
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Settings({ navigation }) {
  const [expanded, setExpanded] = useState(true);
  const [expanded1, setExpanded1] = useState(true);
  const [expanded2, setExpanded2] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
            <View style={{ flexDirection: 'row', paddingLeft: 6, paddingRight: 6, paddingTop: 24 }}>
              <Searchbar onPressIn={() => navigation.push('Search')} style={{ flex: 9, margin: 9, borderRadius: 7 }} iconColor="black" placeholder="Search Amazon" />
            </View>
          </LinearGradient>
          <LinearGradient
            style={{ flex: 1 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            colors={["#fff", "#94dfd8", "#94dfda"]}
          >
            <ScrollView>
              <View>
                <View style={{ paddingTop: 15, paddingHorizontal: 10 }}>
                  <List.Accordion
                    title="Shope by Department"
                    theme={{ colors: { primary: "#000" } }}
                    left={(props) => (
                      <FontAwesome style={{}} name="shopping-cart" size={22} />
                    )}
                    // expanded={expanded}
                    onPress={() => {
                      setExpanded(!expanded);
                    }}
                    style={{ paddingLeft: 24 }}
                  >
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Arts & Craft"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Automative"
                    />
                    <List.Item style={styles.lis} onPress={() => { }} title="Baby" />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Books"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Computer"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Electronics"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Men's Fashion"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Health"
                    />
                  </List.Accordion>
                </View>

                <View style={{ paddingTop: 15, paddingHorizontal: 10 }}>
                  <List.Accordion
                    
                    title="Settings"
                    left={(props) => (
                      <Feather style={{}} name="settings" size={22} />
                    )}
                    theme={{ colors: { primary: "#000" } }}
                    // expanded={expanded}
                    onPress={() => {
                      setExpanded1(!expanded1);
                    }}
                    style={{ paddingLeft: 24 }}
                  >
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Country & Language 🇺🇸"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Notifcations"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Permissions"
                    />
                    <List.Item
                      style={styles.lis}
                      onPress={() => { }}
                      title="Legal & About"
                    />
                  </List.Accordion>
                </View>
                <View
                  style={{
                    paddingTop: 15,
                    paddingHorizontal: 10,
                    // backgroundColor: "red",
                  }}
                >
                  <TouchableOpacity style={{}}>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        borderColor: '#839a9a',
                        borderWidth: 1,
                        elevation: 2,
                        paddingVertical: 14,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ paddingLeft: 55, fontSize: 16 }}>Customer Services</Text>
                      <AntDesign
                        style={{ paddingRight: 20 }}
                        name="right"
                        size={15}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    paddingTop: 15,
                    paddingHorizontal: 10,
                    // backgroundColor: "red",
                  }}
                >
                  <TouchableOpacity onPress={()=>{navigation.push('LoginScreen')}}>
                    <View
                      style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        borderColor: '#839a9a',
                        borderWidth: 1,
                        elevation: 2,
                        paddingVertical: 14,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ paddingLeft: 55, fontSize: 16 }}>Sign In</Text>
                      <AntDesign
                        style={{ paddingRight: 20 }}
                        name="right"
                        size={15}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
      <View style={{backgroundColor: 'rgba(226,234,234,100)', height:6, borderBottomLeftRadius: 0, borderBottomRightRadius:0, borderRadius: 10, flexDirection: 'row', justifyContent: 'center'}}></View>
      <View style={{backgroundColor: 'rgba(226,234,234,100)', flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{backgroundColor: 'white', paddingTop: 25, width: '100%', borderTopRightRadius:20, borderTopLeftRadius: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable onPress={()=>{navigation.push('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Orders</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.push('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Buy Again</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.push('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Account</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.push('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>lists</Text>
          </View>
        </Pressable>
      </View>
      </View>  
      <BottomMenu navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  lis: {
    backgroundColor: "white",
  },
});