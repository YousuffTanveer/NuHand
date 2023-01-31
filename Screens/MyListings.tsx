import { View, Text, StyleSheet } from "react-native";


const MyListings = ({myListings}) => {

    return(
        <View>
            <Text>All listings</Text>
        </View>
    )
     
}

export default MyListings

const styles = StyleSheet.create({
    containerStyle: {
      alignItems: "stretch",
      padding: 2,
      justifyContent: "flex-start",
    },
    button: {
      padding: 2,
    },
  });