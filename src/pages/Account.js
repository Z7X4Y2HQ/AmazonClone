import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
    ScrollView,
} from "react-native";
import React from "react";
import BottomMenu from '../Components/BottomNavigationMenu'

export default function Account({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.main}>
                        <View
                            style={{
                                backgroundColor: "#94dfda",
                                paddingTop: 36,
                                paddingLeft: 6,
                                paddingRight: 6,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignContent: "center",
                                paddingVertical: 16
                            }}
                        >
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{ height: 30, width: 100 }}
                                    source={require("../assets/amazon_black.png")}
                                ></Image>
                            </View>

                            <View style={{ flexDirection: "row" }}>
                                <Pressable onPress={() => navigation.push('LoginScreen')}>
                                    <Feather style={{ paddingRight: 20 }} name="bell" size={24} />
                                </Pressable>
                                <Pressable onPress={() => navigation.push('Search')}>
                                    <Feather style={{ paddingRight: 10 }} name="search" size={24} />
                                </Pressable>
                            </View>
                        </View>
                        <ScrollView>
                            <LinearGradient
                                style={{}}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 0, y: 0 }}
                                colors={["#fff", "#94dfd8", "#94dfda"]}
                            >
                                <View
                                    style={{
                                        // alignItems: "center",
                                        //   justifyContent: "flex-end",
                                        // backgroundColor: "blue",
                                        //   borderWidth:1,
                                        height: 60,
                                        marginBottom: 25 
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            color: "#2d4247",
                                            textAlign: "center",
                                            paddingHorizontal: 100,
                                        }}
                                    >
                                        Sign In For the Best Experience
                                    </Text>
                                </View>
                            </LinearGradient>
                            <View style={{ alignItems: "center" }}>
                                <Pressable
                                    onPress={() => navigation.push('LoginScreen')}    
                                    style={{
                                        backgroundColor: "#f1c876",
                                        borderWidth: 0.5,
                                        borderRadius: 3,
                                        padding: 14,
                                        color: "black",
                                        width: "94%",
                                        alignItems: "center",
                                        marginBottom: 15,
                                    }}
                                >
                                    <Text>Sign In</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => navigation.push('LoginScreen')}
                                    style={{
                                        backgroundColor: "#eef0f2",
                                        borderWidth: 0.5,
                                        borderRadius: 3,
                                        padding: 14,
                                        color: "black",
                                        width: "94%",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text>Create Account</Text>
                                </Pressable>
                            </View>
                            {/* images whith boxes */}
                            <View
                                style={{
                                    //   backgroundColor: "red",
                                    flex: 1,
                                    marginHorizontal: 12,
                                    paddingVertical: 15,
                                    flexDirection: "row",
                                }}
                            >
                                <View>
                                    <Image
                                        style={{
                                            height: 70,
                                            width: 70,
                                            marginVertical: 22,
                                            marginLeft: 20,
                                        }}
                                        source={require("../assets/deliverybox.png")}
                                    ></Image>

                                    <Image
                                        style={{
                                            height: 70,
                                            width: 70,
                                            marginVertical: 22,
                                            marginLeft: 20,
                                        }}
                                        source={require("../assets/shoppingbag.png")}
                                    ></Image>

                                    <Image
                                        style={{
                                            height: 70,
                                            width: 70,
                                            marginVertical: 22,
                                            marginLeft: 20,
                                        }}
                                        source={require("../assets/checklist.png")}
                                    ></Image>

                                </View>
                                <View style={{}}>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            marginVertical: 30,
                                            width: 280,
                                            marginLeft: 25,
                                            height: 75,
                                        }}
                                    >
                                        Check order status and track, change or return items
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            marginTop: 15,
                                            width: 260,
                                            marginLeft: 25,
                                            height: 75,
                                        }}
                                    >
                                        Shop past purchases and everyday essentials{" "}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            marginTop: 35,
                                            marginBottom: 30,
                                            width: 250,
                                            marginLeft: 25,
                                            height: 75,
                                        }}
                                    >
                                        Ceate lists with items you want, now or later{" "}
                                    </Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <BottomMenu navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "flex-start",
    },
});