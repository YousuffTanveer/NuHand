import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const colRef = collection(db, "listings");

const auth = getAuth();

const getListings = getDocs(colRef).then((snapshot) => {
  let listings: Array<any> = [];
  snapshot.docs.forEach((doc) => {
    listings.push({ ...doc.data(), id: doc.id });
  });
  return listings;
});

export { getListings, auth, colRef };
