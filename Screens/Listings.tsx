import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getListings, getUsers } from '../firebaseConfig';
import ListingBox from './ListingBox';
import { SelectList } from 'react-native-dropdown-select-list'
import Footer from '../components/Footer';
import { ListItem } from '@rneui/base';

const Listings = ( { navigation, selectedCurrency, setSelectedCurrency, conversion, exchangeRate, setExchangeRate, currencies, setListings, listings }) => {

  interface conversionProps {
    amount: number;
    base: string;
    date: string;
    rates: { [key: string]: number };
  }


    useEffect(() => {
    getListings.then((listings) => {
      let filteredListings: Array<{}> = [];
        listings.filter((listing) => {
          console.log(listing)
          if (listing.to === selectedCurrency) {
            filteredListings.push(listing)
          }
        })
        setListings(filteredListings);
      });
    }, [selectedCurrency])




    return (
      
      <View style={styles.containerStyle}>
      <SelectList 
          setSelected={(val) => {
            setSelectedCurrency(val)
            setExchangeRate(conversion.rates[val])}}
          data={currencies} 
          save="value"
      ></SelectList>
      <ListItem>
      <ListItem.Content style={{flex: 1}}>
      <ListItem.Title style={styles.nearYou}>{listings.length} results found near you!</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content style={{alignItems: "flex-end"}}>
      <ListItem.Title style={styles.X}>X:{exchangeRate}</ListItem.Title>
      </ListItem.Content>
      </ListItem>
        <View style={styles.listContainer}>
        {listings.map((listing) => {
            return  <ListingBox listing={listing} setListings={setListings}/>
        })}
        </View>
        <View>
        <Footer navigation={navigation} />
      </View>
        </View>
        )}
    

export default Listings

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
  },
  X: {
    alignItems: "flex-end",
    fontSize: 18,
    color: "black",
  },
  listContainer: {
    flex: 1,
  },
});
   
  