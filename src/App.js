import { useState, useRef } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import Settings from "./pages/Settings";
import Author from "./pages/Author";
import LoginScreen from "./pages/LoginScreen";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import ListScreen from "./pages/List";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import LoggedOut from "./pages/LoggedOutScreen";
import AddedtoCart from "./pages/AddedtoCart";
import CartLoggedIn from "./pages/CartLoggedIn";
import YourOrder from "./pages/YourOrder";
import BuyAgain from "./pages/BuyAgain";
import YourAccount from "./pages/YourAccount";
import CheckOut from "./pages/CheckOut";
import { NavBarContext } from "./Contexts/NavBarContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import YourLists from "./pages/YourLists";

var loginStateLoaded = false;
var loadedCredentials = false;

export default () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useRef(null);
  const previousScreens = useRef([]);
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [cartItemsNum, setCartItemsNum] = useState(0);
  const [emptyCart, setEmptyCart] = useState(true);
  const [addedToCart, setAddedToCart] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [credentialsAdded, setCredentialsAdded] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [OTPCheck, setOTPCheck] = useState(undefined);

  async function loadCredentials() {
    var creds = await AsyncStorage.getItem("credentials");
    if (creds !== null) {
      creds = JSON.parse(creds);
      setName(creds.name);
      setEmail(creds.email);
      setPassword(creds.password);
    }
    return creds;
  }

  if (loadedCredentials == false) {
    loadedCredentials = loadCredentials();
  }

  async function loadLoginState() {
    var login = await AsyncStorage.getItem("loginState");
    if (login !== null) {
      setLoggedIn(login == "true");
    }
    return login;
  }

  if (loginStateLoaded == false) {
    loadLoginState();
    loginStateLoaded = true;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() =>
          previousScreens.current.push(navigationRef.current.getCurrentRoute().name)
        }
      >
        <NavBarContext.Provider
          value={{
            currentScreen,
            setCurrentScreen,
            cartItemsNum,
            setCartItemsNum,
            emptyCart,
            setEmptyCart,
            addedToCart,
            setAddedToCart,
            name,
            setName,
            email,
            setEmail,
            password,
            setPassword,
            OTPCheck,
            setOTPCheck,
            loggedIn,
            setLoggedIn,
            credentialsAdded,
            setCredentialsAdded,
            previousScreens,
          }}
        >
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Author" component={Author} />
            <Stack.Screen name="LoggedOut" component={LoggedOut} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="AddedtoCart" component={AddedtoCart} />
            <Stack.Screen name="CartLoggedIn" component={CartLoggedIn} />
            <Stack.Screen name="YourOrder" component={YourOrder} />
            <Stack.Screen name="BuyAgain" component={BuyAgain} />
            <Stack.Screen name="YourLists" component={YourLists} />
            <Stack.Screen name="YourAccount" component={YourAccount} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
          </Stack.Navigator>
        </NavBarContext.Provider>
      </NavigationContainer>
    </View>
  );
};
