import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAvFP2UF3KZQVRdzh4azWThcljrDXjQOOI",
  authDomain: "time-finder-d2cfe.firebaseapp.com",
  projectId: "time-finder-d2cfe",
  storageBucket: "time-finder-d2cfe.appspot.com",
  messagingSenderId: "117753836373",
  databaseURL: "https://time-finder-d2cfe-default-rtdb.asia-southeast1.firebasedatabase.app",
  appId: "1:117753836373:web:a8aa11391898c7b6a975dc",
  measurementId: "G-EL2E78Z09K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase


