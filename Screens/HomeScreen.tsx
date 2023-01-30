import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const HomeScreen = ({ navigation, selectedCurrency, setSelectedCurrency }) => {
  interface conversionProps {
    amount: number;
    base: string;
    date: string;
    rates: { [key: string]: number };
  }

  const [conversion, setConversion] = useState<conversionProps | null>(null);

  const [conversionValue, setConversionValue] = useState<number | null>(null);

  useEffect(() => {
    if (conversion !== null) {
      const value = conversion.rates[selectedCurrency];
      setConversionValue(value);
    }
  }, [selectedCurrency]);

  useEffect(() => {
    axios
      .get("https://api.frankfurter.app/latest?from=GBP")
      .then((res) => setConversion(res.data));
  }, []);

  // api data:
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
  return (
    <View>
      <Button
        onPress={() => {
          return navigation.navigate("Login");
        }}
        title={"Login"}
      />
      <Text style={styles.header}> nuHand</Text>

      {conversionValue && (
        <Text>
          1 Pound Coin = {conversionValue} {selectedCurrency}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <SelectList
          setSelected={(val) => setSelectedCurrency(val)}
          data={data}
          save="value"
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Find Listings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  header: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0782f9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
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
  inputContainer: {
    width: "40%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
});
function axiosGet(arg0: string) {
  throw new Error("Function not implemented.");
}
