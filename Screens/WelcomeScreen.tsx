import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WelcomeScreen = ({ user, navigation, firstName }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("Home");
    }, 15000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.helloText}>Hello, {firstName}</Text>
        <Text style={styles.accountText}>
          Your account was successfully created!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>
            If page does not redirect CLICK HERE
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Footer navigation={navigation} user={user} />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  helloText: {
    fontSize: 30,
    alignSelf: "center",
    paddingBottom: 40,
    fontWeight: "bold",
  },
  accountText: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "orange",
    marginTop: 50,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  content: {
    alignItems: "stretch",
    alignSelf: "center",
    width: "72%",
    flex: 1,
  },
});
