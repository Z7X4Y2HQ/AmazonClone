import { useEffect, useRef, useState, useContext } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Pressable,
  StyleSheet,
  BackHandler,
  ScrollView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { NavBarContext } from "../Contexts/NavBarContext";
import BottomMenu from "../Components/BottomNavigationMenu";
import Divider from "../Components/Divider";

export default function Profile({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const { name, setName } = useContext(NavBarContext);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Add a photo</Text>
            <Pressable
              style={{ padding: 10, borderWidth: 1, borderRadius: 5, marginLeft: 25 }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Entypo name="cross" size={20} color="black" />
            </Pressable>
          </View>
        </View>
      </Modal>
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
          <ScrollView>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["#b5bab7", "#d1d4d1", "#e1e3e0"]}
            >
              <View style={{ paddingLeft: 8, flexDirection: "row" }}>
                <Pressable
                  onPress={() => setModalVisible(true)}
                  style={{
                    borderRadius: 100,
                    padding: 8,
                    backgroundColor: "#abb7b7",
                    borderWidth: 4,
                    borderColor: "white",
                    top: "14%",
                  }}
                >
                  <Image
                    style={{ height: 90, width: 90, resizeMode: "contain" }}
                    source={require("../assets/Images/userIcon.png")}
                  />
                </Pressable>
              </View>
            </LinearGradient>
            <View style={{ paddingLeft: "3%", flexDirection: "row", height: 54 }}>
              <Pressable
                onPress={() => setModalVisible(true)}
                style={{
                  paddingLeft: "20.5%",
                  borderBottomRightRadius: 100,
                  borderBottomLeftRadius: 100,
                  padding: 20,
                }}
              ></Pressable>
              <View style={{ paddingTop: 12 }}>
                <Text style={{ paddingLeft: "7%", fontSize: 22, fontWeight: "bold" }}>
                  {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 12 }}>
              <Pressable
                style={{
                  elevation: 3,
                  paddingHorizontal: 12,
                  marginLeft: 14,
                  padding: 9,
                  backgroundColor: "#fdd800",
                  borderColor: "#e9e9e9",
                  borderRadius: 8,
                }}
              >
                <Text style={{ fontSize: 13 }}>Create review</Text>
              </Pressable>
              <Pressable
                style={{
                  elevation: 3,
                  paddingHorizontal: 12,
                  marginLeft: 8,
                  padding: 9,
                  backgroundColor: "white",
                  borderRadius: 8,
                  borderColor: "#e9e9e9",
                }}
              >
                <Text style={{ fontSize: 13 }}>Edit your profile</Text>
              </Pressable>
            </View>
            <View style={{ paddingHorizontal: 14, paddingVertical: 12, paddingBottom: 30 }}>
              <Text style={{ color: "#307e8f" }}>Manage preferences</Text>
            </View>
            <Divider />
            <View style={{ paddingHorizontal: 14, marginBottom: 40 }}>
              <Text style={{ paddingVertical: 16, paddingBottom: 30, fontWeight: "bold" }}>
                Impact
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <View
                    style={{
                      padding: 5,
                      borderRadius: 200,
                      backgroundColor: "#fffbdf",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather name="thumbs-up" size={16} color="#d69f0e" />
                  </View>
                </View>
                <View>
                  <Text style={{ paddingLeft: 10, fontSize: 30, fontWeight: "bold" }}>0</Text>
                </View>
              </View>
            </View>
            <Divider />
            <View
              style={{
                paddingHorizontal: 14,
                paddingVertical: 14,
                borderBottomWidth: 1,
                borderBottomColor: "#e9e9e9",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 18,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Community activity</Text>
                <Text style={{ color: "#367988" }}>
                  View: Reviews
                  <AntDesign name="down" size={14} color="#367988" />
                </Text>
              </View>
              <View style={{ flexDirection: "row", paddingBottom: 20 }}>
                <View
                  style={{
                    justifyContent: "flex-start",
                    borderRightColor: "#f4f4f4",
                    borderRightWidth: 0.7,
                    paddingRight: 20,
                  }}
                >
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>0</Text>
                  <Text style={{ color: "#696969", fontSize: 15 }}>Reviews</Text>
                </View>
                <View style={{ justifyContent: "flex-start", paddingHorizontal: 20 }}>
                  <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>0</Text>
                  <Text style={{ color: "#696969", fontSize: 15 }}>Idea Lists</Text>
                </View>
              </View>
            </View>
            <Text style={{ paddingHorizontal: 14, paddingVertical: 20 }}>
            {name.charAt(0).toUpperCase() + name.slice(1)} has no activity to share.
            </Text>
            <Divider />
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
