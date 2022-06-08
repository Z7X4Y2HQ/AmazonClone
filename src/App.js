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
import { NavBarContext } from "./Contexts/NavBarContext";

export default () => {
  const Stack = createNativeStackNavigator();
  const navigationRef = useRef(null);
  const previousScreens = useRef([]);
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [cartItemsNum, setCartItemsNum] = useState(0);
  const [emptyCart, setEmptyCart] = useState(true);
  const [addedToCart, setAddedToCart] = useState();

  const [credentials, setCredentials] = useState({ name: undefined , email: undefined, password: undefined});


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
            currentScreen, setCurrentScreen,
            cartItemsNum, setCartItemsNum,
            emptyCart, setEmptyCart,
            addedToCart, setAddedToCart,
            credentials, setCredentials,
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
          </Stack.Navigator>
        </NavBarContext.Provider>
      </NavigationContainer>
    </View>
  );
};
