import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen";
import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import Listings from "./Screens/Listings";
import Account from "./Screens/Account";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export default function App() {
  const [firstName, setFirstName] = useState("");

  const [user, setUser] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("");

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SignUp" options={{ title: "SignUp" }}>
          {(props) => (
            <SignUpScreen
              {...props}
              firstName={firstName}
              setFirstName={setFirstName}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Welcome" options={{ title: "Welcome" }}>
          {(props) => <WelcomeScreen {...props} firstName={firstName} />}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ title: "Login" }}>
          {(props) => <LogInScreen {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ title: "Home" }}>
          {(props) => (
            <HomeScreen
              {...props}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Listings" options={{ title: "Listings" }}>
          {(props) => (
            <Listings
              {...props}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  items: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    textAlign: "center",
  },
});
