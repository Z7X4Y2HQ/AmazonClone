import React, { useState, useEffect, useContext } from "react";
import { ScrollView, Text, Image, StyleSheet, TextInput, View, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { NavBarContext } from "../Contexts/NavBarContext";

export default function LoginScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [expand, setexpand] = useState(false);
  const [deexpand, sedetexpand] = useState(true);
  const [icon, seticon] = useState(false);

  const { credentials, setCredentials } = useContext(NavBarContext);
  const { OTPCheck, setOTPCheck } = useContext(NavBarContext);
  const { loggedIn, setLoggedIn } = useContext(NavBarContext);
  const { credentialsAdded, setCredentialsAdded } = useContext(NavBarContext);

  const [emailadded, setEmailAdded] = useState(false);

  const [alert, setAlert] = useState(false);

  const [missingName, setMissingName] = useState(false);
  const [missingEmail, setMissingEmail] = useState(false);
  const [missingPassword, setMissingPassword] = useState(false);

  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(true);
  const [isChecked3, setChecked3] = useState(false);

  function OTPGenerator() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const [OTP, setOTP] = useState(OTPGenerator());
  const [incorrectOTP, setIncorrectOTP] = useState(false);

  console.log(credentials);

  return (
    <View>
      {!credentialsAdded && (
        <ScrollView style={{ marginTop: 24, backgroundColor: "#f6f6f6" }}>
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
              {missingName && (
                <Text style={{ fontSize: 14.5, paddingVertical: 0.7 }}>Enter your name</Text>
              )}
              {missingEmail && (
                <Text style={{ fontSize: 14.5, paddingVertical: 0.7 }}>
                  Enter your email and mobile phone number
                </Text>
              )}
              {missingPassword && (
                <Text style={{ fontSize: 14.5, paddingVertical: 0.7 }}>Enter your password</Text>
              )}
            </View>
          )}
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 20,
              paddingVertical: 10,
            }}
          >
            Welcome
          </Text>

          <View style={styles.main}>
            <View style={styles.checBoxes}>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => {
                  sedetexpand(true);
                  setexpand(false);
                  setChecked(false);
                  setChecked2(true);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingLeft: 10,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderColor: "#e8e8e8",
                    flex: 1,
                    backgroundColor: isChecked ? "#f2f2f2" : "white",
                  }}
                >
                  <Checkbox
                    style={{ borderColor: "#9a9e9e", borderWidth: 1 }}
                    value={isChecked2}
                    onValueChange={() => {
                      setChecked2(true);
                      sedetexpand(true);
                      setChecked(false);
                      setexpand(false);
                    }}
                    color={isChecked2 ? "#007186" : undefined}
                  />
                  {/* isChecked2 ? sedetexpand(true) : sedetexpand(false) */}
                  <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>
                    Create Account.{" "}
                    <Text style={{ fontSize: 12, fontWeight: isChecked2 ? "bold" : undefined }}>
                      New to Amazon?
                    </Text>
                  </Text>
                </View>
              </Pressable>

              {deexpand && (
                <View
                  style={{
                    paddingBottom: 14,
                    borderLeftWidth: 1,
                    borderBottomWidth: 0,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderColor: "#e8e8e8",
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      paddingBottom: 0,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Name</Text>
                    <TextInput
                      onEndEditing={(event) => {
                        setCredentials({ ...credentials, name: event.nativeEvent.text });
                      }}
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: missingName ? "#e42d20" : "#ececec",
                        padding: 10,
                        marginTop: 6,
                        color: "black",
                        elevation: 1,
                      }}
                    ></TextInput>
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 15,
                      paddingVertical: 15,
                      paddingBottom: 0,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Email or phone number</Text>
                    <TextInput
                      onEndEditing={(event) => {
                        setCredentials({ ...credentials, email: event.nativeEvent.text });
                        setEmailAdded(true);
                      }}
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: missingEmail ? "#e42d20" : "#ececec",
                        padding: 10,
                        marginTop: 6,
                        color: "black",
                        elevation: 1,
                      }}
                    ></TextInput>
                  </View>
                  <View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
                    <Text style={{ fontWeight: "bold" }}>Create a Password</Text>
                    <TextInput
                      onEndEditing={(event) => {
                        setCredentials({ ...credentials, password: event.nativeEvent.text });
                      }}
                      secureTextEntry={isChecked3 ? false : true}
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: missingPassword ? "#e42d20" : "#ececec",
                        padding: 10,
                        marginTop: 6,
                        color: "black",
                        elevation: 1,
                      }}
                    ></TextInput>
                    <View
                      style={{
                        paddingTop: 15,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        style={{ borderColor: "#9a9e9e", borderWidth: 1 }}
                        value={isChecked3}
                        onValueChange={() => {
                          setChecked3(!isChecked3);
                        }}
                        color={isChecked3 ? "#007186" : undefined}
                      />
                      <Text style={{ paddingLeft: 5 }}>Show Password</Text>
                    </View>
                  </View>

                  <View style={{ alignItems: "center", paddingHorizontal: 15 }}>
                    <LinearGradient
                      style={{ width: "100%", borderRadius: 3 }}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                      colors={["#edbc58", "#f2cb7d", "#f4daa7"]}
                    >
                      <Pressable
                        onPress={() => {
                          if (
                            credentials.name == undefined &&
                            credentials.email == undefined &&
                            credentials.password == undefined
                          ) {
                            setAlert(true);
                            setMissingName(true);
                            setMissingEmail(true);
                            setMissingPassword(true);
                          } else if (
                            credentials.name == undefined &&
                            credentials.email == undefined
                          ) {
                            setAlert(true);
                            setMissingName(true);
                            setMissingEmail(true);
                            setMissingPassword(false);
                          } else if (
                            credentials.name == undefined &&
                            credentials.password == undefined
                          ) {
                            setAlert(true);
                            setMissingName(true);
                            setMissingEmail(false);
                            setMissingPassword(true);
                          } else if (
                            credentials.email == undefined &&
                            credentials.password == undefined
                          ) {
                            setAlert(true);
                            setMissingName(false);
                            setMissingEmail(true);
                            setMissingPassword(true);
                          } else if (credentials.name == undefined) {
                            setAlert(true);
                            setMissingName(true);
                            setMissingEmail(false);
                            setMissingPassword(false);
                          } else if (credentials.email == undefined) {
                            setAlert(true);
                            setMissingName(false);
                            setMissingEmail(true);
                            setMissingPassword(false);
                          } else if (credentials.password == undefined) {
                            setAlert(true);
                            setMissingName(false);
                            setMissingEmail(false);
                            setMissingPassword(true);
                          } else {
                            setCredentialsAdded(true);
                          }
                        }}
                        style={{
                          borderWidth: 1,
                          borderRadius: 3,
                          borderColor: "#ac9057",
                          padding: 13,
                          marginTop: 1,
                          color: "black",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text>{emailadded ? "Verify Email" : "Continue"}</Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      paddingHorizontal: 15,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: "black", width: "100%" }}>
                      By creating an account, you agree to Amazon's{" "}
                      <Text style={{ color: "#0e71b9" }}>Conditions of Use</Text> and
                      <Text style={{ color: "#0e71b9" }}> Privacy Notice</Text>
                    </Text>
                  </View>
                </View>
              )}
              <Pressable
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => {
                  setexpand(true);
                  sedetexpand(false);
                  setChecked(true);
                  setChecked2(false);
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingLeft: 10,

                    flex: 1,
                    // backgroundColor:'yellow',
                    backgroundColor: isChecked ? "white" : "#f2f2f2",
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: isChecked ? 0 : 1,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderColor: "#e8e8e8",
                  }}
                >
                  <Checkbox
                    style={{ padding: 8, borderColor: "#9a9e9e", borderWidth: 1 }}
                    value={isChecked}
                    onValueChange={() => {
                      setChecked(true);
                      setexpand(true);
                      sedetexpand(false);
                      setChecked2(false);
                    }}
                    color={isChecked ? "#007186" : undefined}
                  />

                  <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>
                    Sign-In.{" "}
                    <Text style={{ fontSize: 12, fontWeight: isChecked ? "bold" : undefined }}>
                      Already a Customer?
                    </Text>
                  </Text>
                </View>
              </Pressable>
              {expand && (
                <View
                  style={{
                    paddingBottom: 14,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderLeftWidth: 1,
                    borderBottomWidth: 1,
                    borderWidth: 1,
                    borderTopWidth: 0,
                    borderColor: "#e8e8e8",
                    backgroundColor: "white",
                  }}
                >
                  <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>Email or phone number</Text>
                    <TextInput
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        borderRadius: 3,
                        borderColor: "#ececec",
                        padding: 10,
                        marginTop: 6,
                        color: "black",
                        elevation: 1,
                      }}
                    ></TextInput>
                  </View>
                  <View style={{ alignItems: "center", paddingHorizontal: 15 }}>
                    <LinearGradient
                      style={{ width: "100%", borderRadius: 3 }}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                      colors={["#edbc58", "#f2cb7d", "#f4daa7"]}
                    >
                      <Pressable
                        style={{
                          borderWidth: 1,
                          borderRadius: 3,
                          borderColor: "#ac9057",
                          padding: 13,
                          marginTop: 1,
                          color: "black",
                          width: "100%",
                          alignItems: "center",
                        }}
                      >
                        <Text>Continue</Text>
                      </Pressable>
                    </LinearGradient>
                  </View>
                  <View
                    style={{
                      alignItems: "center",
                      paddingHorizontal: 15,
                      paddingVertical: 8,
                    }}
                  >
                    <Text style={{ color: "black", width: "100%", paddingBottom: 10 }}>
                      By Continuing, you agree to Amazon's{" "}
                      <Text style={{ color: "#0e71b9" }}>Conditions of Use</Text> and
                      <Text style={{ color: "#0e71b9" }}> Privacy Notice</Text>
                    </Text>
                  </View>
                  {/* Need help container */}

                  <View style={{ paddingLeft: 12 }}>
                    <Pressable
                      onPress={() => seticon(!icon)}
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <AntDesign size={7} name={icon ? "caretdown" : "caretright"} />
                      <Text style={{ color: "#0e71b9", paddingLeft: 5 }}>Need Help ?</Text>
                    </Pressable>
                    {icon && (
                      <View style={{ paddingLeft: 12, paddingVertical: 6 }}>
                        <Text style={{ color: "#0e71b9", paddingBottom: 4 }}>Forgot Password</Text>
                        <Text style={{ color: "#0e71b9" }}>Other issue with Sign-in</Text>
                      </View>
                    )}
                  </View>
                </View>
              )}
            </View>
            <View
              style={{
                borderTopColor: "#bdc3c7",
                justifyContent: "space-around",
                width: "90%",
                alignItems: "center",
                justifyContent: "space-around",
                borderTopWidth: 1,
                flexDirection: "row",
                paddingTop: 19,
                paddingHorizontal: 25,
                paddingBottom: 3,
                marginTop: 25,
                marginBottom: 0,
              }}
            >
              <Text style={{ color: "#0e71b9" }}>Conditions of Use</Text>
              <Text style={{ color: "#0e71b9" }}>Privacy Notice</Text>
              <Text style={{ color: "#0e71b9" }}>Help</Text>
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text style={{ fontSize: 11 }}>1996-2022, Amazon.com,Inc. or its affilliates</Text>
            </View>
          </View>
        </ScrollView>
      )}
      {credentialsAdded && (
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
          <Text
            style={{
              fontSize: 22,
              paddingLeft: 20,
              paddingVertical: 10,
              fontWeight: "700",
            }}
          >
            Verify email address
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              paddingRight: 50,
              paddingVertical: 10,
            }}
          >
            To verify your email, we've sent a One Time Password (OTP) to {credentials.email}{" "}
            <Text style={{ color: "#3f7f8e" }}>
              {"("}Change{")"}
            </Text>
          </Text>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 7,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Enter OTP</Text>
            <TextInput
              keyboardType="numeric"
              onEndEditing={(event) => {
                setOTPCheck({ ...OTPCheck, OTPInput: event.nativeEvent.text });
              }}
              style={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 3,
                borderColor: missingName ? "#e42d20" : "#ececec",
                padding: 10,
                marginTop: 6,
                color: "black",
                elevation: 1,
              }}
            ></TextInput>
          </View>
          {incorrectOTP && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ paddingVertical: 14 }}> wrong OTP, try again!</Text>
            </View>
          )}
          <Pressable
            onPress={() => {
              console.log("OTP: ", "" + OTP);
              console.log("OTPInput: ", OTPCheck.OTPInput);

              if ("" + OTP == OTPCheck.OTPInput) {
                setIncorrectOTP(false);
                setLoggedIn(true);
                navigation.navigate("Author");
              } else {
                setIncorrectOTP(true);
              }
            }}
            style={{
              marginHorizontal: 20,
              borderRadius: 7,
              padding: 14,
              color: "black",
              alignItems: "center",
              backgroundColor: "#fdd800",
            }}
          >
            <Text>Create yout Amazon account</Text>
          </Pressable>
          <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 22 }}>
            <Pressable
              onPress={() => {
                setOTP((OTP) => OTPGenerator());
              }}
            >
              <Text style={{ color: "#3f7f8e" }}>Resent OTP</Text>
            </Pressable>
          </View>
          <Text>{OTP}</Text>
        </View>
      )}
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
