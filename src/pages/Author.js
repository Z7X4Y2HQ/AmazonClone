import React, { useContext, useEffect } from "react";
import {
  Text,
  FlatList,
  BackHandler,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/Feather";

import BottomMenu from "../Components/BottomNavigationMenu";
import resumeShopping from "../assets/Data/random.json";
import { NavBarContext } from "../Contexts/NavBarContext";
import Divider from "../Components/Divider";

export default function Author({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext);
  const { credentials, setCredentials } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(NavBarContext);
  const { name, setName } = useContext(NavBarContext);

  useEffect(() => {
    const backAction = () => {
      setCurrentScreen(previousScreens.current[previousScreens.current.length - 1]);
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    setCurrentScreen("Author");

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 14 }}>
        <View style={styles.innerMain}>
          <View style={styles.topHeader}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={styles.headerLogo}
                source={require("../assets/Images/amazon_black.png")}
              ></Image>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={() => navigation.navigate("Notifications")}>
                <Feather style={{ paddingRight: 20 }} name="bell" size={24} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Search")}>
                <Feather style={{ paddingRight: 10 }} name="search" size={24} />
              </Pressable>
            </View>
          </View>
          <ScrollView>
            <LinearGradient
              style={{ paddingHorizontal: 3 }}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["#fff", "#94dfd8", "#94dfda"]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <Text style={styles.signInHeading}>
                  Hello, <Text style={{ fontWeight: "bold" }}>{name}</Text>
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("Profile")}
                  style={{
                    borderRadius: 50,
                    padding: 3,
                    backgroundColor: "#abb7b7",
                    borderWidth: 3,
                    borderColor: "white",
                    marginRight: 12,
                  }}
                >
                  <Image
                    style={{ height: 40, width: 40, resizeMode: "contain" }}
                    source={require("../assets/Images/userIcon.png")}
                  />
                </Pressable>
              </View>
            </LinearGradient>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly", paddingBottom: 10 }}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("YourOrder");
                  }}
                  style={{
                    backgroundColor: "#fafafa",
                    paddingVertical: 12,
                    width: "46%",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#d9e1e1",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 15 }}>Your Orders</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate("BuyAgain");
                  }}
                  style={{
                    backgroundColor: "#fafafa",
                    paddingVertical: 12,
                    width: "46%",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#d9e1e1",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 15 }}>Buy Again</Text>
                </Pressable>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <Pressable
                  style={{
                    backgroundColor: "#fafafa",
                    paddingVertical: 12,
                    width: "46%",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#d9e1e1",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 15 }}>Your Account</Text>
                </Pressable>
                <Pressable
                  style={{
                    backgroundColor: "#fafafa",
                    paddingVertical: 12,
                    width: "46%",
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: "#d9e1e1",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 15 }}>Your Lists</Text>
                </Pressable>
              </View>
            </View>
            <Pressable style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 16 }}>
                Your Orders
              </Text>
              <Text style={{ color: "#6c6c6c", fontSize: 15 }}>Hi, you have no recent orders.</Text>
            </Pressable>
            <View style={{ alignItems: "center", paddingBottom: 12 }}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                  setCurrentScreen("Home");
                }}
                style={{
                  paddingVertical: 14,
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "#e3e7e5",
                  width: "91%",
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>Return to the Homepage</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>Keep Shopping for</Text>
                </View>
                <View
                  style={{ flexDirection: "row", width: "50%", justifyContent: "space-around" }}
                >
                  <Text style={{ color: "#27788c" }}>Edit</Text>
                  <Text>|</Text>
                  <Text style={{ color: "#27788c" }}>Browsing History</Text>
                </View>
              </View>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={resumeShopping}
                  renderItem={({ item }) => (
                    <Pressable
                      onPress={() => {
                        navigation.navigate("ProductPage", item);
                      }}
                      style={{ marginRight: 10, marginTop: 14 }}
                    >
                      <View
                        style={{
                          borderWidth: 1,
                          borderColor: "#e2e5e4",
                          borderRadius: 7,
                          width: 130,
                          height: 130,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ height: 100, width: 100, resizeMode: "contain" }}
                          source={{ uri: item.images[0] }}
                        />
                      </View>
                      <View style={{ flex: 1, width: 130 }}>
                        <Text style={{ fontSize: 13, paddingVertical: 4 }} numberOfLines={1}>
                          {item.description}
                        </Text>
                      </View>
                    </Pressable>
                  )}
                />
              </View>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 20, paddingVertical: 8, paddingTop: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 16 }}>
                Your Lists
              </Text>
              <Text style={{ color: "#6c6c6c", fontSize: 15 }}>You Haven't created any lists</Text>
            </View>
            <View style={{ alignItems: "center", paddingBottom: 12 }}>
              <Pressable
                style={{
                  paddingVertical: 14,
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "#e3e7e5",
                  width: "91%",
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>Create a List</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Your Account</Text>
            </View>
            <View style={{ alignItems: "center", paddingBottom: 12 }}>
              <ScrollView horizontal>
                <Pressable
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                    marginLeft: 21,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Manage gift card balance
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Your Payments
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Your Subscibe & Save
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Manage Prime Membership
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate("YourOrder");
                  }}
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Your orders
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    paddingVertical: 12,
                    borderWidth: 1,
                    borderRadius: 7,
                    borderColor: "#e3e7e5",
                    marginHorizontal: 4,
                  }}
                >
                  <Text style={{ paddingHorizontal: 12, fontSize: 15, textAlign: "center" }}>
                    Memberships & subscriptions
                  </Text>
                </Pressable>
              </ScrollView>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Gift Card Balance: $0.00</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                paddingBottom: 12,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Pressable
                style={{
                  paddingVertical: 14,
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "#e3e7e5",
                  width: "43%",
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>Redeem Gift Card</Text>
              </Pressable>
              <Pressable
                style={{
                  paddingVertical: 14,
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "#e3e7e5",
                  width: "43%",
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>Reload Balance</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 20, paddingVertical: 8, paddingTop: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingBottom: 16 }}>Buy Again</Text>
              <Text style={{ color: "#6c6c6c", fontSize: 15 }}>
                See what others are reordering on Buy Again
              </Text>
            </View>
            <View style={{ alignItems: "center", paddingBottom: 12 }}>
              <Pressable
                onPress={() => {
                  navigation.navigate("BuyAgain");
                }}
                style={{
                  paddingVertical: 14,
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "#e3e7e5",
                  width: "91%",
                }}
              >
                <Text style={{ fontSize: 15, textAlign: "center" }}>Visit Buy Again</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ padding: 40 }}></View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  innerMain: {
    flex: 1,
    justifyContent: "flex-start",
  },
  topHeader: {
    backgroundColor: "#94dfda",
    paddingTop: 36,
    paddingLeft: 6,
    paddingRight: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 8,
  },
  headerLogo: {
    height: 30,
    width: 90,
    marginLeft: 8,
  },
  signInHeading: {
    fontSize: 22,
    color: "#2d4247",
    textAlign: "left",
    paddingHorizontal: 14,
  },
  button: {
    borderWidth: 0.5,
    borderRadius: 3,
    padding: 14,
    color: "black",
    width: "94%",
    alignItems: "center",
  },
  signInPerks: {
    flex: 1,
    marginHorizontal: 12,
    paddingVertical: 15,
    flexDirection: "row",
  },
  perksImage: {
    height: 70,
    width: 70,
    marginVertical: 22,
    marginLeft: 20,
  },
  perksText: {
    fontSize: 17,
    marginLeft: 25,
    height: 75,
  },
});
