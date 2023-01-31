import { View, Text, StyleSheet, Button } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";

const PersonalInfo = ({ userObject }) => {
  return (
    <View style={styles.containerStyle}>
      <ListItem style={styles.avatar}>
        {userObject.profile_image ? (
          <View>
            <Avatar
              size={50}
              rounded
              source={userObject.profile_image}
            ></Avatar>
            <Text>change image</Text>
          </View>
        ) : (
          <View>
            <Avatar size={50} rounded></Avatar>
            <Button title={"add profile image"}></Button>
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
