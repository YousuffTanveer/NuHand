"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_1 = require("react");
var firebaseConfig_1 = require("../firebaseConfig");
var auth_1 = require("firebase/auth");
var LogInScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), password = _c[0], setPassword = _c[1];
    var _d = (0, react_1.useState)(""), user = _d[0], setUser = _d[1];
    (0, react_1.useEffect)(function () {
        var unsubscribe = (0, auth_1.onAuthStateChanged)(firebaseConfig_1.auth, function (user) {
            if (user) {
                return navigation.navigate("Home");
            }
            else {
            }
        });
        return unsubscribe;
    }, []);
    var handleSignUp = function () {
        (0, auth_1.createUserWithEmailAndPassword)(firebaseConfig_1.auth, email, password)
            .then(function (userCredential) {
            var user = userCredential.user;
        })["catch"](function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
    var handleLogIn = function () {
        (0, auth_1.signInWithEmailAndPassword)(firebaseConfig_1.auth, email, password)
            .then(function (userCredential) {
            console.log(userCredential);
            setUser(userCredential.user);
        })["catch"](function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
    };
    // return (
    //   <KeyboardAvoidingView style={styles.container} behavior="padding">
    //     <View style={styles.inputContainer}>
    //       <TextInput
    //         placeholder="Email"
    //         value={email}
    //         onChangeText={(text) => setEmail(text)}
    //         style={styles.input}
    //       />
    //       <TextInput
    //         placeholder="Password"
    //         value={password}
    //         onChangeText={(text) => setPassword(text)}
    //         style={styles.input}
    //         secureTextEntry
    //       />
    //     </View>
    //     <View style={styles.buttonContainer}>
    //       <TouchableOpacity onPress={handleLogIn} style={styles.button}>
    //         <Text style={styles.buttonText}>Login</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         onPress={handleSignUp}
    //         style={[styles.button, styles.buttonOutline]}
    //       >
    //         <Text style={styles.buttonOutlineText}>Register</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </KeyboardAvoidingView>
    // );
};
exports["default"] = LogInScreen;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        backgroundColor: "#0782f9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782f9",
        borderWidth: 2
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#0782f9",
        fontWeight: "700",
        fontSize: 16
    }
});
