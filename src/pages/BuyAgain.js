import { useEffect, useRef, useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  BackHandler,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign, Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { NavBarContext } from "../Contexts/NavBarContext";
import BottomMenu from "../Components/BottomNavigationMenu";
import Divider from "../Components/Divider";
import featured from "../assets/Data/data.json";
import Productsdata from "../assets/Data/FakeData.json";
import random from "../assets/Data/random.json";
import Laptops from "../assets/Data/Laptops.json";
import Gaming from "../assets/Data/Gaming.json";
import Mobile from "../assets/Data/Mobiles.json";

export default function BuyAgain({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "white",
          flex: 14,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <View style={{ flex: 1 }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#81d8e3", "#93dfd9", "#a5e7cf"]}
          >
            <View style={styles.searchBarContainer}>
              <Pressable
                style={{ marginTop: 22, paddingHorizontal: 8 }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                {({ pressed }) => (
                  <AntDesign
                    style={{ color: pressed ? "#008298" : "black" }}
                    name="arrowleft"
                    size={24}
                    color="black"
                  />
                )}
              </Pressable>
              <Searchbar
                onPressIn={() => {
                  navigation.navigate("Search");
                  setCurrentScreen("Search");
                }}
                style={styles.searchBar}
                iconColor="black"
                placeholder="Search Amazon"
              />
            </View>
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Buy Again</Text>
            </View>
          </LinearGradient>
          <ScrollView>
            <View
              style={{
                paddingHorizontal: 14,
                paddingVertical: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}
              >
                <Ionicons style={{ paddingRight: 10 }} name="search" size={16} color="#232323" />
                <TextInput style={{ backgroundColor: "white" }} placeholder="Search all orders" />
              </View>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 14, paddingVertical: 8 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                There are no recommended items for you to buy again at this time. Check Your Orders
                for items you previously purchased.
              </Text>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate("YourOrder");
                    setCurrentScreen("Account");
                  }}
                  style={{
                    borderColor: "#e5e7e8",
                    backgroundColor: "#fdd031",
                    borderRadius: 8,
                    elevation: 2,
                    padding: 14,
                    color: "black",
                    width: "98%",
                    alignItems: "center",
                    marginVertical: 14,
                  }}
                >
                  <Text>Your Orders</Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                padding: 12,
                backgroundColor: "#d6dbdb",
                borderBottomWidth: 3,
                borderBottomColor: "#e2e6e7",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Discover</Text>
            </View>
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Frequently repurchased in Home
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={featured}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("ProductPage", item);
                    }}
                    style={{ margin: 10, paddingRight: 30, paddingLeft: 10 }}
                  >
                    <View>
                      <Image
                        style={{ height: 140, width: 140, resizeMode: "contain" }}
                        source={{ uri: item.images[0] }}
                      />
                    </View>
                    {expanded && (
                      <View style={{ flex: 1, width: 140 }}>
                        <View
                          style={{ flexDirection: "row", paddingVertical: 4, paddingBottom: 8 }}
                        >
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star-half-empty" color={"#ffa41d"}>
                            <Text style={{ fontSize: 10, color: "black" }}> {item.reviews}</Text>
                          </FontAwesome>
                        </View>
                        <Text numberOfLines={2} style={{ fontSize: 13 }}>
                          {item.description}
                        </Text>
                        <View>
                          <Text style={{ fontSize: 13, color: "#995037" }}>
                            $ {item.newPrice}.{item.cents}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ paddingVertical: 2, fontSize: 11, paddingBottom: 50 }}>
                            Get is as soon as{" "}
                            <Text style={{ fontWeight: "bold" }}>Tue, Jun 12</Text>
                          </Text>
                        </View>
                        <Pressable
                          onPress={() => {
                            setCartItemsNum((cartItemsNum) => (cartItemsNum = cartItemsNum + 1));
                            setEmptyCart(false);
                            setAddedToCart(item);
                          }}
                          style={{
                            width: 140,
                            elevation: 3,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 50,
                            backgroundColor: "#fed813",
                          }}
                        >
                          <Text style={{ fontSize: 12, textAlign: "center" }}>Add to cart</Text>
                        </Pressable>
                      </View>
                    )}
                  </Pressable>
                )}
              />
              <Pressable
                onPress={() => {
                  setExpanded(!expanded);
                }}
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  paddingTop: 10,
                  alignItems: "center",
                }}
              >
                <AntDesign name={expanded ? "up" : "down"} size={18} color="#2b6776" />
                <Text style={{ color: "#2b6776" }}>{expanded ? " Show less" : " Show more"}</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Frequently repurchased in Laptops
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={Productsdata}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("ProductPage", item);
                    }}
                    style={{ margin: 10, paddingRight: 30, paddingLeft: 10 }}
                  >
                    <View>
                      <Image
                        style={{ height: 140, width: 140, resizeMode: "contain" }}
                        source={{ uri: item.images[0] }}
                      />
                    </View>
                    {expanded2 && (
                      <View style={{ flex: 1, width: 140 }}>
                        <View
                          style={{ flexDirection: "row", paddingVertical: 4, paddingBottom: 8 }}
                        >
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star-half-empty" color={"#ffa41d"}>
                            <Text style={{ fontSize: 10, color: "black" }}> {item.reviews}</Text>
                          </FontAwesome>
                        </View>
                        <Text numberOfLines={2} style={{ fontSize: 13 }}>
                          {item.description}
                        </Text>
                        <View>
                          <Text style={{ fontSize: 13, color: "#995037" }}>
                            $ {item.newPrice}.{item.cents}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ paddingVertical: 2, fontSize: 11, paddingBottom: 50 }}>
                            Get is as soon as{" "}
                            <Text style={{ fontWeight: "bold" }}>Tue, Jun 12</Text>
                          </Text>
                        </View>
                        <Pressable
                          onPress={() => {
                            setCartItemsNum((cartItemsNum) => (cartItemsNum = cartItemsNum + 1));
                            setEmptyCart(false);
                            setAddedToCart(item);
                          }}
                          style={{
                            width: 140,
                            elevation: 3,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 50,
                            backgroundColor: "#fed813",
                          }}
                        >
                          <Text style={{ fontSize: 12, textAlign: "center" }}>Add to cart</Text>
                        </Pressable>
                      </View>
                    )}
                  </Pressable>
                )}
              />
              <Pressable
                onPress={() => {
                  setExpanded2(!expanded2);
                }}
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  paddingTop: 10,
                  alignItems: "center",
                }}
              >
                <AntDesign name={expanded2 ? "up" : "down"} size={18} color="#2b6776" />
                <Text style={{ color: "#2b6776" }}>{expanded2 ? " Show less" : " Show more"}</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Frequently repurchased in Tech
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={random}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("ProductPage", item);
                    }}
                    style={{ margin: 10, paddingRight: 30, paddingLeft: 10 }}
                  >
                    <View>
                      <Image
                        style={{ height: 140, width: 140, resizeMode: "contain" }}
                        source={{ uri: item.images[0] }}
                      />
                    </View>
                    {expanded3 && (
                      <View style={{ flex: 1, width: 140 }}>
                        <View
                          style={{ flexDirection: "row", paddingVertical: 4, paddingBottom: 8 }}
                        >
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star-half-empty" color={"#ffa41d"}>
                            <Text style={{ fontSize: 10, color: "black" }}> {item.reviews}</Text>
                          </FontAwesome>
                        </View>
                        <Text numberOfLines={2} style={{ fontSize: 13 }}>
                          {item.description}
                        </Text>
                        <View>
                          <Text style={{ fontSize: 13, color: "#995037" }}>
                            $ {item.newPrice}.{item.cents}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ paddingVertical: 2, fontSize: 11, paddingBottom: 50 }}>
                            Get is as soon as{" "}
                            <Text style={{ fontWeight: "bold" }}>Tue, Jun 12</Text>
                          </Text>
                        </View>
                        <Pressable
                          onPress={() => {
                            setCartItemsNum((cartItemsNum) => (cartItemsNum = cartItemsNum + 1));
                            setEmptyCart(false);
                            setAddedToCart(item);
                          }}
                          style={{
                            width: 140,
                            elevation: 3,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 50,
                            backgroundColor: "#fed813",
                          }}
                        >
                          <Text style={{ fontSize: 12, textAlign: "center" }}>Add to cart</Text>
                        </Pressable>
                      </View>
                    )}
                  </Pressable>
                )}
              />
              <Pressable
                onPress={() => {
                  setExpanded3(!expanded3);
                }}
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  paddingTop: 10,
                  alignItems: "center",
                }}
              >
                <AntDesign name={expanded3 ? "up" : "down"} size={18} color="#2b6776" />
                <Text style={{ color: "#2b6776" }}>{expanded3 ? " Show less" : " Show more"}</Text>
              </Pressable>
            </View>
            <Divider />
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Frequently repurchased in Gaming
              </Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={Gaming}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("ProductPage", item);
                    }}
                    style={{ margin: 10, paddingRight: 30, paddingLeft: 10 }}
                  >
                    <View>
                      <Image
                        style={{ height: 140, width: 140, resizeMode: "contain" }}
                        source={{ uri: item.images[0] }}
                      />
                    </View>
                    {expanded4 && (
                      <View style={{ flex: 1, width: 140 }}>
                        <View
                          style={{ flexDirection: "row", paddingVertical: 4, paddingBottom: 8 }}
                        >
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star" color={"#ffa41d"} />
                          <FontAwesome size={10} name="star-half-empty" color={"#ffa41d"}>
                            <Text style={{ fontSize: 10, color: "black" }}> {item.reviews}</Text>
                          </FontAwesome>
                        </View>
                        <Text numberOfLines={2} style={{ fontSize: 13 }}>
                          {item.description}
                        </Text>
                        <View>
                          <Text style={{ fontSize: 13, color: "#995037" }}>
                            $ {item.newPrice}.{item.cents}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ paddingVertical: 2, fontSize: 11, paddingBottom: 50 }}>
                            Get is as soon as{" "}
                            <Text style={{ fontWeight: "bold" }}>Tue, Jun 12</Text>
                          </Text>
                        </View>
                        <Pressable
                          onPress={() => {
                            setCartItemsNum((cartItemsNum) => (cartItemsNum = cartItemsNum + 1));
                            setEmptyCart(false);
                            setAddedToCart(item);
                          }}
                          style={{
                            width: 140,
                            elevation: 3,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 50,
                            backgroundColor: "#fed813",
                          }}
                        >
                          <Text style={{ fontSize: 12, textAlign: "center" }}>Add to cart</Text>
                        </Pressable>
                      </View>
                    )}
                  </Pressable>
                )}
              />
              <Pressable
                onPress={() => {
                  setExpanded4(!expanded4);
                }}
                style={{
                  flexDirection: "row",
                  paddingLeft: 12,
                  paddingTop: 10,
                  alignItems: "center",
                }}
              >
                <AntDesign name={expanded4 ? "up" : "down"} size={18} color="#2b6776" />
                <Text style={{ color: "#2b6776" }}>{expanded4 ? " Show less" : " Show more"}</Text>
              </Pressable>
            </View>
            <Divider />
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

let styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 6,
    paddingTop: 24,
    flexDirection: "row",
  },
  searchBar: {
    flex: 9,
    margin: 9,
    borderRadius: 7,
  },
});
