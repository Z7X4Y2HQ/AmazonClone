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

  useEffect(() => {
    const backAction = () => {
      setCurrentScreen(previousScreens.current[previousScreens.current.length - 1]);
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  });

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 14, flexDirection: "row", alignItems: "flex-start" }}>
        <View style={{ flex: 1 }}>
          <SearchBar navigation={navigation} />
          <ScrollView>
            <LocationIndicator />
            <View>
              {!emptyCart && (
                <View style={{ flex: 1 }}>
                  <Text style={{ paddingHorizontal: 14, color: "black" }}>
                    <View style={{ paddingVertical: 12, flexDirection: "row" }}>
                      <Text style={{ lineHeight: 28, fontSize: 19 }}>Subtotal </Text>
                      <Text style={{ fontWeight: "bold", lineHeight: 21, fontSize: 12 }}>$</Text>
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        {addedToCart.newPrice}
                      </Text>
                      <Text style={{ fontWeight: "bold", lineHeight: 21, fontSize: 12 }}>
                        {addedToCart.cents}
                      </Text>
                    </View>
                  </Text>
                  <View style={{ paddingHorizontal: 14 }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("LoginScreen");
                      }}
                      style={{
                        elevation: 3,
                        alignItems: "center",
                        borderColor: "#fed813",
                        borderWidth: 1,
                        marginVertical: 6,
                        paddingVertical: 14,
                        borderRadius: 8,
                        backgroundColor: "#fed813",
                      }}
                    >
                      <Text style={{ fontSize: 15 }}>
                        Proceed to checkout {"("}
                        {cartItemsNum} item{cartItemsNum > 1 ? <Text>s</Text> : null}
                        {")"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      paddingVertical: 12,
                      paddingHorizontal: 14,
                      borderBottomWidth: 0.8,
                      borderColor: "#eaeaea",
                      flexDirection: "row",
                    }}
                  >
                    <Checkbox
                      style={{ borderColor: "#9a9e9e", borderWidth: 1 }}
                      value={isChecked}
                      onValueChange={() => {
                        setChecked(!isChecked);
                      }}
                      color={isChecked ? "#007186" : undefined}
                    />
                    <Text> Send as a gift. Easy Returns</Text>
                  </View>
                  <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={{ uri: addedToCart.images[0] }} />
                    <View style={styles.productInfoContainer}>
                      <Text numberOfLines={2} style={styles.productTitle}>
                        {addedToCart.description}
                      </Text>
                      <View style={styles.priceContainer}>
                        <View style={{ flexDirection: "row" }}>
                          <Text style={{ fontWeight: "bold", lineHeight: 21, fontSize: 12 }}>
                            $
                          </Text>
                          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                            {addedToCart.newPrice}
                          </Text>
                          <Text style={{ fontWeight: "bold", lineHeight: 21, fontSize: 12 }}>
                            {addedToCart.cents}
                          </Text>
                        </View>
                      </View>
                      <View style={{ paddingLeft: 5, flexDirection: "column" }}>
                        <Text style={{ fontSize: 14, color: "#0d830c" }}>In Stock</Text>
                        <Text style={{ fontSize: 14, color: "black" }}>
                          <Text style={{ fontWeight: "bold" }}>Color:</Text> Harmony Blue/Chiffon
                          Pink
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      borderColor: "#eaeaea",
                      borderBottomWidth: 0.8,
                      paddingBottom: 10,
                    }}
                  >
                    <View style={{ paddingLeft: 14, padding: 5 }}>
                      <View style={{ flexDirection: "row" }}>
                        <LinearGradient
                          style={{ borderTopLeftRadius: 3, borderBottomLeftRadius: 3 }}
                          start={{ x: 0, y: 1 }}
                          end={{ x: 0, y: 0 }}
                          colors={["#e8eaee", "#eff1f3", "#f6f9fe"]}
                        >
                          <Pressable
                            onPress={() => {
                              if (cartItemsNum <= 1) {
                                setCartItemsNum(0);
                                setEmptyCart(!emptyCart);
                                setAddedToCart([]);
                                navigation.navigate("Cart");
                              } else {
                                setCartItemsNum(
                                  (cartItemsNum) => (cartItemsNum = cartItemsNum - 1)
                                );
                              }
                            }}
                            style={{
                              borderWidth: 0.8,
                              borderColor: "gray",
                              paddingVertical: 5.2,
                              paddingHorizontal: 11,
                              borderTopLeftRadius: 3,
                              borderBottomLeftRadius: 3,
                            }}
                          >
                            {cartItemsNum == 1 && <Feather name="trash" size={18} color="black" />}
                            {cartItemsNum > 1 && <Entypo name="minus" size={17.5} color="black" />}
                          </Pressable>
                        </LinearGradient>
                        <View
                          style={{
                            borderWidth: 0.8,
                            borderColor: "gray",
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            paddingVertical: 3,
                            paddingHorizontal: 20,
                          }}
                        >
                          <Text style={{ fontSize: 15, color: "#21697a" }}>{cartItemsNum}</Text>
                        </View>
                        <LinearGradient
                          style={{ borderTopRightRadius: 3, borderBottomRightRadius: 3 }}
                          start={{ x: 0, y: 1 }}
                          end={{ x: 0, y: 0 }}
                          colors={["#e8eaee", "#eff1f3", "#f6f9fe"]}
                        >
                          <Pressable
                            onPress={() => {
                              setCartItemsNum((cartItemsNum) => (cartItemsNum = cartItemsNum + 1));
                            }}
                            style={{
                              borderWidth: 0.8,
                              borderColor: "gray",
                              paddingVertical: 4,
                              paddingHorizontal: 8,
                              borderTopRightRadius: 3,
                              borderBottomRightRadius: 3,
                            }}
                          >
                            <Entypo name="plus" size={20} color="black" />
                          </Pressable>
                        </LinearGradient>
                      </View>
                    </View>
                    <View style={{ flexDirection: "column", paddingTop: 5 }}>
                      <View style={{ flexDirection: "row" }}>
                        <Pressable
                          onPress={() => {
                            setCartItemsNum((cartItemsNum) => (cartItemsNum = 0));
                            setEmptyCart(!emptyCart);
                            setAddedToCart([]);
                            navigation.navigate("Cart");
                          }}
                          style={{
                            elevation: 3,
                            marginLeft: 25,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: "#e2e4e3",
                            backgroundColor: "white",
                          }}
                        >
                          <Text style={{ fontSize: 12 }}>Delete</Text>
                        </Pressable>
                        <Pressable
                          style={{
                            elevation: 3,
                            marginLeft: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: "#e2e4e3",
                            backgroundColor: "white",
                          }}
                        >
                          <Text style={{ fontSize: 12 }}>Save for later</Text>
                        </Pressable>
                      </View>
                      <View style={{ paddingTop: 6, paddingRight: 10 }}>
                        <Text style={{ textAlign: "right", color: "#2c6674", fontSize: 12 }}>
                          Compare with similar items
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              {!emptyCart && (
                <View>
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingRight: 14,
                      borderColor: "#eaeaea",
                      borderBottomWidth: 0.8,
                      paddingVertical: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ fontWeight: "bold", paddingBottom: 2, fontSize: 16 }}>
                        Returns are easy
                      </Text>
                      <Text>30-day returns on millions of items</Text>
                    </View>
                    <View>
                      <Image
                        style={{ height: 50, width: 50 }}
                        source={require("../assets/Images/returns.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      backgroundColor: "#e9edee",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Recommendations based on items in your cart
                      </Text>
                      <FlatList
                        horizontal
                        data={featured}
                        renderItem={({ item }) => (
                          <Pressable
                            onPress={() => {
                              navigation.navigate("ProductPage", item);
                            }}
                            style={{ margin: 10 }}
                          >
                            <View>
                              <Image
                                style={{ height: 140, width: 140, resizeMode: "contain" }}
                                source={{ uri: item.images[0] }}
                              />
                            </View>
                            <View style={{ flex: 1, width: 140 }}>
                              <Text numberOfLines={2}>{item.description}</Text>
                              <View style={{ flexDirection: "row", paddingVertical: 4 }}>
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star-half-empty" color={"#ffa41d"}>
                                  <Text style={{ fontSize: 11, color: "#046f84" }}>
                                    {" "}
                                    {item.reviews}
                                  </Text>
                                </FontAwesome>
                              </View>
                              <View>
                                <Text style={{ fontSize: 13 }}>
                                  $ {item.newPrice}.{item.cents}
                                </Text>
                              </View>
                              <View>
                                <Text style={{ paddingVertical: 2, fontSize: 10 }}>
                                  $51.58 shipping
                                </Text>
                              </View>
                              <Pressable
                                onPress={() => {
                                  setCartItemsNum(
                                    (cartItemsNum) => (cartItemsNum = cartItemsNum + 1)
                                  );
                                  setEmptyCart(false);
                                  setAddedToCart(item);
                                }}
                                style={{
                                  width: 80,
                                  elevation: 3,
                                  paddingHorizontal: 10,
                                  paddingVertical: 6,
                                  borderRadius: 5,
                                  backgroundColor: "#fed813",
                                }}
                              >
                                <Text style={{ fontSize: 12 }}>Add to cart</Text>
                              </Pressable>
                            </View>
                          </Pressable>
                        )}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: 20,
                        backgroundColor: "white",
                        paddingHorizontal: 10,
                        paddingVertical: 10,
                      }}
                    >
                      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Featured items you may like
                      </Text>
                      <FlatList
                        horizontal
                        data={recc}
                        renderItem={({ item }) => (
                          <Pressable
                            onPress={() => {
                              navigation.navigate("ProductPage", item);
                            }}
                            style={{ margin: 10 }}
                          >
                            <View>
                              <Image
                                style={{ height: 140, width: 140, resizeMode: "contain" }}
                                source={{ uri: item.images[0] }}
                              />
                            </View>
                            <View style={{ flex: 1, width: 140 }}>
                              <Text numberOfLines={2}>{item.description}</Text>
                              <View style={{ flexDirection: "row", paddingVertical: 4 }}>
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star" color={"#ffa41d"} />
                                <FontAwesome size={13} name="star-half-empty" color={"#ffa41d"}>
                                  <Text style={{ fontSize: 11, color: "#046f84" }}>
                                    {" "}
                                    {item.reviews}
                                  </Text>
                                </FontAwesome>
                              </View>
                              <View>
                                <Text style={{ fontSize: 13 }}>
                                  $ {item.newPrice}.{item.cents}
                                </Text>
                              </View>
                              <View>
                                <Text style={{ paddingVertical: 2, fontSize: 10 }}>
                                  $51.58 shipping
                                </Text>
                              </View>
                              <Pressable
                                onPress={() => {
                                  setCartItemsNum(
                                    (cartItemsNum) => (cartItemsNum = cartItemsNum + 1)
                                  );
                                  setEmptyCart(false);
                                  setAddedToCart(item);
                                }}
                                style={{
                                  width: 80,
                                  elevation: 3,
                                  paddingHorizontal: 10,
                                  paddingVertical: 6,
                                  borderRadius: 5,
                                  backgroundColor: "#fed813",
                                }}
                              >
                                <Text style={{ fontSize: 12 }}>Add to cart</Text>
                              </Pressable>
                            </View>
                          </Pressable>
                        )}
                      />
                    </View>
                  </View>
                </View>
              )}
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
