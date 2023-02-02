import { View, StyleSheet, ScrollView } from "react-native";
import { getListings } from "../firebaseConfig";
import { useEffect } from "react";
import Footer from "../components/Footer";
import ListingBox from "./ListingBox";

const MyListings = ({
  user,
  setListings,
  listings,
  newListing,
  navigation,
  userCoords,
}) => {
  useEffect(() => {
    getListings.then((listings) => {
      const filteredListing = listings.filter((myListing) => {
        if (user.email === myListing.created_by) {
          return myListing;
        }
      });
      if (newListing.created_by === user.email) {
      filteredListing.push(newListing);
      }
      setListings(filteredListing);
    });
  }, [newListing]);

  return (
    <View style={styles.containerStyle}>
      <ScrollView style={styles.listContainer}>
        {listings.map((listing) => {
          return (
            <ListingBox
              navigation={navigation}
              listing={listing}
              user={user}
              setListings={setListings}
              userCoords={userCoords}
            />
          );
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
    fontWeight: "bold",
  },
  X: {
    alignItems: "flex-end",
    fontSize: 18,
    color: "orange",
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
  },
});
