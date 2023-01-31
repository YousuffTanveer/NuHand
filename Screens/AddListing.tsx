import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { addNewListing } from "../firebaseConfig";

interface Props {
  currencies: string[];
}

const AddListing: React.FC<Props> = ({
  navigation,
  currencies,
  exchangeRates,
  user,
  setMyListings,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [equivalentGbp, setEquivalentGbp] = useState("");

  useEffect(() => {
    if (selectedCurrency && exchangeAmount) {
      setEquivalentGbp(
        (exchangeAmount / exchangeRates[selectedCurrency]).toFixed(2)
      );
    }
  }, [selectedCurrency, exchangeAmount]);

  const handleAddListing = () => {
    addNewListing(equivalentGbp, exchangeAmount, selectedCurrency, user.email);
    setMyListings((currListings) => {
      return [
        ...currListings,
        {
          amount_from: equivalentGbp,
          amount_to: exchangeAmount,
          from: "GBP",
          to: selectedCurrency,
          created_by: user.email,
        },
      ];
    });
    setSelectedCurrency("");
    setExchangeAmount("");
    setEquivalentGbp("");
    return navigation.navigate("MyListings");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Which currency would you like to add?</Text>
      <SelectList
        setSelected={(val) => setSelectedCurrency(val)}
        data={currencies}
        save="value"
      />
      {selectedCurrency && (
        <>
          <Text style={styles.label}>
            How much {selectedCurrency} would you like to exchange?
          </Text>
          <TextInput
            style={styles.input}
            value={exchangeAmount}
            onChangeText={setExchangeAmount}
            keyboardType="numeric"
          />
          {exchangeAmount && (
            <>
              <Text style={styles.label}>
                {exchangeAmount} {selectedCurrency} is equivalent to{" "}
                {equivalentGbp} GBP
              </Text>
            </>
          )}
        </>
      )}
      {exchangeAmount && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleAddListing} style={styles.button}>
            <Text style={styles.buttonText}>Add Listing</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
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
});

export default AddListing;
