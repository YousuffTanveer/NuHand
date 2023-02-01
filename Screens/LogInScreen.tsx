import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getUsers } from "../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import Header from "../components/Header";

const LogInScreen = ({
  navigation,
  user,
  setUser,
  setUserObject,
  setImageUrl,
  setUserCoords,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLogIn = () => {
    setErr(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        getUsers.then((users) => {
          users.filter((thisUser) => {
            if (thisUser.email === email) {
              const imageRef = ref(storage, `/${thisUser.id}`);
              getDownloadURL(imageRef).then((x) => {
                setImageUrl(x);
              });
            }
          });
          navigator.geolocation.getCurrentPosition((position) => {
          setUserCoords([position.coords.latitude, position.coords.longitude]);
        });
        });
        return navigation.navigate("Home");
      })
      .catch((error) => {
        setErr(true);

        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Header />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          {err ? (
            <Text style={styles.invalidDetails}>Invalid details</Text>
          ) : null}
          <TouchableOpacity onPress={handleLogIn} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <TouchableOpacity
            onPress={() => {
              return navigation.navigate("SignUp");
            }}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    alignSelf: "center",
    width: "72%",
    flex: 1,
    paddingTop: 40,
  },
  inputContainer: {
    width: "100%",
    flex: 3,
    borderColor: "orange",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 5,
    color: "black",
  },
  registerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "orange",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  invalidDetails: {
    fontSize: 14,
    padding: 5,
    alignSelf: "center",
    marginTop: 5,
    color: "red",
  },
});
