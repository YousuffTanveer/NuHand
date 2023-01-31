import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen";
import HomeScreen from "./Screens/HomeScreen";
import Listings from "./Screens/Listings";
import Account from "./Screens/Account";
import AddListing from "./Screens/AddListing";
import Footer from "./components/Footer";
import Messages from "./Screens/Messages";

import PersonalInfo from "./Screens/PersonalInfo";
import MyListings from "./Screens/MyListings";
import SavedListings from "./Screens/SavedListings";
import SignUpScreen from "./Screens/SignUpScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [user, setUser] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [userObject, setUserObject] = useState({})
  const [conversion, setConversion] = useState<conversionProps | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" options={{ title: "Login" }}>
          {(props) => <LogInScreen {...props} user={user} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ title: "Home" }}>
          {(props) => (
            <HomeScreen
              {...props}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              firstName={firstName}
              user={user}
              setUser={setUser}
              setUserObject={setUserObject}
              conversion={conversion}
              setConversion={setConversion}
              exchangeRate={exchangeRate}
              setExchangeRate={setExchangeRate}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Listings" options={{ title: "Listings" }}>
          {(props) => (
            <Listings
              {...props}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              conversion={conversion}
              exchangeRate={exchangeRate}
              setExchangeRate={setExchangeRate}

            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddListing" options={{ title: "AddListing" }}>
          {(props) => (
            <AddListing {...props} user={user} addListing={AddListing} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Account" options={{ title: "Account" }}>
          {(props) => <Account {...props} user={user} setUser={setUser} userObject={userObject} />}
        </Stack.Screen>
        <Stack.Screen name="SavedListings" options={{ title: "SavedListings" }}>
          {(props) => <SavedListings {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="PersonalInfo" options={{ title: "PersonalInfo" }}>
          {(props) => <PersonalInfo {...props} userObject={userObject} />}
        </Stack.Screen>
        <Stack.Screen name="MyListings" options={{ title: "MyListings" }}>
          {(props) => <MyListings {...props} user={user} />}
        </Stack.Screen>
        <Stack.Screen name="Messages" options={{ title: "Messages" }}>
          {(props) => <Messages {...props} />}
        </Stack.Screen>
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
