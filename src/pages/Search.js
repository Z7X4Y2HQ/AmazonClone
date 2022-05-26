import { View, Pressable } from 'react-native';
import { useEffect, useRef } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Search({navigation}){
  
  const searchBar = useRef();

  useEffect(() => {
    setTimeout(() => {
      searchBar.current.focus();
    }, 1);
  });

  return(
    <View style={{flex:1}}>
      <View style={{flex:14, flexDirection: 'row', alignItems: 'flex-start'}}>
          <View style={{flex:1}}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}}  colors={['#81d8e3', '#93dfd9', '#a5e7cf']}>
              <View style={{flexDirection: 'row', paddingLeft: 5, paddingRight: 6, paddingTop: 24}}>
                <Pressable style={{marginTop:22}} onPress={() => navigation.goBack()}>
                  {({ pressed }) => (<AntDesign style={{ color: pressed ? '#008298' : 'black'}} name="arrowleft" size={24} color="black" />)}
                </Pressable>
                <Searchbar ref={searchBar} style={{flex: 9, margin: 9, borderRadius: 7}} iconColor="black" placeholder="Search Amazon" />
              </View>
            </LinearGradient>
          </View>
      </View>
    </View>
  )
}
