import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AllMessages = ({navigation}) => {
    const handleMessage = () => {
        return navigation.navigate("Messages")
      }
  return (
    <View>
    <TouchableOpacity onPress={handleMessage}>
    <Text>Check messages with</Text>
    </TouchableOpacity>
    </View>
  )
}

export default AllMessages

const styles = StyleSheet.create({
    
})