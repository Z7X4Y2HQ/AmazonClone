import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  
    cardContainer: {
      flex: 0.2,
      // backgroundColor: "grey",
      width: "95%",
      flexDirection: "row",
      borderWidth: 2,
      borderRadius: 5,
      borderColor: "#d1d1d1",
      
      // marginHorizontal:13,
    },
    Image: {
      flex: 2,
      // width: 145,
      height: 155,
      resizeMode: "contain",
    },
    // leftContainer: {
    //   flex: 2,
    //   backgroundColor: "blue",
    // },
    rightContainer: {
      padding: 7,
      flex: 3,
      backgroundColor: "white",
    },
    title: {
      fontSize: 18,
    },
    price: {
      fontSize: 18,
      fontWeight: "bold",
      margin:2,
      // backgroundColor:'blue',
    },
  
    rating: {
      flexDirection: "row",
      // paddingLeft:2,
      marginTop: 3,
    },
    star: {
      margin: 2,
    },
    old: {
      textDecorationLine: 'line-through',
      fontSize: 12,
      fontWeight: "normal",
      // paddingLeft:2,
      // backgroundColor:'red',
    
    },
  });
  