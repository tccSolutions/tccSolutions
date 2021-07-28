import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAOazQajxTFNleCs__H2B4yVeD0WSRHXAA",
    authDomain: "tccs-tech.firebaseapp.com",
    databaseURL: "https://tccs-tech-default-rtdb.firebaseio.com",
    projectId: "tccs-tech",
    storageBucket: "tccs-tech.appspot.com",
    messagingSenderId: "799652283511",
    appId: "1:799652283511:web:7e861d3eb98da5f90df272",
    measurementId: "G-PY5S2J5YEG"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;