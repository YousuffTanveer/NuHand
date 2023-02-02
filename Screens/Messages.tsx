import { StyleSheet, Text, View, Button } from 'react-native'
import Footer from '../components/Footer'
import { auth, db, updateUser } from '../firebaseConfig'
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { signOut } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';

// let { colors } = () => { /* no-op */ }
// if (Platform.OS !== 'web') {
//   colors = require('react-native/Libraries/NewAppScreen');
// }

const Messages = ({navigation, user}) => {


  const [messages, setMessages] = useState([]);
  const onSignOut = () => {
    signOut(auth).catch(err => console.log(err)
    )
  }

  useLayoutEffect(() => {
    const colRef = collection(db, 'chats')
    const q = query(colRef,  orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, snapshot => {
      console.log("snapshot");
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))

      )
      
    })
    return unsubscribe
  }, [])

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {_id, createdAt, text, user} = messages[0]
      addDoc(collection(db, 'chats'), {
        _id,
        createdAt,
        text,
        user,
      })
  }, [])



  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
      }}
      messagesContainerStyle={{
        backgroundColor: Colors.white
      }}
    />
  )
}



export default Messages

const styles = StyleSheet.create({})