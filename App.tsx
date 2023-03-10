import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen";
import HomeScreen from "./Screens/HomeScreen";
import Listings from "./Screens/Listings";
import Account from "./Screens/Account";
import AddListing from "./Screens/AddListing";
import Messages from "./Screens/Messages";

import PersonalInfo from "./Screens/PersonalInfo";
import MyListings from "./Screens/MyListings";
import SavedListings from "./Screens/SavedListings";
import SignUpScreen from "./Screens/SignUpScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import AllMessages from "./Screens/AllMessages";

interface conversionProps {
  amount: number;
  base: string;
  date: string;
  rates: { [key: string]: number };
}

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [user, setUser] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [exchangeRates, setExchangeRates] = useState({})
  const currencies = [{ key: "1", value: "AUD" },
  { key: "2", value: "BGN" },
  { key: "3", value: "BRL" },
  { key: "4", value: "CAD" },
  { key: "5", value: "CHF" },
  { key: "6", value: "CNY" },
  { key: "7", value: "CZK" },
  { key: "8", value: "DKK" },
  { key: "9", value: "EUR" },
  { key: "10", value: "HKD" },
  { key: "11", value: "HUF" },
  { key: "12", value: "IDR" },
  { key: "13", value: "ILS" },
  { key: "14", value: "INR" },
  { key: "15", value: "ISK" },
  { key: "16", value: "JPY" },
  { key: "17", value: "KRW" },
  { key: "18", value: "MXN" },
  { key: "19", value: "MYR" },
  { key: "20", value: "NOK" },
  { key: "21", value: "NZD" },
  { key: "22", value: "PHP" },
  { key: "23", value: "PLN" },
  { key: "24", value: "RON" },
  { key: "25", value: "SEK" },
  { key: "26", value: "SGD" },
  { key: "27", value: "THB" },
  { key: "28", value: "TRY" },
  { key: "29", value: "USD" },
  { key: "30", value: "ZAR" },]
  const [listings, setListings] = useState<any[]>([]);
  const [userObject, setUserObject] = useState({})
  const [conversion, setConversion] = useState<conversionProps | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState("")
  const [newListing, setNewListing] = useState({})
  const [userCoords, setUserCoords] = useState([])

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" options={{ title: "Login" }}>
          {(props) => <LogInScreen {...props} user={user} setUser={setUser} setImageUrl={setImageUrl} setUserCoords={setUserCoords}/>}
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
              currencies={currencies}
              setExchangeRates={setExchangeRates}
              setUserObject={setUserObject}
              conversion={conversion}
              setConversion={setConversion}
              exchangeRate={exchangeRate}
              setExchangeRate={setExchangeRate}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              userCoords={userCoords}
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
              currencies={currencies}
              user={user}
              setListings={setListings}
              listings={listings}
              userCoords={userCoords}

            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddListing" options={{ title: "AddListing" }}>
          {(props) => (
            <AddListing {...props} currencies={currencies} exchangeRates={exchangeRates} user={user} setListings={setListings} setNewListing={setNewListing} userCoords={userCoords}/>
          )}
        </Stack.Screen>
        <Stack.Screen name="Account" options={{ title: "Account" }}>
          {(props) => <Account {...props} user={user} setUser={setUser} userObject={userObject} setUserObject={setUserObject} imageUrl={imageUrl} setImageUrl={setImageUrl} />}
        </Stack.Screen>
        <Stack.Screen name="AllMessages" options={{ title: "AllMessages" }}>
          {(props) => <AllMessages {...props}  />}
        </Stack.Screen>
        <Stack.Screen name="SavedListings" options={{ title: "SavedListings" }}>
          {(props) => <SavedListings {...props} user={user} imageUrl={imageUrl}/>}
        </Stack.Screen>
        <Stack.Screen name="PersonalInfo" options={{ title: "PersonalInfo" }}>
          {(props) => <PersonalInfo {...props} userObject={userObject} setUserObject={setUserObject} imageUrl={imageUrl} />}
        </Stack.Screen>
        <Stack.Screen name="MyListings" options={{ title: "MyListings" }}>
          {(props) => <MyListings {...props} user={user} setListings={setListings} listings={listings} newListing={newListing} userCoords={userCoords} />}
        </Stack.Screen>
        <Stack.Screen name="Messages" options={{ title: "Messages" }}>
          {(props) => <Messages {...props} user={user}/>}
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{ title: "SignUp" }}>
          {(props) => (
            <SignUpScreen
              {...props}
              firstName={firstName}
              setFirstName={setFirstName}
              setUser={setUser}
              setImageUrl={setImageUrl}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Welcome" options={{ title: "Welcome" }}>
          {(props) => <WelcomeScreen {...props} firstName={firstName} imageUrl={imageUrl} user={user}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
