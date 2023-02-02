import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = ({ navigation, user }) => {
  const handleAddListing = () => {
    if (user.hasOwnProperty("email")) {
      return navigation.navigate("AddListing");
    } else {
      alert("You must sign in to add listing!");
    }
  };

  const handleListing = () => {
    return navigation.navigate("Listings");
  };
  const handleMessages = () => {
    if (user.hasOwnProperty("email")) {
      return navigation.navigate("AllMessages");
    } else {
      alert("You must sign in to check messages!");
    }
  };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.button} onPress={handleAddListing}>
        <Ionicons name="add" color="white" size={32} style={styles.icon} />
        <Text style={styles.buttonText}>Add Listing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleListing}>
        <Ionicons
          name="ios-albums"
          color="white"
          size={32}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Listings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMessages}>
        <Ionicons
          name="chatbubbles"
          color="white"
          size={32}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Messages</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  tabContainer: {
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
    margin: 0,
  },
});
