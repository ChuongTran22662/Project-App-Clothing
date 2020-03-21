import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAG9OEDgj2AtThvwLlE1m3EiEHjuVrn4-s",
    authDomain: "crwn-db-64c59.firebaseapp.com",
    databaseURL: "https://crwn-db-64c59.firebaseio.com",
    projectId: "crwn-db-64c59",
    storageBucket: "crwn-db-64c59.appspot.com",
    messagingSenderId: "679232845930",
    appId: "1:679232845930:web:2cfcede760023f8db5f213",
    measurementId: "G-3FDJDX2ZWV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;