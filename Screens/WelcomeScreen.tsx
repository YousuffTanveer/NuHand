import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const WelcomeScreen = ({navigation, firstName}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home');
    }, 15000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Text>Hello, {firstName}</Text>
      <Text>Your account was successfully created!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>If page does not redirect click here</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})