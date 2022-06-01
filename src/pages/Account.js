import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "react-native-vector-icons/Feather";

import BottomMenu from '../Components/BottomNavigationMenu'

import { NavBarContext } from "../Contexts/NavBarContext";

export default function Account({ navigation }) {

    const { setCurrentScreen } = useContext(NavBarContext);

    useEffect(() => {
        setCurrentScreen("Account")
    }, [])

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 14 }}>
                <View style={styles.innerMain}>
                    <View style={styles.topHeader}>
                        <View style={{ alignItems: "center" }}>
                            <Image style={styles.headerLogo}
                                source={require("../assets/Images/amazon_black.png")}></Image>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                                <Feather style={{ paddingRight: 20 }} name="bell" size={24} />
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Search')}>
                                <Feather style={{ paddingRight: 10 }} name="search" size={24} />
                            </Pressable>
                        </View>
                    </View>
                    <ScrollView>
                        <LinearGradient style={{}} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={["#fff", "#94dfd8", "#94dfda"]}>
                            <View style={{ height: 60, marginBottom: 25}}>
                                <Text style={styles.signInHeading}>
                                    Sign In For the Best Experience
                                </Text>
                            </View>
                        </LinearGradient>
                        <View style={{ alignItems: "center" }}>
                            <Pressable onPress={() => navigation.navigate('LoginScreen')} style={[styles.button, {marginBottom: 15}]}>
                                <Text>Sign In</Text>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('LoginScreen')} style={styles.button}>
                                <Text>Create Account</Text>
                            </Pressable>
                        </View>
                        <View style={styles.signInPerks}>
                            <View>
                                <Image style={styles.perksImage} 
                                    source={require("../assets/Images/deliverybox.png")}></Image>
                                <Image style={styles.perksImage}
                                    source={require("../assets/Images/shoppingbag.png")}></Image>
                                <Image  style={styles.perksImage} 
                                    source={require("../assets/Images/checklist.png")}></Image>
                            </View>
                            <View>
                                <Text style={[styles.perksText, { marginVertical: 30, width: 280 }]}>
                                    Check order status and track, change or return items
                                </Text>
                                <Text style={[styles.perksText, { marginTop: 15, width: 260 }]}>
                                    Shop past purchases and everyday essentials
                                </Text>
                                <Text style={[styles.perksText, { marginTop: 35, width: 250 }]}>
                                    Ceate lists with items you want, now or later
                                </Text>
                                <View style={{ marginTop: 30 }} />
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
    mainContainer: {
        flex: 1, 
        backgroundColor: 'white'
    },
    innerMain: {
        flex: 1,
        justifyContent: "flex-start",
    },
    topHeader: {
        backgroundColor: "#94dfda", 
        paddingTop: 36, 
        paddingLeft: 6, 
        paddingRight: 6, 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignContent: "center", 
        paddingVertical: 16
    },
    headerLogo: {
        height: 30, 
        width: 100
    },
    signInHeading: {
        fontSize: 22, 
        color: "#2d4247", 
        textAlign: "center", 
        paddingHorizontal: 100
    },
    button: {
        backgroundColor: "#f1c876", 
        borderWidth: 0.5, 
        borderRadius: 3, 
        padding: 14, 
        color: "black", 
        width: "94%", 
        alignItems: "center"
    },
    signInPerks: {
        flex: 1, 
        marginHorizontal: 12, 
        paddingVertical: 15, 
        flexDirection: "row"
    },
    perksImage: {
        height: 70, 
        width: 70, 
        marginVertical: 22, 
        marginLeft: 20
    },
    perksText: {
        fontSize: 17,
        marginLeft: 25, 
        height: 75
    }

});