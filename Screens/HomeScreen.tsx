import axios from "axios";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Avatar } from "@rneui/themed";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getUsers } from "../firebaseConfig";

const HomeScreen = ({
  navigation,
  selectedCurrency,
  setSelectedCurrency,
  firstName,
  user,
  setExchangeRates,
  setUserObject,
  conversion,
  setConversion,
  exchangeRate,
  setExchangeRate,
  imageUrl,
  userCoords,
}) => {
  useEffect(() => {
    if (conversion !== null) {
      const value = conversion.rates[selectedCurrency];
      setExchangeRate(value);
    }
  }, [selectedCurrency]);

  useEffect(() => {
    getUsers.then((users) => {
      users.filter((thisUser) => {
        if (thisUser.email === user.email) {
          console.log(user, "user<<<<<cHomeScreen");
          setUserObject(thisUser);
        }
      });
    });
  }, [user]);

  useEffect(() => {
    axios
      .get("https://api.frankfurter.app/latest?from=GBP")
      .then((res) => {
        setConversion(res.data);
        setExchangeRates(res.data.rates);
      })
      .catch((err) => {
        console.log(err, "<<< error");
      });
  }, []);

  const data = [
    { key: "1", value: "AUD" },
    { key: "2", value: "BGN" },
    { key: "3", value: "BRL" },
    { key: "4", value: "CAD" },
    { key: "5", value: "CHF" },
    { key: "6", value: "CNY" },
    { key: "7", value: "CZK" },
    { key: "8", value: "DKK" },
    { key: "9", value: "EUR" },
    { key: "10", value: "HKD" },
    { key: "11", value: "HUF" },
    { key: "12", value: "IDR" },
    { key: "13", value: "ILS" },
    { key: "14", value: "INR" },
    { key: "15", value: "ISK" },
    { key: "16", value: "JPY" },
    { key: "17", value: "KRW" },
    { key: "18", value: "MXN" },
    { key: "19", value: "MYR" },
    { key: "20", value: "NOK" },
    { key: "21", value: "NZD" },
    { key: "22", value: "PHP" },
    { key: "23", value: "PLN" },
    { key: "24", value: "RON" },
    { key: "25", value: "SEK" },
    { key: "26", value: "SGD" },
    { key: "27", value: "THB" },
    { key: "28", value: "TRY" },
    { key: "29", value: "USD" },
    { key: "30", value: "ZAR" },
  ];

  const handleSubmit = () => {
    if (selectedCurrency) {
      return navigation.navigate("Listings");
    }
  };

  const handleSubmitLogin = () => {
    if (user.length <= 0) {
      return navigation.navigate("Login");
    } else {
      return navigation.navigate("Account");
    }
  };

  if ("geolocation" in navigator) {
    console.log("geolocation is available");
  } else {
    console.log("geolocation IS NOT available");
  }
  console.log(userCoords);

  return (
    <View style={styles.container}>
      <View>
        <Avatar
          size={60}
          onPress={handleSubmitLogin}
          rounded
          source={
            imageUrl
              ? { uri: imageUrl }
              : {
                  uri: "https://firebasestorage.googleapis.com/v0/b/nuhand-45f9e.appspot.com/o/blank.png?alt=media&token=b08d5268-1344-48d7-b0ae-41320604b70b",
                }
          }
          title={user.length <= 0 ? "Login" : "Profile"}
        />
        {user.length <= 0 ? (
          <Text style={styles.loginText}>Login</Text>
        ) : (
          <Text style={styles.loginText}>Profile</Text>
        )}
      </View>
      <Header />
      <View style={styles.content}>
        {exchangeRate && (
          <Text style={styles.exchangeText}>
            1 Pound Coin = {exchangeRate} {selectedCurrency}
          </Text>
        )}
        <SelectList
          setSelected={(val) => setSelectedCurrency(val)}
          data={data}
          save="value"
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Find Listings</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Footer navigation={navigation} user={user} />
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "orange",
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#0782f9",
    width: "10%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  content: {
    alignItems: "stretch",
    alignSelf: "center",
    width: "72%",
    flex: 1,
  },
  exchangeText: {
    padding: 5,
    fontSize: 14,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  loginText: {
    paddingLeft: 12,
    fontWeight: "300",
  },
});
