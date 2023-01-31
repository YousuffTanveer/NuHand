import { StyleSheet, View, Button } from 'react-native'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Listings from "../Screens/Listings";
// import { Text, TabView } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddListing from '../Screens/AddListing';
import Messages from '../Screens/Messages';
import App from '../App';
import Ionicons from '@expo/vector-icons/Ionicons';


const Footer = ({navigation, user}) => {
  console.log(user);
  

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
      return navigation.navigate("Messages")
    } else {
      alert("You must sign in to check messages!")
    }
  }

return (
  <View style={styles.tabContainer}>
     <Ionicons.Button title="Add Listings" name="add" size={32} color="white" onPress={handleAddListing}> Add Listing </Ionicons.Button>
  <Ionicons.Button title="Listings" name="layers-outline" size={32} color="white" onPress={handleListing}> Listings </Ionicons.Button>
  <Ionicons.Button title="Messages" name="chatbubbles-outline" size={32} color="white" onPress={handleMessages}> Messages </Ionicons.Button>
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
tabContainer: {
  flexDirection: "row" ,
  justifyContent: 'space-evenly',
  borderTopWidth: 1,
  backgroundColor: "blue",
  color: "blue",
  padding: 0,
  margin: 0
}
})