import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import { updateUser } from '../firebaseConfig'


const Messages = ({navigation}) => {

  return (
    <View>
      <Text>Messages</Text>
      <View>
        <Footer navigation={navigation} />
      </View>
    </View>
  )
}



export default Messages

const styles = StyleSheet.create({})