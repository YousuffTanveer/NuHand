import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import { updateUser } from "../firebaseConfig";

const PersonalInfo = ({ setUserObject, userObject, imageUrl }) => {
  console.log(userObject);
  
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
          </View>
        ) : (
          <View>
            <Avatar size={100} rounded source={{
               uri: "https://firebasestorage.googleapis.com/v0/b/nuhand-45f9e.appspot.com/o/blank.png?alt=media&token=b08d5268-1344-48d7-b0ae-41320604b70b"}}></Avatar>
          </View>
        )}
      </ListItem>
      <View style={styles.listContainer}>
        <ListItem bottomDivider topDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>First Name:</ListItem.Title>
            <TextInput
            style={styles.subtitle}
            placeholder="First Name"
            value={userObject.first_name}
            onChangeText={(text) => {
              setUserObject({
                ...userObject, 
                first_name: text
              })
            }}
          />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider topDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Last Name:</ListItem.Title>
            <TextInput
            style={styles.subtitle}
            placeholder="Last Name"
            value={userObject.last_name}
            onChangeText={(text) => {
              setUserObject({
                ...userObject, 
                last_name: text
              })
            }}
          />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Location:</ListItem.Title>
            <TextInput
            style={styles.subtitle}
            placeholder="Location"
            value={userObject.location}
            onChangeText={(text) => {
              setUserObject({
                ...userObject, 
                location: text
              })
            }}
          />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Phone Number:</ListItem.Title>
            <TextInput
            style={styles.subtitle}
            placeholder="Phone Number"
            value={userObject.number}
            onChangeText={(text) => {
              setUserObject({
                ...userObject, 
                number: text
              })
            }}
          />
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Email:</ListItem.Title>
          <TextInput
          style={styles.subtitle}
            placeholder="Email"
            value={userObject.email}
            onChangeText={(text) => {
              setUserObject({
                ...userObject, 
                email: text
              })
            }}
          />
          </ListItem.Content>
        </ListItem>
      </View>
      <View>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => {
        updateUser(userObject.email, userObject.first_name, userObject.last_name, userObject.number, userObject.location, userObject.id)
        alert("Your changes are saved")
        }
      }>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
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
    fontSize: 14,
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
  button: {
    width: "80%",
    padding: 15,
    marginBottom: 30,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "orange",
    marginTop: 5
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
