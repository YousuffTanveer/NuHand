import { StyleSheet, View, Button } from 'react-native'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Listings from "../Screens/Listings";
// import { Text, TabView } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddListing from '../Screens/AddListing';
import App from '../App';
// import {navigation} from "../App"

// const Tab = createBottomTabNavigator();

const Footer = ({navigation}) => {

    const [index, setIndex] = React.useState(0);

    console.log(navigation, "<<<< navigation")

return (
  <View>
  <Button title={"AddListing"} onPress={() => {return navigation.navigate("AddListing")}}/>
  </View>
  // <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen name="Listings" component={Listings} />
  //       <Tab.Screen name="AddListing" component={AddListing} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // <View style={styles.tabContainer}>
  //   <Tab
  //     value={index}
  //     onChange={(e) => setIndex(e)}
  //     indicatorStyle={{
  //       backgroundColor: 'white',
  //       height: 3,
  //     }}
  //     variant="primary"
  //   >
  //     <Tab.Item
  //       title="Listings"
  //       titleStyle={{ fontSize: 12 }}
  //       icon={{ name: 'albums', type: 'ionicon', color: 'white' }}
  //       onPress={() => {
  //           return navigation.navigate("Listings")
  //       }}
  //     />
  //     <Tab.Item
  //       title="Add Listings"
  //       titleStyle={{ fontSize: 12 }}
  //       icon={{ name: 'add', type: 'ionicon', color: 'white' }}
  //       onPress={() => {alert("Hello");
  //       }}
  //     />
  //     <Tab.Item
  //       title="Messages"
  //       titleStyle={{ fontSize: 12 }}
  //       icon={{ name: 'chatbubbles', type: 'ionicon', color: 'white' }}
  //     />
  //   </Tab>

  //   <TabView value={index} onChange={setIndex} animationType="spring">
  //     <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
  //       <Text>Listings</Text>
  //     </TabView.Item>
  //     <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
  //       <Text >Add Listing</Text>
  //     </TabView.Item>
  //     <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
  //       <Text>Messages</Text>
  //     </TabView.Item>
  //   </TabView>
  // </View>
);
};


export default Footer

const styles = StyleSheet.create({
  tabContainer: {
   justifyContent: 'flex-end'
  }
})