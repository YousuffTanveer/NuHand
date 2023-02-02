import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSZn2n3Xxfn2EhPJeiYkH8ufSzBRU_l0s",
  authDomain: "nuhand-45f9e.firebaseapp.com",
  databaseURL: "https://nuhand-45f9e.firebaseio.com",
  projectId: "nuhand-45f9e",
  storageBucket: "nuhand-45f9e.appspot.com",
  messagingSenderId: "422727836505",
  appId: "1:422727836505:android:44c9670a23160073146248",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const listingsRef = collection(db, "listings");

const usersRef = collection(db, "users");

const auth = getAuth();

const storage = getStorage(app);

const getListings = getDocs(listingsRef).then((snapshot) => {
  let listings: Array<any> = [];
  snapshot.docs.forEach((doc) => {
    listings.push({ ...doc.data(), id: doc.id });
  });
  return listings;
});

const getUsers = getDocs(usersRef).then((snapshot) => {
  let users: Array<any> = [];
  snapshot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  return users;
});

const addNewUser = (email, first_name, last_name, number, location) => {
  addDoc(usersRef, {
    email: email,
    first_name: first_name,
    last_name: last_name,
    number: number,
    location: location,
  });
};

const addNewListing = (amount_from, amount_to, to, email, coords) => {
  addDoc(listingsRef, {
    amount_from: amount_from,
    amount_to: amount_to,
    from: "GBP",
    to: to,
    created_by: email,
    coords: coords,
  });
};

const deleteListing = (id) => {
  const deleteListingRef = doc(db, "listings", id);
  deleteDoc(deleteListingRef);
};

const updateUser = (email, first_name, last_name, number, location, id) => {
  const updateUserRef = doc(db, "users", id);
  updateDoc(updateUserRef, {
    email: email,
    first_name: first_name,
    last_name: last_name,
    number: number,
    location: location,
  });
};

const listingsQuery = query(
  listingsRef,
  where("to", "==", "EUR"),
  orderBy("amount_from", "desc")
);

export {
  auth,
  addNewUser,
  db,
  listingsRef,
  getListings,
  getUsers,
  usersRef,
  addNewListing,
  deleteListing,
  updateUser,
  listingsQuery,
  storage,
  firebaseConfig,
};
