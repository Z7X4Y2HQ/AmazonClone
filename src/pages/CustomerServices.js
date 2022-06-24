import { useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  BackHandler,
  ScrollView,
  TextInput,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { NavBarContext } from "../Contexts/NavBarContext";
import BottomMenu from "../Components/BottomNavigationMenu";

function Heading(props) {
  return (
    <Text style={{ paddingVertical: 10, fontWeight: "bold", fontSize: 18, paddingHorizontal: 10 }}>
      {props.title}
    </Text>
  );
}
function Pages(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        justifyContent: "space-between",
        padding: 14,
        borderTopLeftRadius: props.roundTopBorder ? 10 : 0,
        borderTopRightRadius: props.roundTopBorder ? 10 : 0,
        borderBottomLeftRadius: props.roundBottomBorder ? 10 : 0,
        borderBottomRightRadius: props.roundBottomBorder ? 10 : 0,
        borderTopWidth: props.topBorder ? 1 : 0,
        borderColor: "#f0f0f0",
      }}
    >
      <Text>{props.title}</Text>
      <AntDesign name="right" size={20} color="black" />
    </View>
  );
}

export default function CustomerServices({ navigation }) {
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
            <View style={{ paddingHorizontal: 14 }}>
              <View
                style={{
                  padding: 8,
                  marginTop: 10,
                  marginBottom: 16,
                  borderWidth: 1,
                  borderColor: "#bdbdbd",
                  backgroundColor: "white",
                  borderRadius: 3,
                  elevation: 2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons style={{ paddingRight: 6 }} name="search" size={16} color="black" />
                  <TextInput style={{ backgroundColor: "white" }} placeholder="Search Help" />
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  color: "black",
                  paddingTop: 0,
                }}
              >
                Help
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: "#b13e00",
                  paddingVertical: 10,
                }}
              >
                Recommended for You
              </Text>
              <Pages
                title="Where's My Stuff?"
                topBorder={1}
                roundTopBorder={1}
                roundBottomBorder={0}
              />
              <Pages
                title="Cancel Items or Orders"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Returns & Refunds"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Shipping Rates & Information"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="All Help Topics" />
              <Pages
                title="Where's My Stuff?"
                topBorder={1}
                roundTopBorder={1}
                roundBottomBorder={0}
              />
              <Pages
                title="Managing Your Orders"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Account Settings & Payment Methods"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Returns & Refunds"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Shipping Policies"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Amazon Devices"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Digital Services & Content"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Amazon Business Accounts"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Other Topics & Help Sites"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Need More Help?"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <View style={{ height: 40 }}></View>
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
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
