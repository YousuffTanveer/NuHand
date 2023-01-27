import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getListings } from "./firebaseConfig";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen";
import HomeScreen from "./Screens/HomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import WelcomeScreen from "./Screens/WelcomeScreen"
type RootStackParamList = {
  Login: undefined,
  Home: undefined
};




export default function App() {
  const [listings, setListings] = useState<any[]>([]);
  const [allFirstName, setAllFirstName] = useState("")
  const [firstName, setFirstName] = useState("");


  getListings.then((result) => {
    const results: Array<any> = result;
    setListings(results);
  });
  


const Stack = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name='Home' options={{ title: 'Home' }}>
  {(props) => <HomeScreen {...props} listings={listings} />}
</Stack.Screen>
        <Stack.Screen name='SignUp' options={{ title: 'SignUp' }}>
  {(props) => <SignUpScreen {...props} setAllFirstName={setAllFirstName} firstName={firstName} setFirstName={setFirstName}/>}
</Stack.Screen>
        <Stack.Screen name='Welcome' options={{ title: 'SignUp' }}>
  {(props) => <WelcomeScreen {...props} allFirstName={allFirstName} firstName={firstName} />}
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
