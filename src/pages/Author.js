import React, { useContext, useEffect } from "react";
import { Text, BackHandler, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";

export default Author = () => {
  const { credentials, setCredentials } = useContext(NavBarContext);

  return (
    <View>
      <Text> Yokoso! {credentials.name}</Text>
    </View>
  );
};
