import { useEffect, useRef, useContext } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  BackHandler,
  Text,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import SearchBar from "../Components/SearchBar";
import { NavBarContext } from "../Contexts/NavBarContext";

export default function CheckOut({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { previousScreens } = useContext(NavBarContext);

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
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  marginTop: 22,
                  paddingHorizontal: 8,
                  marginBottom: 20,
                }}
              >
                <Text>CANCEL</Text>
              </Pressable>
            </View>
          </LinearGradient>
          <ScrollView style={{ backgroundColor: "#f8f8f8" }}>
            <View style={{ paddingHorizontal: 14 }}>
              <View style={{ paddingVertical: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Select a payment method</Text>
              </View>
              <View>
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
                  <Text style={{ fontSize: 15 }}>Continue</Text>
                </Pressable>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderWidth: 2,
                  borderColor: "#3f8899",
                  borderTopColor: "#1e6b7d",
                  borderRadius: 8,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#f8ffff",
                }}
              >
                <Image
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                  source={require("../assets/Images/affirm.jpeg")}
                />
                <View style={{ paddingLeft: 10 }}>
                  <Text>Pay over time with Affirm</Text>
                  <Text style={{ paddingRight: 85, fontSize: 13, color: "#7e8283" }}>
                    Apply as part of checkout with just a few pieces of info.{" "}
                    <Text style={{ color: "#326672" }}> Learn more</Text>
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#f1f1f1",
                  backgroundColor: "white",
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    margin: 16,
                    paddingVertical: 16,
                    borderColor: "#f1f1f1",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ height: 75, width: 75, resizeMode: "contain", marginHorizontal: 30 }}
                    source={require("../assets/Images/a.png")}
                  />
                  <Text style={{ fontWeight: "bold", width: "55%" }}>
                    Pay <Text style={{ color: "#b02c00" }}>$13.94/month or less for 12 months</Text>{" "}
                    when you select Affirm as your payment method at checkout.
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  marginVertical: 10,
                  borderColor: "#eef1f0",
                  backgroundColor: "white",
                  padding: 14,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Add a payment method</Text>
                <AntDesign name="right" size={18} color="black" />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#e7e7e7",
                  backgroundColor: "white",
                  borderRadius: 8,
                  padding: 16,
                }}
              >
                <Text>Gift Cards, Vouchers & Promotional Codes</Text>
                <TextInput
                  style={{
                    padding: 8,
                    marginTop: 6,
                    marginBottom: 26,
                    borderWidth: 1,
                    borderColor: "#bdbdbd",
                    backgroundColor: "white",
                    borderRadius: 3,
                    elevation: 2,
                  }}
                  placeholder="Enter Code"
                />
              </View>
              <View>
                <Pressable
                  onPress={() => navigation.navigate("Home")}
                  style={{
                    borderColor: "#e5e7e8",
                    backgroundColor: "#fdd031",
                    borderRadius: 8,
                    marginVertical: 10,
                    elevation: 2,
                    padding: 14,
                    color: "black",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 15 }}>Continue</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
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
});
