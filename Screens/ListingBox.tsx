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

const ListingBox = ({ listing, setListings, user }) => {
  const [seller, setSeller] = useState({
    first_name: "",
    last_name: "",
    location: "",
  });

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
          <ListItem.Subtitle>... miles away</ListItem.Subtitle>
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
        />
        )}
        {listing.created_by === user.email ? (
          <Button
            radius={"sm"}
            type="solid"
            style={styles.button}
            color={"red"}
            title="D"
            onPress={deleteButtonClick}
          />
        ) : (
          <Button
            radius={"sm"}
            type="solid"
            color={"orange"}
            style={styles.button}
            title="S"
          />
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
    padding: 5
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
    fontWeight: "bold"
  },
  location: {
    fontSize: 14,
    color: "black",
    padding: 2
  },
  asking: {
    fontSize: 16,
    color: "orange",
    padding: 2,
    fontWeight: "bold"
  }
});
