import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAccIOeMJ5pKK6Pq1tAyjMgIUUHWzVHGfs",
    authDomain: "ilogs-27a3d.firebaseapp.com",
    projectId: "ilogs-27a3d",
    storageBucket: "ilogs-27a3d.appspot.com",
    messagingSenderId: "1084719727725",
    appId: "1:1084719727725:web:17b206c9045937f7376b64",
    measurementId: "G-XD5CYG12S0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;  