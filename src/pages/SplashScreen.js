import { useEffect, useRef, useContext, useState } from "react";
import { View, Pressable, StyleSheet, BackHandler, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video, AVPlaybackStatus } from "expo-av";

const { width } = Dimensions.get("window");
const height = (width * 101) / 115;

export default function SplashScreen({ navigation }) {
  const navigationReset = useNavigation();

  useEffect(() => {
    setTimeout(
      () =>
        navigationReset.reset({
          index: 0,
          routes: [{ name: "Home" }],
        }),
      2000
    );
  }, []);
  const [status, setStatus] = useState({});

  return (
    <View style={{ backgroundColor: "#ebe6d9", flex: 1, justifyContent: "center" }}>
      <Video
        style={{ width, height }}
        source={require("../assets/SplashScreen/SplashScreenVid.mp4")}
        shouldPlay
        resizeMode="contain"
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}
