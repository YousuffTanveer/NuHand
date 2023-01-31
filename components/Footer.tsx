import { StyleSheet, View, Button } from 'react-native'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Listings from "../Screens/Listings";
// import { Text, TabView } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddListing from '../Screens/AddListing';
import Messages from '../Screens/Messages';
import App from '../App';
import Ionicons from '@expo/vector-icons/Ionicons';
// import {navigation} from "../App"

// const Tab = createBottomTabNavigator();

const Footer = ({navigation}) => {

    // const [index, setIndex] = React.useState(0);


return (
  <View style={styles.tabContainer}>
     <Ionicons title="Add Listings"name="add" size={32} color="green" />
  <Button style={styles.addButton} title={"AddListing"} onPress={() => {return navigation.navigate("AddListing")}}/>
  <Button style={styles.listingsButton} title={"Listings"} onPress={() => {return navigation.navigate("AddListing")}}/>
  <Button style={styles.messagesButton} title={"Messages"} onPress={() => {return navigation.navigate("Messages")}}/>
  {/* <Button title={"Messages"} onPress={() => {return navigation.navigate("Messages")}}/> */}
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
  // tabContainer: {
  //  justifyContent: 'flex-end'
  // }
  addButton: {
    position: 'absolute',
    bottom:0,
    left:0,
},
listingsButton: {
  position: 'absolute',
  bottom:0,
  right:0,
},
messagesButton: {
  position: 'absolute',
  bottom:0,
  
  
},
tabContainer: {
  flexDirection: "row" ,
  marginLeft: 20, 
  justifyContent: 'space-evenly',
  backgroundColor: 'white',
  borderTopWidth: 1
}
})