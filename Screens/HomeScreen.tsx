
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';

const HomeScreen = ( {navigation} ) => {

  const [currency, setCurrency] = useState("");

  const handleSubmit = () => {

  }

  return (
    
    <View>
          <Button
            onPress={() => {
                return navigation.navigate('Login')
            }}
            title="Login"
            />
    <Text style={styles.header}> nuHand </Text>
    <Text> GBP to </Text>
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Currency"
          value={currency}
          onChangeText={(text) => setCurrency(text)}
          style={styles.input}
        />
        </View>
    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Find Listings</Text>
      </TouchableOpacity>
    </View>
  )
  }

  export default HomeScreen;

 const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  header: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  inputContainer: {
    width: "40%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },});
