import React, { useContext, useEffect } from "react";
import { Text, BackHandler, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { NavBarContext } from "../Contexts/NavBarContext";
import { LinearGradient } from "expo-linear-gradient";

export default LoggedOut = ({ navigation }) => {
  const { credentials, setCredentials } = useContext(NavBarContext);
  const { credentialsAdded, setCredentialsAdded } = useContext(NavBarContext);

  return (
    <View style={{ marginTop: 24 }}>
      <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 50 }}>
        <Image
          style={{ height: 70, resizeMode: "contain" }}
          source={require("../assets/Images/amazon_black.png")}
        ></Image>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
          Sign in to your Account
        </Text>
        <View style={{ paddingHorizontal: 34, paddingTop: 10 }}>
          <Text style={{ margin: 7, fontSize: 15 }}>View your wish list</Text>
          <Text style={{ margin: 7, fontSize: 15 }}>Find & reorder past purchases</Text>
          <Text style={{ margin: 7, fontSize: 15 }}>Track your Purchases</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
        <LinearGradient
          style={{ width: "100%", borderRadius: 3, marginTop: 22 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#edbc58", "#f2cb7d", "#f4daa7"]}
        >
          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              borderWidth: 0.7,
              borderRadius: 3,
              borderColor: "#ac9057",
              paddingHorizontal: 13,
              paddingVertical: 11,
              color: "black",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text>Already a customer? Sign in</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={{ width: "100%", borderRadius: 3, marginTop: 6 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#e7e9ec", "#eff1f3", "#f7f9fb"]}
        >
          <Pressable
            onPress={() =>
                navigation.navigate("LoginScreen")
            }
            style={{
              borderWidth: 0.7,
              borderRadius: 3,
              borderColor: "#c2c3c7",
              paddingHorizontal: 13,
              paddingVertical: 11,
              color: "black",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text>New to Amazon.com? Create an account</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          style={{ width: "100%", borderRadius: 3, marginTop: 6 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#e7e9ec", "#eff1f3", "#f7f9fb"]}
        >
          <Pressable
          onPress={() => navigation.navigate("Home")}
            style={{
              borderWidth: 0.7,
              borderRadius: 3,
              borderColor: "#c2c3c7",
              paddingHorizontal: 13,
              paddingVertical: 11,
              color: "black",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text>Skip sign in</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};
