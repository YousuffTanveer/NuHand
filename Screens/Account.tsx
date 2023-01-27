import { View, Text, StyleSheet } from 'react-native';
import { Avatar, ListItem } from "@rneui/themed";
import { UserOutlined, StarOutlined, UnorderedListOutlined } from "@ant-design/icons";

const Account = ( {user, navigation} ) => {

    return <View style={styles.containerStyle}>
        <View style={styles.profileElements}>
        <Avatar 
        size={100}
        rounded/>
        <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
        <Text style={styles.location}>Location</Text>
        </View>
        <View style={styles.listContainer}>
        <ListItem bottomDivider topDivider onPress={() => {return navigation.navigate('PersonalInfo')}}>
            <UserOutlined/>
            <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>Personal Information</ListItem.Title>
            </ListItem.Content>
            </ListItem>
        <ListItem bottomDivider onPress={() => {return navigation.navigate('SavedListings')}}>
        <StarOutlined />
            <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>Saved Listings</ListItem.Title>
            </ListItem.Content>
            </ListItem>
        <ListItem bottomDivider onPress={() => {return navigation.navigate('MyListings')}}>
        <UnorderedListOutlined />
            <ListItem.Content>
            <ListItem.Title style={styles.menuOptions}>My Listings</ListItem.Title>
            </ListItem.Content>
            </ListItem>
        </View> 
    </View>
}

export default Account;

const styles = StyleSheet.create({
    containerStyle: {
        alignItems: "stretch",
        justifyContent: "flex-start",
        backgroundColor: "white",
        flex: 1
      },
    profileElements: {
        padding: 40,
      alignItems: "center",
    },
    userName: {
        padding: 10,
        fontFamily: "helvetica",
        fontSize: 30,
        color: "black"
    },
    location: {
        padding: 5,
        fontFamily: "helvetica",
        fontSize: 18,
        color: "black"
    },
    menuOptions: {
        fontFamily: "helvetica",
        fontSize: 18,
        color: "black"
    },
    listContainer: {
        flex: 1,
        margin: 20
    }
  });