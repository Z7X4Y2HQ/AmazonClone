import { ScrollView, Text, Image, StyleSheet, TextInput, View, Pressable } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";


export default function LoginScreen({ navigation }) {

  const [isSelected, setSelection] = React.useState(false);
  const [expand, setexpand] = React.useState(false);
  const [deexpand, sedetexpand] = React.useState(true);
  const [icon, seticon] = React.useState(false);
  const [pass, setpass] = React.useState(true);

  const [isChecked, setChecked] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(true);
  const [isChecked3, setChecked3] = React.useState(false);


  return (
    <ScrollView style={{ marginTop: 24, backgroundColor: "#f6f6f6" }}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: "#f0f0f0",
          borderBottomColor: '#dcdcdc',
          borderBottomWidth: 2
        }}
      >
        <Image
          style={{ height: 33, width: 95 }}
          source={require("../assets/amazon_black.png")}
        ></Image>
      </View>
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
                borderColor: '#e8e8e8',
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
              <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>
                Create Account. <Text style={{ fontSize: 12, fontWeight: isChecked2 ? 'bold' : undefined }} >New to Amazon?</Text>
              </Text>
            </View>
          </Pressable>

          {deexpand && (
            <View style={{ paddingBottom: 14, borderLeftWidth: 1, borderBottomWidth: 0, borderWidth: 1, borderTopWidth: 0, borderColor: '#e8e8e8', backgroundColor: "white" }}>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  paddingBottom: 0,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Name</Text>
                <TextInput
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: '#ececec',
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
                <Text style={{ fontWeight: "bold" }}>
                  Email or phone number
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: '#ececec',
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
                  secureTextEntry={isChecked3 ? false : true}
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: '#ececec',
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
                    style={{
                      borderWidth: 1,
                      borderRadius: 3,
                      borderColor: '#ac9057',
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
                <Text style={{ color: "black", width: "100%" }}>
                  By creating an account, you agree to Amazon's <Text style={{ color: '#0e71b9' }}>Conditions of Use</Text> and
                  <Text style={{ color: '#0e71b9' }}> Privacy Notice</Text>
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
                borderColor: '#e8e8e8'
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

              <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>
                Sign-In. <Text style={{ fontSize: 12, fontWeight: isChecked ? 'bold' : undefined }}>Already a Customer?</Text>
              </Text>
            </View>
          </Pressable>
          {expand && (
            <View style={{ paddingBottom: 14, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, borderLeftWidth: 1, borderBottomWidth: 1, borderWidth: 1, borderTopWidth: 0, borderColor: '#e8e8e8', backgroundColor: "white" }}>
              <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  Email or phone number
                </Text>
                <TextInput
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderRadius: 3,
                    borderColor: '#ececec',
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
                      borderColor: '#ac9057',
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
                  By Continuing, you agree to Amazon's <Text style={{ color: '#0e71b9' }}>Conditions of Use</Text> and
                  <Text style={{ color: '#0e71b9' }}> Privacy Notice</Text>
                </Text>
              </View>
              {/* Need help container */}

              <View style={{ paddingLeft: 12 }}>
                <Pressable
                  onPress={() => seticon(!icon)}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <AntDesign
                    size={7}
                    name={icon ? "caretdown" : "caretright"}
                  />
                  <Text style={{ color: '#0e71b9', paddingLeft: 5 }}>Need Help ?</Text>
                </Pressable>
                {icon && (
                  <View style={{ paddingLeft: 12, paddingVertical: 6 }}>
                    <Text style={{ color: '#0e71b9', paddingBottom: 4 }}>Forgot Password</Text>
                    <Text style={{ color: '#0e71b9' }}>Other issue with Sign-in</Text>
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
        <View style={{ borderTopColor: '#bdc3c7', justifyContent: 'space-around', width: "90%", alignItems: 'center', justifyContent: 'space-around', borderTopWidth: 1, flexDirection: 'row', paddingTop: 19, paddingHorizontal: 25, paddingBottom: 3, marginTop: 25, marginBottom: 0 }}>
            <Text style={{color: '#0e71b9'}}>Conditions of Use</Text>
            <Text style={{color: '#0e71b9'}}>Privacy Notice</Text>
            <Text style={{color: '#0e71b9'}}>Help</Text>
        </View>
        <View style={{ paddingTop: 5 }}>
          <Text style={{ fontSize: 11 }}>1996-2022, Amazon.com,Inc. or its affilliates</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // backgroundColor: "lightgrey",
    // justifyContent:'center',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    // e1e5e4
  },
  checBoxes: {
    backgroundColor: "white",

    // margin:5,
    // alignItems:'center',
    width: "90%",
    borderRadius: 4,
  },
});