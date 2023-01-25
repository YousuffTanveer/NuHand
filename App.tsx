import * as React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { getUsers } from "./firebaseConfig";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./Components/LogInScreen";
import HomeScreen from "./Components/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [users, setUsers] = useState<any[]>([]);

  getUsers.then((result) => {
    const results: Array<any> = result;
    setUsers(results);
  });

  return (
    // <View>
    //   <Text>Hello
    //   </Text>
    //   <FlatList keyExtractor={(item) => item.id} data={users} renderItem={({item}) => (
    //     <Text style={styles.items}>{item.username}</Text>
    //   )}/>
    //   <Text>
    //   </Text>
    //   <Text>Test</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
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
