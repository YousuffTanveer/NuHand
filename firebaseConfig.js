"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var auth_1 = require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyCSZn2n3Xxfn2EhPJeiYkH8ufSzBRU_l0s",
    authDomain: "nuhand-45f9e.firebaseapp.com",
    databaseURL: "https://nuhand-45f9e.firebaseio.com",
    projectId: "nuhand-45f9e",
    storageBucket: "nuhand-45f9e.appspot.com",
    messagingSenderId: "422727836505",
    appId: "1:422727836505:android:44c9670a23160073146248"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, firestore_1.getFirestore)();
var colRef = (0, firestore_1.collection)(db, "users");
var auth = (0, auth_1.getAuth)();
var getUsers = (0, firestore_1.getDocs)(colRef).then(function (snapshot) {
    var users = [];
    snapshot.docs.forEach(function (doc) {
        users.push(__assign(__assign({}, doc.data()), { id: doc.id }));
    });
    return users;
});
exports["default"] = { getUsers: getUsers, auth: auth };
