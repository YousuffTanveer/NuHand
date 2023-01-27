
import { View, Text, StyleSheet } from 'react-native';

const ListingBox = ({ listing }) => {
    return (
        <View style={styles.container}>
            <View>profile image</View>
        <Text>
            From: {listing.from} to {listing.to}
        </Text>
            <Text>{listing.amount_from} to {listing.amount_to} </Text>
            </View>
            )
}

export default ListingBox

const styles = StyleSheet.create({
    
    container: {
        width: "100%",
        height: 100,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    }
    });