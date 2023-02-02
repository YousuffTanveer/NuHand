import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Listings from "../Screens/Listings";
// import { Text, TabView } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddListing from '../Screens/AddListing';
import Messages from '../Screens/Messages';
import App from '../App';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BorderVerticleOutlined } from '@ant-design/icons';


const Footer = ({navigation, user}) => {
  
  const handleAddListing = () => {
    if(user.hasOwnProperty("email")) {
      return navigation.navigate("AddListing")
    } else {
      alert("You must sign in to add listing!")
    }
  }

  const handleListing = () => {
    return navigation.navigate("Listings")
  }
  const handleMessages = () => {
    if(user.hasOwnProperty("email")) {
      return navigation.navigate("AllMessages")
    } else {
      alert("You must sign in to check messages!")
    }
  }

return (
  <View style={styles.tabContainer}>
      <TouchableOpacity  style={styles.button} onPress={handleAddListing}>
        <Ionicons name='add' color="white" size={32} style={styles.icon}/>
     <Text style={styles.buttonText} >Add Listing</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={handleListing}>
     <Ionicons name='ios-albums' color="white" size={32} style={styles.icon}/>
     <Text style={styles.buttonText}>Listings</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.button} onPress={handleMessages}>
     <Ionicons name='chatbubbles' color="white" size={32} style={styles.icon}/>
     <Text style={styles.buttonText}>Messages</Text>
     </TouchableOpacity>
     </View>
  
);
};

export default Footer

const styles = StyleSheet.create({

//   addButton: {
//     position: 'absolute',
//     bottom:0,
//     left:0,
// },
// listingsButton: {
//   position: 'absolute',
//   bottom:0,
//   right:0,
// },
// messagesButton: {
//   position: 'absolute',
//   bottom:0,
  
  
// },
// tabContainer: {
//   flexDirection: "row" ,
//   justifyContent: 'space-evenly',
//   borderTopWidth: 1,
//   backgroundColor: "blue",
//   color: "blue",
//   padding: 0,
//   margin: 0
// },
tabContainer: {
  // flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  height: 50,
},
button: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: "orange",
},
buttonText: {
  color: "white",
  fontWeight: "700",
  alignSelf: "center",
  fontSize: 10,
  paddingTop: 0,
  paddingBottom: 10,
},
icon: {
  alignSelf: "center",
  padding: 0,
  margin: 0
}
})