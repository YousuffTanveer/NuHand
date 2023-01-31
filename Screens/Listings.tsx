import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getListings, getUsers } from '../firebaseConfig';
import ListingBox from './ListingBox';
import { SelectList } from 'react-native-dropdown-select-list'
import { ListItem } from '@rneui/base';

const Listings = ( { selectedCurrency, setSelectedCurrency, conversion, exchangeRate, setExchangeRate }) => {

  interface conversionProps {
    amount: number;
    base: string;
    date: string;
    rates: { [key: string]: number };
  }
    const [listings, setListings] = useState<any[]>([]);

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

    const data = [
      { key: "1", value: "AUD" },
      { key: "2", value: "BGN" },
      { key: "3", value: "BRL" },
      { key: "4", value: "CAD" },
      { key: "5", value: "CHF" },
      { key: "6", value: "CNY" },
      { key: "7", value: "CZK" },
      { key: "8", value: "DKK" },
      { key: "9", value: "EUR" },
      { key: "10", value: "HKD" },
      { key: "11", value: "HUF" },
      { key: "12", value: "IDR" },
      { key: "13", value: "ILS" },
      { key: "14", value: "INR" },
      { key: "15", value: "ISK" },
      { key: "16", value: "JPY" },
      { key: "17", value: "KRW" },
      { key: "18", value: "MXN" },
      { key: "19", value: "MYR" },
      { key: "20", value: "NOK" },
      { key: "21", value: "NZD" },
      { key: "22", value: "PHP" },
      { key: "23", value: "PLN" },
      { key: "24", value: "RON" },
      { key: "25", value: "SEK" },
      { key: "26", value: "SGD" },
      { key: "27", value: "THB" },
      { key: "28", value: "TRY" },
      { key: "29", value: "USD" },
      { key: "30", value: "ZAR" },
    ];

    return (
      
      <View style={styles.containerStyle}>
      <SelectList 
          setSelected={(val) => {
            setSelectedCurrency(val)
            setExchangeRate(conversion.rates[val])}}
          data={data} 
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
            return  <ListingBox listing={listing}/>
        })}
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
   
  