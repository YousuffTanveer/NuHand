"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var firebaseConfig_1 = require("../firebaseConfig");
var Listings = function () {
    var _a = (0, react_1.useState)([]), listings = _a[0], setListings = _a[1];
    (0, react_1.useEffect)(function () {
        firebaseConfig_1.getListings.then(function (result) {
            var results = result;
            setListings(results);
        });
    }, []);
    console.log(listings);
    // return (<react_native_1.View>
    //     <react_native_1.Text>listings</react_native_1.Text>
    //     </react_native_1.View>);
};
exports["default"] = Listings;
