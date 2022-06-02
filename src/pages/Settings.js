import React, { useState, useContext, useEffect } from "react";
import { Text, View, BackHandler, Pressable, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { List } from "react-native-paper";
import { FontAwesome, Feather, AntDesign} from '@expo/vector-icons';

import BottomMenu from '../Components/BottomNavigationMenu'
import SearchBar from "../Components/SearchBar";
import { NavBarContext } from "../Contexts/NavBarContext";

export default function Settings({ navigation }) {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);
  
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext)

  useEffect(() => {
    const backAction = () => {
      setCurrentScreen(previousScreens.current[previousScreens.current.length - 1])
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
     
    setCurrentScreen("Settings")

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <SearchBar navigation={navigation}/> 
          <LinearGradient
        style={{ flex: 1 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#fff", "#94dfd8", "#94dfda"]}
      >
        <ScrollView>
          <View style={styles.main}>
            <View style={{ marginTop: 12, paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setExpanded(!expanded);
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderColor: "#839a9a",
                    borderWidth: 1,
                    backgroundColor: "white",
                    marginBottom: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    // opacity: 0.9,
                    flexDirection: "column",

                    // alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ paddingLeft: 15, fontSize: 16 }}>
                        Shope by Department
                      </Text>
                    </View>
                    <View style={{}}>
                      <AntDesign style={{}} name="right" size={15} />
                    </View>
                  </View>
                  {expanded && (
                    <>
                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            // backgroundColor: "white",
                            paddingHorizontal: 15,
                            paddingTop: 10,
                            borderRadius: 10,
                            paddingVertical: 12,
                            // backgroundColor:'red',
                            marginTop: 5,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Arts & Craft</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Automative</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Books</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Computer</Text>
                          {/* <AntDesign
                   style={{ paddingRight: 20 }}
                   name="right"
                   size={15}
                 /> */}
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                            // backgroundColor:'red'
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Electronics</Text>
                          {/* <AntDesign
                   style={{ paddingRight: 20 }}
                   name="right"
                   size={15}
                 /> */}
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            // paddingTop: 18,
                            // paddingBottom: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                            // backgroundColor:'red',
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Men's Fashion</Text>
                          {/* <AntDesign
                   style={{ paddingRight: 20 }}
                   name="right"
                   size={15}
                 /> */}
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            // paddingTop: 18,
                            // paddingBottom: 10,
                            paddingVertical: 10,
                            borderRadius: 10,
                            // backgroundColor:'red',
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Health</Text>
                          {/* <AntDesign
                   style={{ paddingRight: 20 }}
                   name="right"
                   size={15}
                 /> */}
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {/* settings */}
            <View style={{ marginTop: 12, paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  setExpanded1(!expanded1);
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderColor: "#839a9a",
                    borderWidth: 1,
                    backgroundColor: "white",
                    marginBottom: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    // opacity: 0.9,
                    flexDirection: "column",

                    // alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ paddingLeft: 15, fontSize: 16 }}>
                        Settings
                      </Text>
                    </View>
                    <View style={{}}>
                      <AntDesign style={{}} name="right" size={15} />
                    </View>
                  </View>
                  {expanded1 && (
                    <>
                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            // backgroundColor: "white",
                            paddingHorizontal: 15,
                            paddingTop: 10,
                            borderRadius: 10,
                            paddingVertical: 12,
                            // backgroundColor:'red',
                            marginTop: 5,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>
                            Country & Language{" "}
                          </Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Notifcations</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Permissions</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => {}} styles={{}}>
                        <View
                          style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            borderRadius: 10,
                          }}
                        >
                          <Text style={{ fontSize: 15 }}>Legal & About</Text>
                          {/* <AntDesign
                   style={{ paddingRight: 20 }}
                   name="right"
                   size={15}
                 /> */}
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {/* Customer services */}
            {/* Customer services */}
            <View style={{ marginTop: 12, paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderColor: "#839a9a",
                    borderWidth: 1,
                    backgroundColor: "white",
                    marginBottom: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    // opacity: 0.9,
                    flexDirection: "column",

                    // alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ paddingLeft: 15, fontSize: 16 }}>
                        Customer Services
                      </Text>
                    </View>
                    <View style={{}}>
                      <AntDesign style={{}} name="right" size={15} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* SIgn In services */}
            <View style={{ marginTop: 12, paddingHorizontal: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    borderColor: "#839a9a",
                    borderWidth: 1,
                    backgroundColor: "white",
                    marginBottom: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 10,
                    // opacity: 0.9,
                    flexDirection: "column",

                    // alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ paddingLeft: 15, fontSize: 16 }}>
                        Sign In
                      </Text>
                    </View>
                    <View style={{}}>
                      <AntDesign style={{}} name="right" size={15} />
                    </View>
                  </View>
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
        <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Orders</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Buy Again</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
          <View style={{marginHorizontal: 3, paddingHorizontal:12, borderColor: '#d9dcdc', borderWidth: 1, padding: 8, borderRadius: 10, marginBottom:10}} >
            <Text>Account</Text>
          </View>
        </Pressable>
        <Pressable onPress={()=>{navigation.navigate('LoginScreen')}}>
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