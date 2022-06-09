import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Feather, Ionicons, FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { NavBarContext } from "../Contexts/NavBarContext";

export default function BottomMenu({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { cartItemsNum, setCartItemsNum } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(NavBarContext);

  return (
    <View style={styles.BottomMenu}>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
          setCurrentScreen("Home");
        }}
      >
        <AntDesign
          style={{
            color:
              currentScreen == "Home" || currentScreen == "ProductPageFromHome"
                ? "#008298"
                : "black",
            margin: 8,
          }}
          name="home"
          size={26}
          color="black"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          if (loggedIn == true) {
            navigation.navigate("Author");
          } else {
            navigation.navigate("Account");
            setCurrentScreen("Account");
          }
        }}
      >
        <FontAwesome
          style={{ color: currentScreen == "Account" ? "#008298" : "black", margin: 8 }}
          name="user-o"
          size={24}
          color="black"
        />
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Cart");
          setCurrentScreen("Cart");
        }}
      >
        <View>
          <Feather
            style={{ color: currentScreen == "Cart" ? "#008298" : "black", margin: 8 }}
            name="shopping-cart"
            size={25}
            color="black"
          />
          <Text
            style={{
              marginLeft: cartItemsNum >= 10 ? 17 : 19.9,
              bottom: "52.5%",
              color: "white",
              fontSize: cartItemsNum >= 10 ? 10 : 12,
              fontWeight: "bold",
            }}
          >
            {cartItemsNum}
          </Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Settings");
          setCurrentScreen("Settings");
        }}
      >
        <Entypo
          style={{ color: currentScreen == "Settings" ? "#008298" : "black", margin: 8 }}
          name="menu"
          size={26}
          color="black"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomMenu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderTopColor: "#d6dbda",
    backgroundColor: "white",
  },
});
