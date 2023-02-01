import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView, Alert, Image} from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import React from 'react'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { storage } from '../firebaseConfig';
import * as ImagePicker from "expo-image-picker"
import { firebaseConfig } from "../firebaseConfig";

const Account = ( {user, navigation, setUser, userObject, setUserObject, imageUrl, setImageUrl} ) => {
const [imageWasChanged, setImageWasChanged] = useState(false)
 

  const pickImageAsync = async () => {
    setImageWasChanged(false)
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      // quality: 1,
    });
    
    const storageRef = ref(storage, `${userObject.id}`);
    if (!result.canceled) {
      const img = await fetch(result.uri)
      const bytes = await img.blob()

    uploadBytes(storageRef, bytes).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      setImageWasChanged(true)
    }).catch((err) => {
      console.log(err)
    })
    } else {
      alert('You did not select any image.');
    }
  };

  useEffect(() => {
    const func = async () => {
      const imageRef = ref(storage, `/${userObject.id}`)
      await getDownloadURL(imageRef).then((x) => {
        setImageUrl(x)
      //   setUserObject(prev => ({
      //     ...prev,
      //     profile_image: imageUrl
      //  }));
      })
     }
     func()
  }, [imageUrl, imageWasChanged])

  console.log(imageUrl)
  

 

  const handleSignOut = () => {
    setUser([]);
    setImageUrl('');
    return navigation.navigate("Home");
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.profileElements}>
        {imageUrl ? (
          <View>
          <Avatar size={100} rounded source={{uri: imageUrl}}></Avatar>
          <Button title={"change image"} onPress={pickImageAsync}/>
          </View>
        ) : (
          <View>
            <Avatar size={100} title="avatar" rounded source={{
               uri: "https://firebasestorage.googleapis.com/v0/b/nuhand-45f9e.appspot.com/o/blank.png?alt=media&token=b08d5268-1344-48d7-b0ae-41320604b70b"}}></Avatar>
            <Button title={"add profile image"} onPress={pickImageAsync}/>
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
