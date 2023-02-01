import { View, Text, StyleSheet, Button } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";

const PersonalInfo = ({ userObject, imageUrl }) => {
  console.log(imageUrl)
  return (
    <View style={styles.containerStyle}>
      <ListItem style={styles.avatar}>
        {imageUrl ? (
          <View>
            <Avatar
              size={100}
              rounded
              source={{uri: imageUrl}}
            ></Avatar>
            {/* <Text>change image</Text> */}
          </View>
        ) : (
          <View>
            <Avatar size={100} rounded source={{
               uri: "https://firebasestorage.googleapis.com/v0/b/nuhand-45f9e.appspot.com/o/blank.png?alt=media&token=b08d5268-1344-48d7-b0ae-41320604b70b"}}></Avatar>
            {/* <Button title={"add profile image"}></Button> */}
          </View>
        )}
      </ListItem>
      <View style={styles.listContainer}>
        <ListItem bottomDivider topDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Name:</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {userObject.first_name} {userObject.last_name}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Location:</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {userObject.location}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Phone Number:</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {userObject.number}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Email:</ListItem.Title>
            <ListItem.Subtitle style={styles.subtitle}>
              {userObject.email}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "stretch",
    justifyContent: "flex-start",
    backgroundColor: "white",
    flex: 1,
  },
  avatar: {
    padding: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "black",
  },
  subtitle: {
    fontSize: 18,
    color: "black",
  },
  listContainer: {
    flex: 1,
    margin: 20,
  },
});
