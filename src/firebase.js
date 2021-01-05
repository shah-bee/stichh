import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYiw2O4IsBEj4Mc89WliZTehFYkkrVG6o",
  authDomain: "stich-18b6c.firebaseapp.com",
  databaseURL: "https://stich-18b6c-default-rtdb.firebaseio.com",
  projectId: "stich-18b6c",
  storageBucket: "stich-18b6c.appspot.com",
  messagingSenderId: "87500221491",
  appId: "1:87500221491:web:771cf7d032e263fde10746",
  measurementId: "G-YK9JF4259P"
};

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export const fStore = firebase.firestore();

 window.firebase = firebase;