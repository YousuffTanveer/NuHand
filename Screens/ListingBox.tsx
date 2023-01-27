import { View, Text, StyleSheet } from "react-native";
import { ListItem, Avatar, Button } from "@rneui/themed";
import { MessageOutlined, StarOutlined } from "@ant-design/icons";

const ListingBox = ({ listing }) => {
  return (
    <ListItem bottomDivider style={styles.containerStyle}>
      <Avatar
        size={60}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
      />
      <ListItem.Content >
        <ListItem.Title style={{padding: 2}}>Name</ListItem.Title>
        <ListItem.Subtitle style={{padding: 2}}>Location</ListItem.Subtitle>
        <Text style={{padding: 5}}>
          {listing.amount_from} {listing.from} to {listing.amount_to}{" "}
          {listing.to}
        </Text>
      </ListItem.Content>
      <View>
        <Button radius={"sm"} type="solid" style={styles.button}>
          <StarOutlined style={{ fontSize: "16px", color: "white" }} />
        </Button>
        <Button radius={"sm"} type="solid" style={styles.button}>
          <MessageOutlined style={{ fontSize: "16px", color: "white" }} />
        </Button>
      </View>
    </ListItem>
  );
};

export default ListingBox;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: "stretch",
    padding: 2,
    justifyContent: "flex-start",
  },
  button: {
    padding: 2
  }
});
