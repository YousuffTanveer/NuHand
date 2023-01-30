
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { Avatar, ListItem } from "@rneui/themed";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeScreen = ( { navigation, selectedCurrency, setSelectedCurrency, firstName, user, setUser} ) => {
  

  // api data:
  const data = [
    {key:'1', value:'USD'},
    {key:'2', value:'EUR'},
]

  const handleSubmit = () => {
    if (selectedCurrency) {
    return navigation.navigate('Listings')
    } 
  }

  const handleSubmitLogin = () => {
    if (user.length <= 0) {
      return navigation.navigate('Login')
    } else {
      return navigation.navigate('Account')
    }
  }

  console.log(user);
  

  return (
    
    <View style={styles.container}>
       <View>
            <Avatar
            size={60}
            onPress={handleSubmitLogin}
            rounded
            title={user.length <= 0 ? "Login" : "Profile"}
            />
        </View>
        <Header/>
    <View style={styles.content}>
    <Text> GBP to </Text>
    <SelectList 
        setSelected={(val) => setSelectedCurrency(val)} 
        data={data} 
        save="value"
    />
    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Find Listings</Text>
      </TouchableOpacity>
        </View>
      <View >
           <Footer navigation={navigation}/>
        </View>
    </View>
  )
  }

  export default HomeScreen;

 const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    padding: 40,
  alignItems: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#0782f9",
    width: "10%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  content: {
    alignItems: "stretch",
    flex: 1

  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
