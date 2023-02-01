import { StyleSheet, Text, View, Button } from 'react-native'
import Footer from '../components/Footer'
import { updateUser } from '../firebaseConfig'
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


const Messages = ({navigation, user}) => {


  const [messages, setMessages] = useState([]);


  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => {
        // Save the new message to Firebase
      }}
      user={{
        _id: 1,
      }}
    />
  )
}



export default Messages

const styles = StyleSheet.create({})