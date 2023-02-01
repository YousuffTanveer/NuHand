import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>nuHand</Text>
      <Text style={styles.tag}>NO MIDDLEMAN. NO FEES.</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  header: {
    alignSelf: "center",
    fontSize: 72,
    fontFamily: "Droid Sans Mono",
    fontWeight: "bold"
  },
  tag: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});
