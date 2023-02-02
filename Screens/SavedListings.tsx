import { View, Text } from "react-native";
import Footer from "../components/Footer";

const SavedListings = ({ navigation, user }) => {
  return (
    <View>
      <Text> SavedListings </Text>
      <View>
        <Footer user={user} navigation={navigation} />
      </View>
    </View>
  );
};

export default SavedListings;
