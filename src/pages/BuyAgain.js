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
import Divider from "../Components/Divider";

export default function BuyAgain({ navigation }) {
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
            <View style={{ padding: 14 }}>
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
