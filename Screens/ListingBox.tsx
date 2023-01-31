import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Button } from "@rneui/themed";
import { getListings, deleteListing, getUsers } from '../firebaseConfig';
import { useEffect, useState } from "react";

const ListingBox = ({ listing, setListings }) => {

  const [seller, setSeller] = useState({first_name: "", last_name: "", location: ""});

  useEffect(() => {
    getUsers.then((users) => {
      users.filter((thisUser) => {
        
        if (thisUser.email === listing.created_by) {
          setSeller(thisUser)
        }
      });
    })
  }, [])


  // const deleteButtonClick = () => {
  //   setListings((currListings) => {
  //   return currListings.filter((data) => {
  //       if(listing.id !== data.id) {
  //         return data
  //       }
  //     })
  //   })
  //   // setDeletedListing(listing.id)
  //         deleteListing(listing.id)
  // }

  return (
    <ListItem bottomDivider style={styles.containerStyle}>
     <Avatar size={50} rounded></Avatar>
      <ListItem.Content style={{flex: 1}}>
        <ListItem.Title style={styles.name}>{seller.first_name} {seller.last_name}</ListItem.Title>
        <ListItem.Subtitle style={{ padding: 2 }}>{seller.location}</ListItem.Subtitle>
        <Text style={{ padding: 5 }}>
          {listing.amount_from} {listing.from} to {listing.amount_to}{" "}
          {listing.to}
        </Text>
      </ListItem.Content>
      <View>
        <Button radius={"sm"} type="solid" style={styles.button} title="save" />
        <Button
          radius={"sm"}
          type="solid"
          style={styles.button}
          title="message"
        />
        <Button radius={"sm"} type="solid" style={styles.button} title="delete"/>
      </View>
    </ListItem>
  );
}

export default ListingBox;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "stretch",
    padding: 2,
    justifyContent: "flex-start",
  },
  button: {
    width: 50,
    padding: 2,
  },
  name: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }
});
