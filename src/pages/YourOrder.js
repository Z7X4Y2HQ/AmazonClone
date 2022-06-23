import { useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  BackHandler,
  Image,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { NavBarContext } from "../Contexts/NavBarContext";
import BottomMenu from "../Components/BottomNavigationMenu";

export default function YourOrder({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);

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
                placeholder="Search Flip Mart"
              />
            </View>
          </LinearGradient>
          <ScrollView>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#e8eae9",
                paddingBottom: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  borderBottomWidth: 3,
                  borderBottomColor: "#1f8097",
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#1f7f95", fontSize: 15 }}>
                  Your Orders
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate("BuyAgain");
                  setCurrentScreen("Account");
                }}
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                }}
              >
                <Text style={{ color: "#143a42", fontSize: 15 }}>Buy Again</Text>
              </Pressable>
            </View>
            <View
              style={{
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#e5e7e6",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Ionicons style={{ paddingRight: 10 }} name="search" size={24} color="#2da2b2" />
                <TextInput style={{ backgroundColor: "white" }} placeholder="Search all orders" />
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderLeftColor: "#efefef",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ padding: 5 }}>Filters</Text>
                <MaterialIcons name="chevron-right" size={24} color="black" />
              </View>
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: "#ebedec",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 165, top: "35%", width: 190, resizeMode: "cover" }}
                source={require("../assets/Images/emptyorders.png")}
              />
            </View>
            <View style={{ paddingVertical: 30 }}></View>
            <View>
              <Text
                style={{
                  paddingTop: 10,
                  paddingHorizontal: 45,
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#208578",
                }}
              >
                Your Orders
              </Text>
              <Text style={{ paddingHorizontal: 45, fontSize: 16 }}>
                {"\n"}Looks like you haven't placed an order in the last 3 monhts
              </Text>
              <Text style={{ paddingHorizontal: 45, fontSize: 16 }}>
                {"\n"}Use search above to find psat orders
              </Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{
                  top: "70%",
                  elevation: 100,
                  paddingHorizontal: 16,
                }}
              >
                or
              </Text>
              <View
                style={{ borderWidth: 0.7, marginTop: 20, width: "80%", borderColor: "#f8f8f8" }}
              ></View>
            </View>
            <View
              style={{
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 45,
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("Home");
                  setCurrentScreen("Home");
                }}
                style={{
                  borderColor: "#e7eae9",
                  borderWidth: 1,
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  elevation: 2,
                  padding: 14,
                  color: "black",
                  width: "80%",
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
