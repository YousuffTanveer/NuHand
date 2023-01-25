"use strict";
exports.__esModule = true;
var React = require("react");
var react_1 = require("react");
var react_native_1 = require("react-native");
var firebaseConfig_1 = require("./firebaseConfig");
var native_1 = require("@react-navigation/native");
var native_stack_1 = require("@react-navigation/native-stack");
var LogInScreen_1 = require("./Components/LogInScreen");
var HomeScreen_1 = require("./Components/HomeScreen");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
function App() {
    var _a = (0, react_1.useState)([]), users = _a[0], setUsers = _a[1];
    firebaseConfig_1["default"].then(function (result) {
        var results = result;
        setUsers(results);
    });
    return (
    // <View>
    //   <Text>Hello
    //   </Text>
    //   <FlatList keyExtractor={(item) => item.id} data={users} renderItem={({item}) => (
    //     <Text style={styles.items}>{item.username}</Text>
    //   )}/>
    //   <Text>
    //   </Text>
    //   <Text>Test</Text>
    //   <StatusBar style="auto" />
    // </View>
    <native_1.NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogInScreen_1["default"]}/>
      <Stack.Screen name="Home" component={HomeScreen_1["default"]}/>
    </Stack.Navigator>
  </native_1.NavigationContainer>);
}
exports["default"] = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    items: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        textAlign: 'center'
    }
});
