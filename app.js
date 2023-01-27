"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var firebaseConfig_1 = require("./firebaseConfig");
var native_stack_1 = require("@react-navigation/native-stack");
function App() {
    var _a = (0, react_1.useState)([]), listings = _a[0], setListings = _a[1];
    firebaseConfig_1.getListings.then(function (result) {
        var results = result;
        console.log(result);
        setListings(results);
    });
    console.log(listings);
    var Stack = (0, native_stack_1.createNativeStackNavigator)();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
exports["default"] = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    items: {
        marginTop: 24,
        padding: 30,
        backgroundColor: "pink",
        fontSize: 24,
        textAlign: "center"
    }
});
