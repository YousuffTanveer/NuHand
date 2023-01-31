import { View, Text, StyleSheet } from "react-native";


const MyListings = ({listings}) => {
    console.log(listings, "<<< listings");
    

    // const deleteButtonClick = () => {
    //     setListings((currListings) => {
    //     return currListings.filter((data) => {
    //         if(listing.id !== data.id) {
    //           return data
    //         }
    //       })
    //     })
    //     // setDeletedListing(listing.id)
    //           deleteListing(listing.id)
    //   }

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