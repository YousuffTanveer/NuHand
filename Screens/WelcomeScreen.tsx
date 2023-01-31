import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import { Avatar} from "@rneui/themed";

const WelcomeScreen = ({navigation, firstName, imageUrl}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home');
    }, 15000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View>
       <Avatar
          size={60}
          rounded
          source={ imageUrl? {uri: imageUrl} : {uri: "https://firebasestorage.googleapis.com/v0/b/nuhand-45f9e.appspot.com/o/blank.png?alt=media&token=b08d5268-1344-48d7-b0ae-41320604b70b"}}
          title={"Avatar"}
        />
      <Text>WelcomeScreen</Text>
      <Text>Hello, {firstName}</Text>
      <Text>Your account was successfully created!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>If page does not redirect click here</Text>
      </TouchableOpacity>
      <View>
        <Footer navigation={navigation} />
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})