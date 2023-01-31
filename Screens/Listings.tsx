import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getListings } from '../firebaseConfig';
import ListingBox from './ListingBox';
import { SelectList } from 'react-native-dropdown-select-list'
import Footer from '../components/Footer';


const Listings = ( { navigation, selectedCurrency, setSelectedCurrency }) => {
  const [listings, setListings] = useState<any[]>([]);
  // const [deletedListing, setDeletedListing] = useState(null);
  
  
    useEffect(() => {
    getListings
    .then((listings) => {
      
        const filteredListings = listings.filter((listing) => listing.to === selectedCurrency);
        setListings(filteredListings);
    })
    .catch((error) => {
        console.log(error);
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
            return  <ListingBox listing={listing} setListings={setListings}/>
        })}
        </View>
        <View>
        <Footer navigation={navigation} />
      </View>
        </View>
        )}
    

export default Listings

const styles = StyleSheet.create
   
  
