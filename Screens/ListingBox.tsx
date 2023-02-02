import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Button } from "@rneui/themed";
import {
  getListings,
  deleteListing,
  getUsers,
  usersRef,
} from "../firebaseConfig";
import { useEffect, useState } from "react";
import { color } from "@rneui/base";
import Ionicons from '@expo/vector-icons/Ionicons';

const ListingBox = ({ listing, setListings, user, userCoords, navigation }) => {
  const [seller, setSeller] = useState({
    first_name: "",
    last_name: "",
    location: "",
  });

  console.log(listing.coords);

const findDistance = () => {
  if (listing.coords) {
  const lat1 = userCoords[0]
  const lat2 = listing.coords[0];
  const lon1 = userCoords[1]
  const lon2 = listing.coords[1];

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
  console.log(typeof d)
  return (d*0.621371).toFixed(1); // in metres
  }
}
const distance = findDistance()
const distanceText = ((distance) => {
  if (distance === "NaN" || distance === undefined) {
    return null;
  }
    else if (distance < 1) {
      return "less than a mile away"
    } else return `Approx. ${distance} miles away`
    })

  useEffect(() => {
    getUsers.then((users) => {
      users.filter((thisUser) => {
        if (thisUser.email === listing.created_by) {
          setSeller(thisUser);
        }
      });
    });
  }, []);
  const deleteButtonClick = () => {
    setListings((currListings) => {
      return currListings.filter((data) => {
        if (listing.id !== data.id) {
          return data;
        }
      });
    });
    // setDeletedListing(listing.id)
    deleteListing(listing.id);
  };

  const messageButtonClick = () => {
    return navigation.navigate("Messages")
  }

  return (
    <View>
      <ListItem bottomDivider style={styles.containerStyle}>
        <ListItem.Content style={styles.details}>
          <ListItem.Title style={styles.name}>
            {seller.first_name} {seller.last_name}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.location}>
            {seller.location}
          </ListItem.Subtitle>
          {listing.created_by === user.email ? null : (
            <ListItem.Subtitle style={styles.details}>
              {distanceText(distance)}
            </ListItem.Subtitle>
          )}
        </ListItem.Content>
        <ListItem.Content style={styles.exchange}>
          <ListItem.Title style={styles.amount}>
            {listing.amount_to} {listing.to}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.asking}>
            {listing.amount_from} {listing.from}
          </ListItem.Subtitle>
          <View style={styles.buttonContainer}>
        {listing.created_by === user.email ? (
          null
        ) : (
          <Button
          radius={"sm"}
          type="solid"
          color={"grey"}
          style={styles.button}
          title="M"
          onPress={messageButtonClick}
        > 
        <Ionicons name='chatbubbles' color="white" size={21}/>
        </Button>
        )}
        {listing.created_by === user.email ? (
          <Button
            radius={"sm"}
            type="solid"
            style={styles.button}
            color={"red"}
            title="D"
            onPress={deleteButtonClick}
          >
            <Ionicons name='ios-trash' color="white" size={21}/>
          </Button>
        ) : (
          <Button
            radius={"sm"}
            type="solid"
            color={"orange"}
            style={styles.button}
            // title="S"
          > 
          <Ionicons name='heart' color="white" size={21}/>
          </Button>
        )}
      </View>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ListingBox;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  button: {
    width: 45,
    padding: 5,
  },
  details: {
    alignSelf: "baseline",
  },
  name: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    padding: 2,
  },
  exchange: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 18,
    color: "black",
    padding: 2,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "black",
    padding: 2,
  },
  asking: {
    fontSize: 16,
    color: "orange",
    padding: 2,
    fontWeight: "bold",
  },
});
