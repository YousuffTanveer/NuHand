import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { getListings, getUsers } from "../firebaseConfig";
import ListingBox from "./ListingBox";
import { SelectList } from "react-native-dropdown-select-list";
import { ListItem } from "@rneui/base";
import Footer from '../components/Footer';

const Listings = ( { navigation, selectedCurrency, setSelectedCurrency, conversion, exchangeRate, setExchangeRate, currencies, user, setListings, listings, userCoords }) => {



  useEffect(() => {
    getListings.then((listings) => {
      
      let filteredListings: Array<{}> = [];
      listings.filter((listing) => {
        if (listing.to === selectedCurrency) {
          filteredListings.push(listing);
        }
      });
      console.log(filteredListings, "<<<<<<<<<<<");
      
      setListings(filteredListings);
    });
  }, [selectedCurrency]);

  return (
    <View style={styles.containerStyle}>
      <SelectList
        setSelected={(val) => {
          setSelectedCurrency(val);
          setExchangeRate(conversion.rates[val]);
        }}
        data={currencies}
        save="value"
      ></SelectList>
      <ListItem>
        <ListItem.Content style={{ flex: 1 }}>
          <ListItem.Title style={styles.nearYou}>
            {listings.length} results found near you!
          </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content style={{ alignItems: "flex-end" }}>
          <ListItem.Title style={styles.X}>X:{exchangeRate}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ScrollView style={styles.listContainer}>
        {listings.map((listing) => {

          return <ListingBox listing={listing} user={user} setListings={setListings} userCoords={userCoords} navigation={navigation}/>;
        })}
      </ScrollView>
       <View>
        <Footer navigation={navigation} user={user} />
      </View>
    </View>
  );
};

export default Listings;

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
