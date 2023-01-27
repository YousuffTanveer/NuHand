import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getListings } from '../firebaseConfig';
import ListingBox from './ListingBox';
import { SelectList } from 'react-native-dropdown-select-list'

const Listings = ( { selectedCurrency, setSelectedCurrency }) => {
    const [listings, setListings] = useState<any[]>([]);
    useEffect(() => {
    getListings.then((listings) => {
      let filteredListings: Array<{}> = [];
        listings.filter((listing) => {
          if (listing.to === selectedCurrency) {
            filteredListings.push(listing)
          }
        })
        setListings(filteredListings);
      });
    }, [selectedCurrency])

    const data = [
      {key:'1', value:'USD'},
      {key:'2', value:'EUR', exR: 0.81},
    ]

    return (
      
      <View>
      <SelectList 
          setSelected={(val) => setSelectedCurrency(val)} 
          data={data} 
          save="value"
      ></SelectList>
      <Text>{listings.length} results found near you!</Text>
      <Text>current exchange rate:</Text>
     
        <View>
        {listings.map((listing) => {
            return  <ListingBox listing={listing}/>
        })}
        </View>
        </View>
        )}
    

export default Listings

const styles = StyleSheet.create
   
  
