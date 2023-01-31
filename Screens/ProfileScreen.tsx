import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../firebaseConfig';



const ProfileScreen = ({navigation}) => {
  const [image, setImage] = useState("");
  const [imageList, setImageList] = useState("");

  useEffect(() => {
    const listRef = ref(storage, `image/`);
    listAll(listRef)
    .then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImageList((prev) => [...prev, url])
        })
      });
    }).catch((error) => {
      console.log(error)
    });
  }, [])

  const submitImage = () => {
    const storageRef = ref(storage, 'image');
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }).catch((err) => {
      console.log(err)
    })
  }
  const handleChange = (e) => {
   if(e.target.files[0]) {
    setImage(e.target.files[0])
   }
  }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <input type="file" onChange={handleChange}/>
      <Button title="Upload Avatar" onPress={submitImage}/>
      {imageList.map((url) => {
        return <img width="100px" height="100px" src={url}/>;
      })}
      <View>
        <Footer navigation={navigation} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})