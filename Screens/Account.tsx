import { View, Text, StyleSheet, Button } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";

const Account = ({ user, navigation, setUser, userObject }) => {
  const handleSignOut = () => {
    setUser([]);
    return navigation.navigate("Home");
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.profileElements}>
        {userObject.profile_image ? (
          <View>
          <Avatar size={50} rounded source={userObject.profile_image}></Avatar>
          <Text>change image</Text>
          </View>
        ) : (
          <View>
            <Avatar size={50} rounded></Avatar>
            <Button title={"add profile image"}></Button>
          </View>
        )}
        <Text style={styles.userName}>
          {userObject.first_name} {userObject.last_name}
        </Text>
        <Text style={styles.location}>{userObject.location}</Text>
      </View>
      <View style={styles.listContainer}>
        <ListItem
          bottomDivider
          topDivider
          onPress={() => {
            return navigation.navigate("PersonalInfo");
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>
              Personal Information
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => {
            return navigation.navigate("SavedListings");
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>
              Saved Listings
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem
          bottomDivider
          onPress={() => {
            return navigation.navigate("MyListings");
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>
              My Listings
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
      <Button onPress={handleSignOut} title={"Sign Out"} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "white",
    flex: 1,
  },
  profileElements: {
    padding: 40,
    alignItems: "center",
  },
  userName: {
    padding: 10,
    fontSize: 30,
    color: "black",
  },
  location: {
    padding: 5,
    fontSize: 18,
    color: "black",
  },
  menuOptions: {
    fontSize: 18,
    color: "black",
  },
  listContainer: {
    flex: 1,
    margin: 20,
  },
});
