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

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('error create user', error.message); 
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;