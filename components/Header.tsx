import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text style={styles.header}> nuHand </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    padding: 40,
  alignItems: "center",
  fontSize: 60
},
})

