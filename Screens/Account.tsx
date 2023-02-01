import { View, Text, StyleSheet, Button } from "react-native";
import { Avatar, ListItem } from "@rneui/themed";
import React from "react";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { TouchableOpacity } from "react-native-gesture-handler";

const Account = ({ user, navigation, setUser, userObject }) => {
  console.log(userObject, "<<< USER-OBJ");

  //   const [image, setImage] = useState<File>();
  // const [imageList, setImageList] = useState([]);

  //   useEffect(() => {
  //     const listRef = ref(storage, `image/`);
  //     listAll(listRef)
  //     .then((res) => {
  //       res.items.forEach((itemRef) => {
  //         getDownloadURL(itemRef).then((url) => {
  //           setImageList((prev) => [...prev, url])
  //         })
  //       });
  //     }).catch((error) => {
  //       console.log(error)
  //     });
  //   }, [])

  //   const submitImage = () => {
  //     const storageRef = ref(storage, 'image');
  //     uploadBytes(storageRef, image as Blob).then((snapshot) => {
  //       console.log('Uploaded a blob or file!');
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  //   }
  //   const handleChange = (e) => {
  //    if(e.target.files[0]) {
  //     setImage(e.target.files[0])
  //    }
  //   }

  const handleSignOut = () => {
    setUser([]);
    return navigation.navigate("Home");
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.profileElements}>
        {/* {userObject.profile_image ? (
          <View>
          <Avatar size={50} rounded source={userObject.profile_image}></Avatar>
          <input type="file" onChange={handleChange}/>
      <Button title="Upload Avatar" onPress={submitImage}/>
      {imageList.map((url) => {
        return <img width="100px" height="100px" src={url}/>;
      })}
          <Text>change image</Text>
          </View>
        ) : (
          <View>
            <Avatar size={50} rounded></Avatar>
            <Button title={"add profile image"}></Button>
          </View>
        )} */}
        <Text style={styles.userName}>
          {userObject.first_name} {userObject.last_name}
        </Text>
        <Text style={styles.location}>{userObject.location}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.list}>
          <ListItem
            bottomDivider
            topDivider
            onPress={() => {
              return navigation.navigate("PersonalInfo");
            }}
            style={styles.listItem}
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
            style={styles.listItem}
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
            style={styles.listItem}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.menuOptions}>
                My Listings
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={styles.signOutContainer}>
          <TouchableOpacity
            style={styles.buttonOutline}
            onPress={handleSignOut}
          >
            <Text style={styles.buttonOutlineText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  list: {
    flex: 2,
  },
  listItem: {
    width: "100%",
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
  content: {
    alignItems: "stretch",
    alignSelf: "center",
    width: "72%",
    flex: 1,
    paddingTop: 40,
  },
  signOutContainer: {
    width: "100%",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    paddingBottom: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    alignSelf: "stretch",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
});
