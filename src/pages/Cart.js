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

import Productsdata from "../assets/Data/data.json";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Cart({ route, navigation }) {
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
            {emptyCart && (
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    alignItems: "center",
                    flex: 0.8,
                    borderBottomWidth: 1,
                    borderBottomColor: "#f2f2f2",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      width: 250,
                      height: 250,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ height: 300, width: 300, resizeMode: "center" }}
                      source={require("../assets/Images/cart.png")}
                    ></Image>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                      Your Flip Mart cart is Ready
                    </Text>
                    <Text style={{ color: "#646564" }}>
                      {subheadings[Math.floor(0 + Math.random() * 6)]}
                    </Text>
                  </View>
                  <View style={{ marginTop: 15 }}>
                    <Text style={{ color: "#458090" }}>Shop today's deals</Text>
                  </View>
                  <View style={{ alignItems: "center", marginTop: 30, width: "100%" }}>
                    <Pressable
                      onPress={() => navigation.navigate("LoginScreen")}
                      style={{
                        backgroundColor: "#fdd031",
                        borderWidth: 0.5,
                        borderColor: "#e5e7e8",
                        elevation: 2,
                        borderRadius: 8,
                        padding: 14,
                        color: "black",
                        width: "95%",
                        alignItems: "center",
                        marginBottom: 15,
                      }}
                    >
                      <Text>Sign in to your account</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => navigation.navigate("LoginScreen")}
                      style={{
                        backgroundColor: "#fff",
                        borderWidth: 0.5,
                        borderColor: "#e5e7e8",
                        borderRadius: 8,
                        elevation: 2,
                        padding: 14,
                        color: "black",
                        width: "95%",
                        alignItems: "center",
                        marginBottom: 15,
                      }}
                    >
                      <Text>Sign up now</Text>
                    </Pressable>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    borderTopWidth: 1,
                    borderTopColor: "#f2f2f2",
                    alignItems: "center",
                    marginTop: 14,
                  }}
                >
                  <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{
                      borderColor: "#e5e7e8",
                      backgroundColor: "#fdd031",
                      borderRadius: 8,
                      elevation: 2,
                      padding: 14,
                      color: "black",
                      width: "95%",
                      alignItems: "center",
                      marginTop: 30,
                      marginBottom: 35,
                    }}
                  >
                    <Text>Continue Shopping </Text>
                  </Pressable>
                </View>
              </View>
            )}
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
