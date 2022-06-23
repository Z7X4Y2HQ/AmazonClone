import { useEffect, useRef, useContext } from "react";
import { View, Text, Pressable, StyleSheet, BackHandler, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
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

export default function YourAccount({ navigation }) {
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
              <Heading title="Orders" />
              <Pages title="Your orders" topBorder={1} roundTopBorder={1} roundBottomBorder={0} />
              <Pages
                title="Your Subscribe & Save"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your rental orders"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Service requests"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your Trade-in Account"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your Flip Mart Day"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="Customer Service" />
              <Pages title="Contact Us" topBorder={1} roundTopBorder={1} roundBottomBorder={1} />
              <Heading title="Account settings" />
              <Pages
                title="Login & security"
                topBorder={1}
                roundTopBorder={1}
                roundBottomBorder={0}
              />
              <Pages
                title="Login with Flip Mart"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Register for a Business account"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Switch Accounts"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your Addresses"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage saved IDs"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage your Profiles"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="1-Click settings"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage Prime Membership"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Flip Mart Fresh settings"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage content and devices"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage your Household"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage Digital Delivery"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Shop the Kids' Store by age"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages title="Teens Program" topBorder={0} roundTopBorder={0} roundBottomBorder={0} />
              <Pages
                title="Audible settings"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Flip Mart Music settings"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Memberships & subscriptions"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="Payments" />
              <Pages title="Your Payments" topBorder={1} roundTopBorder={1} roundBottomBorder={0} />
              <Pages
                title="Manage gift card balance"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Shop with Points"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your Flip Mart credit cards"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Third Party Credit Card Installment"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="No-Rush reward balance"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Product Vouchers"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="Message center" />
              <Pages title="Your Messages" topBorder={1} roundTopBorder={1} roundBottomBorder={0} />
              <Pages title="Deal alerts" topBorder={0} roundTopBorder={0} roundBottomBorder={0} />
              <Pages
                title="Purchase Reminders"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="Personalized content" />
              <Pages title="Profile" topBorder={1} roundTopBorder={1} roundBottomBorder={0} />
              <Pages
                title="Your Recommendations"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your Essentials"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Your uploaded product videos"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages title="Your Garage" topBorder={0} roundTopBorder={0} roundBottomBorder={0} />
              <Pages title="Your Fanshop" topBorder={0} roundTopBorder={0} roundBottomBorder={0} />
              <Pages
                title="Your Interests"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages title="Your Pets" topBorder={0} roundTopBorder={0} roundBottomBorder={0} />
              <Pages
                title="Browsing history"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Review your purchases"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="App Preferences" />
              <Pages
                title="Advertising Preferences"
                topBorder={1}
                roundTopBorder={1}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage Voice Recordings"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Manage Flip Mart App Camera Images"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={1}
              />
              <Heading title="Data and Privacy" />
              <Pages
                title="Request Your Information"
                topBorder={1}
                roundTopBorder={1}
                roundBottomBorder={0}
              />
              <Pages
                title="Close Your Flip Mart Account"
                topBorder={0}
                roundTopBorder={0}
                roundBottomBorder={0}
              />
              <Pages
                title="Privacy Notice"
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
