import React, { useState, useEffect, useContext } from "react";
import { ScrollView, Text, Image, StyleSheet, TextInput, View, Pressable } from "react-native";
import { NavBarContext } from "../Contexts/NavBarContext";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "expo-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

async function saveLoginState(loggedIn) {
  await AsyncStorage.setItem("loginState", loggedIn);
}

export default function SignIn({ navigation }) {
  const { email, setEmail } = useContext(NavBarContext);
  const { password, setPassword } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(NavBarContext);

  const [alert, setAlert] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState();
  const [passwordMissing, setPasswordMissing] = useState();

  const [isChecked, setChecked] = useState(false);
  const [signInPassword, setSignInPassword] = useState();

  const navigationReset = useNavigation();

  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: "#f0f0f0",
          borderBottomColor: "#dcdcdc",
          borderBottomWidth: 2,
        }}
      >
        <Image
          style={{ height: 33, width: 95 }}
          source={require("../assets/Images/amazon_black.png")}
        ></Image>
      </View>
      {alert && (
        <View
          style={{
            borderWidth: 0.7,
            backgroundColor: "white",
            borderTopColor: "black",
            borderColor: "#c3271d",
            borderRadius: 5,
            margin: 11,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ color: "#b11807", fontWeight: "bold", paddingBottom: 5 }}>
            There was a problem
          </Text>
          {passwordMissing && (
            <Text style={{ fontSize: 14.5, paddingVertical: 0.7 }}>Enter your password</Text>
          )}
          {passwordIncorrect && (
            <Text style={{ fontSize: 14.5, paddingVertical: 0.7 }}>Your password is incorrect</Text>
          )}
        </View>
      )}
      <Text
        style={{
          fontSize: 22,
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 2,
        }}
      >
        Sign-In
      </Text>
      <Text
        style={{
          paddingLeft: 20,
          paddingRight: 50,
          paddingBottom: 7,
        }}
      >
        {email} <Text style={{ color: "#1e67b6" }}>Change</Text>
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 7,
        }}
      >
        <Text style={{ paddingLeft: 6, fontWeight: "bold" }}>Amazon password</Text>
        <TextInput
          onChangeText={(password) => setSignInPassword(password)}
          secureTextEntry={isChecked ? false : true}
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            borderRadius: 3,
            borderColor: passwordMissing ? "#e42d20" : "#ececec",
            padding: 10,
            marginTop: 6,
            color: "black",
            elevation: 1,
          }}
        ></TextInput>
      </View>
      <View
        style={{
          paddingTop: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 21,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={{ borderColor: "#9a9e9e", borderWidth: 1 }}
            value={isChecked}
            onValueChange={() => {
              setChecked(!isChecked);
            }}
            color={isChecked ? "#007186" : undefined}
          />
          <Text style={{ paddingLeft: 5 }}>Show Password</Text>
        </View>
        <View>
          <Text style={{ color: "#1e67b6" }}>Forgot password?</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 21 }}>
        <LinearGradient
          style={{ width: "100%", borderRadius: 3, marginTop: 22 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={["#edbc58", "#f2cb7d", "#f4daa7"]}
        >
          <Pressable
            onPress={() => {
              if (signInPassword != password && signInPassword != undefined) {
                setAlert(true);
                setPasswordIncorrect(true);
                setPasswordMissing(false);
              } else if (signInPassword == undefined) {
                setAlert(true);
                setPasswordIncorrect(false);
                setPasswordMissing(true);
              } else {
                setLoggedIn(true);
                saveLoginState("true");
                setAlert(false);
                setPasswordIncorrect(false);
                setPasswordMissing(false);
                navigationReset.reset({
                  index: 0,
                  routes: [{ name: "Author" }],
                });
              }
            }}
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
            <Text>Sign-In</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 16 }}></View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            borderTopColor: "#bdc3c7",
            width: "77%",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderTopWidth: 0.7,
            flexDirection: "row",
            paddingTop: 19,
            paddingHorizontal: 25,
            paddingBottom: 3,
          }}
        >
          <Text style={{ fontSize: 10, color: "#0e71b9" }}>Conditions of Use</Text>
          <Text style={{ fontSize: 10, color: "#0e71b9" }}>Privacy Notice</Text>
          <Text style={{ fontSize: 10, color: "#0e71b9" }}>Help</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={{ color: "#636464", fontSize: 10.5 }}>
            © 1996-2022, Amazon.com, Inc. or its affilliates
          </Text>
          <Text
            style={{ color: "#636464", fontSize: 10.5, textAlign: "center", marginTop: 9 }}
          ></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  checBoxes: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 4,
  },
});
