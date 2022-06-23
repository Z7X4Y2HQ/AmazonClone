import React, { useEffect, useContext, useState } from "react";
import {
  Text,
  FlatList,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import featured from "../assets/Data/data.json";
import recc from "../assets/Data/random.json";

import BottomMenu from "../Components/BottomNavigationMenu";

import LocationIndicator from "../Components/LocationIndicator";
import { NavBarContext } from "../Contexts/NavBarContext";
import Divider from "../Components/Divider";

import resumeShopping from "../assets/Data/data.json";

export default function CartLoggedIn({ route, navigation }) {
  const items = route.params;

  const [isChecked, setChecked] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);

  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext);
  const { emptyCart, setEmptyCart } = useContext(NavBarContext);
  const { cartItemsNum, setCartItemsNum } = useContext(NavBarContext);
  const { addedToCart, setAddedToCart } = useContext(NavBarContext);

  useEffect(() => {
    const backAction = () => {
      setCurrentScreen(previousScreens.current[previousScreens.current.length - 1]);
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    setCurrentScreen("Cart");

    return () => backHandler.remove();
  }, []);

  const subheadings = [
    "Echo...Echo...",
    "Nothing in here.. Only possibilities",
    "Zip. Zilch. Nada.",
    "Zip. Zilch. Nada.",
    "Echo...Echo...",
    "Nothing in here.. Only possibilities",
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 14, flexDirection: "row", alignItems: "flex-start" }}>
        <View style={{ flex: 1 }}>
          <SearchBar navigation={navigation} />
          <ScrollView>
            <LocationIndicator />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 170, width: 170, resizeMode: "center" }}
                source={require("../assets/Images/cart.png")}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 13 }}>Your Flip Mart Cart is empty</Text>
                <Text style={{ fontSize: 13, color: "#757777" }}>
                  {subheadings[Math.floor(0 + Math.random() * 6)]}
                </Text>
                <Text style={{ paddingVertical: 12, color: "#287385", fontSize: 13 }}>
                  Pick up where you left off
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 14,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: "#efefef",
              }}
            >
              <View style={{ borderWidth: 1, borderColor: "#efefef", padding: 10 }}>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#993072",
                    fontWeight: "bold",
                    paddingBottom: 2,
                  }}
                >
                  No card, no problem. Pay with cash.
                </Text>
                <Text style={{ textAlign: "center", paddingHorizontal: 14 }}>
                  Select "pay with cash" at checkout and pay at a location near you.
                  <Text style={{ color: "#4881bb" }}> Learn more</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#ebedec",
                paddingHorizontal: 14,
                paddingVertical: 6,
                paddingBottom: 22,
              }}
            >
              <View style={{ backgroundColor: "white" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    paddingHorizontal: 22,
                    paddingTop: 26,
                    paddingBottom: 12,
                  }}
                >
                  Keep Shopping for
                </Text>
                <View style={{ paddingHorizontal: 22 }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={resumeShopping}
                    renderItem={({ item }) => (
                      <Pressable
                        onPress={() => {
                          navigation.navigate("ProductPage", item);
                        }}
                        style={{ marginRight: 10 }}
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
                  <View>
                    <Text style={{ color: "#287385", paddingVertical: 8, paddingBottom: 22 }}>
                      View your browsing History
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                  setCurrentScreen("Home");
                }}
                style={{
                  borderColor: "#e5e7e8",
                  backgroundColor: "#fdd031",
                  borderRadius: 8,
                  elevation: 2,
                  padding: 14,
                  color: "black",
                  width: "95%",
                  alignItems: "center",
                  marginVertical: 14,
                }}
              >
                <Text>Continue Shopping </Text>
              </Pressable>
            </View>
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
  productContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 5,
  },
  productImage: {
    flex: 1,
    marginTop: 16,
    height: 80,
    width: 70,
    resizeMode: "contain",
    margin: 5,
  },
  productInfoContainer: {
    flex: 2.5,
    flexDirection: "column",
  },
  productTitle: {
    margin: 5,
    paddingTop: 8,
    fontSize: 14,
  },
  priceContainer: {
    flex: 1,
    paddingLeft: 5,
  },
  superScriptText: {
    lineHeight: 20,
    fontSize: 11,
    fontWeight: "bold",
  },
});
