import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  BackHandler,
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { List } from "react-native-paper";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";

import BottomMenu from "../Components/BottomNavigationMenu";
import SearchBar from "../Components/SearchBar";
import { NavBarContext } from "../Contexts/NavBarContext";

export default function Settings({ navigation }) {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(true);

  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(NavBarContext);
  const { credentials, setCredentials } = useContext(NavBarContext);
  const { credentialsAdded, setCredentialsAdded } = useContext(NavBarContext);
  const { name, setName } = useContext(NavBarContext);

  useEffect(() => {
    const backAction = () => {
      setCurrentScreen(previousScreens.current[previousScreens.current.length - 1]);
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    setCurrentScreen("Settings");

    return () => backHandler.remove();
  }, []);

  const signOutAlert = () =>
    Alert.alert(
      "ConFirm Sign Out",
      name + ", you are signing out of your Amazon apps on this device.",
      [
        {
          text: "SIGN OUT",
          onPress: () => {
            setLoggedIn(false);
            setCredentialsAdded(false);
            navigation.navigate("LoggedOut");
          },
          style: "cancel",
        },
        { text: "Cancel", onPress: () => console.log("OK Pressed") },
      ]
    );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 14, flexDirection: "row", alignItems: "flex-start" }}>
        <View style={{ flex: 1 }}>
          <SearchBar navigation={navigation} />
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
                        flexDirection: "column",
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
                          <Text style={{ paddingLeft: 15, fontSize: 16 }}>Shope by Department</Text>
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
                                paddingHorizontal: 15,
                                paddingTop: 10,
                                borderRadius: 10,
                                paddingVertical: 12,

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

                                paddingVertical: 10,
                                borderRadius: 10,
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

                                paddingVertical: 10,
                                borderRadius: 10,
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

                        flexDirection: "column",
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
                          <Text style={{ paddingLeft: 15, fontSize: 16 }}>Settings</Text>
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
                                paddingHorizontal: 15,
                                paddingTop: 13,
                                borderRadius: 10,
                                paddingVertical: 12,
                                marginTop: 5,
                              }}
                            >
                              <Text style={{ fontSize: 15 }}>Country & Language 🇺🇸</Text>
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
                          {loggedIn && (
                            <TouchableOpacity onPress={() => {}} styles={{}}>
                              <View
                                style={{
                                  paddingHorizontal: 15,
                                  paddingVertical: 10,
                                  borderRadius: 10,
                                }}
                              >
                                <Text style={{ fontSize: 15 }}>Alexa</Text>
                              </View>
                            </TouchableOpacity>
                          )}
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
                          {loggedIn && (
                            <View>
                              <TouchableOpacity onPress={() => {}} styles={{}}>
                                <View
                                  style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                  }}
                                >
                                  <Text style={{ fontSize: 15 }}>AmazonSmile</Text>
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
                                  <Text style={{ fontSize: 15 }}>1-Click settings</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}

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
                          {loggedIn && (
                            <View>
                              <TouchableOpacity onPress={() => {}} styles={{}}>
                                <View
                                  style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                  }}
                                >
                                  <Text style={{ fontSize: 15 }}>Switch Accounts</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  signOutAlert();
                                }}
                                styles={{}}
                              >
                                <View
                                  style={{
                                    paddingHorizontal: 15,
                                    paddingVertical: 10,
                                    borderRadius: 10,
                                  }}
                                >
                                  <Text style={{ fontSize: 15 }}>Not {name}? Sign Out</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          )}
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

                        flexDirection: "column",
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
                          <Text style={{ paddingLeft: 15, fontSize: 16 }}>Customer Services</Text>
                        </View>
                        <View style={{}}>
                          <AntDesign style={{}} name="right" size={15} />
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                {!loggedIn && (
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

                          flexDirection: "column",
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
                            <Text style={{ paddingLeft: 15, fontSize: 16 }}>Sign In</Text>
                          </View>
                          <View style={{}}>
                            <AntDesign style={{}} name="right" size={15} />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </ScrollView>
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgba(226,234,234,100)",
          height: 6,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      ></View>
      <View
        style={{
          backgroundColor: "rgba(226,234,234,100)",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 25,
            width: "100%",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <View
              style={{
                marginHorizontal: 3,
                paddingHorizontal: 12,
                borderColor: "#d9dcdc",
                borderWidth: 1,
                padding: 8,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text>Orders</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <View
              style={{
                marginHorizontal: 3,
                paddingHorizontal: 12,
                borderColor: "#d9dcdc",
                borderWidth: 1,
                padding: 8,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text>Buy Again</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <View
              style={{
                marginHorizontal: 3,
                paddingHorizontal: 12,
                borderColor: "#d9dcdc",
                borderWidth: 1,
                padding: 8,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text>Account</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <View
              style={{
                marginHorizontal: 3,
                paddingHorizontal: 12,
                borderColor: "#d9dcdc",
                borderWidth: 1,
                padding: 8,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text>lists</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  lis: {
    backgroundColor: "white",
  },
});
