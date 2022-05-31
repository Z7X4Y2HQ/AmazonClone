import { useEffect, useRef, useContext } from 'react'
import { View, Pressable, StyleSheet, BackHandler } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import SearchBar from '../Components/SearchBar';
import { NavBarContext } from '../Contexts/NavBarContext';

export default function Search({ navigation }) {
  const { currentScreen, setCurrentScreen } = useContext(NavBarContext);
  const search = useRef();
  
  useEffect(() => {
    const backAction = () => {
      currentScreen == "Search" || currentScreen == "ProductPageFromHome" ? setCurrentScreen("Home") : undefined
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    
    setTimeout(() => {
      search.current.focus();
    }, 1);

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 14, flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ flex: 1 }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
            <View style={styles.searchBarContainer}>
                <Pressable style={{ marginTop: 22, paddingHorizontal: 8 }} onPress={() => { currentScreen ==  "Search" || currentScreen == "ProductPageFromHome" ? setCurrentScreen("Home")  : null; navigation.goBack() }}>
                  {({ pressed }) => (<AntDesign style={{ color: pressed ? '#008298' : 'black' }} name="arrowleft" size={24} color="black" />)}
                </Pressable>
              <Searchbar ref={search} onPressIn={() => { navigation.navigate('Search'); setCurrentScreen("Search") }} style={styles.searchBar} iconColor="black" placeholder="Search Amazon" />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 6,
    paddingTop: 24,
    flexDirection: 'row'
  },
  searchBar: {
    flex: 9,
    margin: 9, 
    borderRadius: 7
  }
})
