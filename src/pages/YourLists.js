import { useEffect, useRef, useContext } from "react";
import { View, Text, Pressable, StyleSheet, BackHandler, ImageBackground } from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import { NavBarContext } from "../Contexts/NavBarContext";
import BottomMenu from "../Components/BottomNavigationMenu";

export default function Notifications({ navigation }) {
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
          </LinearGradient>
          <View style={{}}>
            <ImageBackground
              style={{ height: 160, width: "100%", resizeMode: "cover" }}
              source={require("../assets/Images/YourListsBanner.png")}
            >
              <View style={{ justifyContent: "center", alignItems: "center", paddingTop: 14 }}>
                <Text style={{ fontSize: 36, color: "white" }}>Lists</Text>
                <Text style={{ fontSize: 20, color: "white" }}>For all your shopping needs</Text>
              </View>
              <View style={{ paddingTop: 10 }}>
                <Pressable
                  onPress={() => navigation.navigate("Home")}
                  style={{
                    borderColor: "#e5e7e8",
                    backgroundColor: "#fdd031",
                    borderRadius: 8,
                    elevation: 2,
                    padding: 14,
                    color: "black",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Text>Create a list </Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 10,
              paddingBottom: 15,
              backgroundColor: "#f0f2f1",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 5 }}>
                Shopping List
              </Text>
              <Text style={{ fontSize: 12 }}>Add items you want to shop for</Text>
            </View>
            <View>
              <Octicons name="checklist" size={56} color="#bababa" />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 10,
              paddingBottom: 15,
              backgroundColor: "#f0f2f1",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20, paddingVertical: 5 }}>
                Wish List
              </Text>
              <Text style={{ fontSize: 12 }}>Let people know what gifts you'd like.</Text>
            </View>
            <View>
              <Ionicons name="ios-gift" size={56} color="#bababa" />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              paddingBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#f4f4f4",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 2 }}>
                Save time
              </Text>
              <Text style={{ fontSize: 12 }}>
                Ass your items and ideas in one convenient location
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              paddingBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#f4f4f4",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 2 }}>
                Save time
              </Text>
              <Text style={{ fontSize: 12 }}>
                Ass your items and ideas in one convenient location
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              paddingBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#f4f4f4",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 2 }}>
                Save time
              </Text>
              <Text style={{ fontSize: 12 }}>
                Ass your items and ideas in one convenient location
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              paddingBottom: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "#f4f4f4",
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, paddingVertical: 2 }}>
                Save time
              </Text>
              <Text style={{ fontSize: 12 }}>
                Ass your items and ideas in one convenient location
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
