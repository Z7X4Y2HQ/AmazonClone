import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import Productsdata from "../assets/Data/data.json";

import BottomMenu from "../Components/BottomNavigationMenu";
import CardComponet from "../Components/CardComponet";

export default function ListScreen({ navigation }) {
  const [sortasc, setSortAsc] = useState(false);
  const [sortdesc, setSortDesc] = useState(false);

  function sort(Productsdata) {
    if (sortasc == true) {
      return Productsdata.sort((a, b) => {
        return a.newPrice - b.newPrice;
      });
    } else if (sortdesc == true) {
      return Productsdata.sort((a, b) => {
        return b.newPrice - a.newPrice;
      });
    } else {
      return Productsdata;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 14,
          backgroundColor: "white",
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
            <View style={{ flexDirection: "row", paddingLeft: 5, paddingRight: 6, paddingTop: 24 }}>
              <Pressable
                style={{ marginTop: 22, paddingHorizontal: 8 }}
                onPress={() => navigation.goBack()}
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
                onPressIn={() => navigation.navigate("Search")}
                style={{ flex: 9, margin: 9, borderRadius: 7 }}
                iconColor="black"
                placeholder="Search Flip Mart"
              />
            </View>
          </LinearGradient>
          <ScrollView>
            <View>
              <Text
                style={{ marginHorizontal: 17, marginTop: 17, fontSize: 21, fontWeight: "bold" }}
              >
                Computers, Mobile and IT Accessories
              </Text>
              <Text style={{ marginHorizontal: 17, marginTop: 3, marginBottom: 17, fontSize: 15 }}>
                Shop laptops, desktops, moniters, tablets, PC gaming, hard drives and storage,
                accessories and more
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={styles.main}>
                <View style={styles.filt}>
                  <View style={styles.bar}>
                    <TouchableOpacity
                      onPress={() => {
                        setSortAsc(true);
                        setSortDesc(false);
                      }}
                    >
                      <FontAwesome style={styles.filterbutton} name="sort-amount-asc" size={20} />
                    </TouchableOpacity>
                    <Text>Sort Ascending</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setSortDesc(true);
                        setSortAsc(false);
                      }}
                    >
                      <FontAwesome style={styles.filterbutton} name="sort-amount-desc" size={20} />
                    </TouchableOpacity>
                    <Text>Sort Descending</Text>
                  </View>
                </View>
                <View style={styles.flatlist}>
                  <FlatList
                    data={sort(Productsdata)}
                    renderItem={({ item }) => (
                      <View>
                        <TouchableOpacity onPress={() => navigation.navigate("ProductPage", item)}>
                          <CardComponet item={item} />
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <BottomMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  search: {
    backgroundColor: "#85dae1",
    paddingVertical: 8,
  },
  filt: {
    flex: 0.7,
  },
  flatlist: {
    flex: 5,
  },
  bar: {
    borderWidth: 0.5,
    borderColor: "#008298",
    width: "100%",
    flex: 0.7,
    marginVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 18,
  },
  filterbutton: {
    borderLeftWidth: 1,
    paddingHorizontal: 14,
    borderRightWidth: 1,
    color: "#008298",
  },
});
