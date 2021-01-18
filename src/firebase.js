import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZNOuIdkB31oYdLC6p4xX0f6ICOO6RJw",
  authDomain: "twitter-clone-28fab.firebaseapp.com",
  databaseURL: "https://twitter-clone-28fab.firebaseio.com",
  projectId: "twitter-clone-28fab",
  storageBucket: "twitter-clone-28fab.appspot.com",
  messagingSenderId: "391225104636",
  appId: "1:391225104636:web:221bb924040e7c13401f79",
  measurementId: "G-CTJJFS24QJ"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig);;

const db = firebaseApp.firestore();

export default db;