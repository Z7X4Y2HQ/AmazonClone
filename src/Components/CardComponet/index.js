import React from 'react'
import { Text, View, Image ,StyleSheet} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function CardComponent(props) {
  const items = props.item;
  return (
<View style={styles.cardContainer}>
       
        <Image style={styles.Image} source={{uri: items.images[0]}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {items.description}
          </Text>
          {/* stars */}
          <View style={styles.rating}>
            <FontAwesome
              style={styles.star}
              size={18}
              name="star"
              color={"#f1961d"}
            />
            <FontAwesome
              style={styles.star}
              size={18}
              name="star"
              color={"#f1961d"}
            />
            <FontAwesome
              style={styles.star}
              size={18}
              name="star"
              color={"#f1961d"}
            />
            <FontAwesome
              style={styles.star}
              size={18}
              name="star"
              color={"#f1961d"}
            />
            <FontAwesome
              style={styles.star}
              size={18}
              name="star-half-empty"
              color={"#f1961d"}
            />
            <Text style={{ paddingLeft: 3 }}>{items.reviews}</Text>
          </View>
          <Text style={styles.price}>
            from ${items.newPrice} 
            {items.oldPrice && (<Text style={styles.old}>${items.oldPrice}</Text>)}
            
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
    cardContainer: {
    //   flex: 1,
      backgroundColor: "white",
      width: "100%",
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderBottomWidth: 0.5,
      // borderRadius: 5,
      borderColor: "#d1d1d1",
      // original its 4 and now its 8
      marginLeft:4, 
      marginVertical:2,
      paddingVertical:3,
      
      // marginHorizontal:13,
    },
    Image: {
      flex: 2,
      // width: 145,
      height: 155,
      resizeMode: "contain",
      backgroundColor: "white"
    },
    
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
  