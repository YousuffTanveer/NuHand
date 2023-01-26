import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getListings } from "./firebaseConfig";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Screens/LogInScreen";
import HomeScreen from "./Screens/HomeScreen";

type RootStackParamList = {
  Login: undefined,
  Home: undefined
};



export default function App() {
  const [listings, setListings] = useState<any[]>([]);

  getListings.then((result) => {
    const results: Array<any> = result;
    console.log(result);
    
    setListings(results);
  });

const Stack = createNativeStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
