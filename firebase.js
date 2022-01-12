import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyDJ8-U-nE1GEFu_RsUxi1GXDF1d-jUEpyQ",
    authDomain: "executive-study-abroad.firebaseapp.com",
    projectId: "executive-study-abroad",
    storageBucket: "executive-study-abroad.appspot.com",
    messagingSenderId: "643845390969",
    appId: "1:643845390969:web:14346009047e73297b8aa8"
});

var dbs = firebaseApp.firestore();

export {
    dbs
}