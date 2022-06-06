import React, { useContext } from "react";
import { View, Image, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { NavBarContext } from "../Contexts/NavBarContext";

export default HomeProductlist = ({ JSONdata, navigation }) => {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);

  return (
    <FlatList
      data={JSONdata}
      renderItem={({ item }) => {
        return (
          <View>
            <Pressable
              onPress={() => {
                navigation.navigate("ProductPage", item);
                setCurrentScreen("ProductPageFromHome");
              }}
            >
              <View style={styles.productContainer}>
                <Image style={styles.productImage} source={{ uri: item.images[0] }} />
                <View style={styles.productInfoContainer}>
                  <Text numberOfLines={3} style={styles.productTitle}>
                    {item.description}
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.superScriptText}>$</Text>
                    <Text style={{ fontSize: 24 }}>{item.newPrice}</Text>
                    <Text style={styles.superScriptText}>00</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    flexDirection: "row",
    paddingBottom: 5,
  },
  productImage: {
    flex: 1,
    height: 100,
    width: 100,
    resizeMode: "contain",
    margin: 5,
  },
  productInfoContainer: {
    flex: 2,
    flexDirection: "column",
  },
  productTitle: {
    margin: 5,
    fontSize: 15,
  },
  priceContainer: {
    flex: 1,
    flexDirection: "row",
  },
  superScriptText: {
    lineHeight: 28,
    fontSize: 16,
  },
});
