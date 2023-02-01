import { View, StyleSheet, ScrollView } from "react-native";
import { getListings } from "../firebaseConfig";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ListingBox from "./ListingBox";

const MyListings = ({ user, setListings, listings, newListing, navigation }) => {
    
  useEffect(() => {
    getListings.then((listings) => {

      const filteredListing = listings.filter((myListing) => {
          
          if (user.email === myListing.created_by) {
            return myListing
        }
      });
      filteredListing.push(newListing)   
      setListings(filteredListing)
    });

    
  }, [newListing]);

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

  return (
    <View style={styles.containerStyle}>
      <ScrollView style={styles.listContainer}>
        {listings.map((listing) => {

          return <ListingBox listing={listing} user={user} setListings={setListings} />;
        })}
      </ScrollView>
       <View>
        <Footer navigation={navigation} user={user} />
      </View>
    </View>
  );
};


export default MyListings;

const styles = StyleSheet.create({
    containerStyle: {
      alignItems: "stretch",
      justifyContent: "flex-start",
      backgroundColor: "white",
      flex: 1,
    },
    nearYou: {
      width: 300,
      fontSize: 18,
      color: "black",
      fontWeight: "bold"
    },
    X: {
      alignItems: "flex-end",
      fontSize: 18,
      color: "orange",
      fontWeight: "bold"
    },
    listContainer: {
      flex: 1,
    },
  });