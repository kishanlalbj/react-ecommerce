import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics"

const config = {
    apiKey: "AIzaSyBtxbss01PNuStpfGLLZy3E098tceafE2Q",
    authDomain: "react-ecommerce-c37dc.firebaseapp.com",
    databaseURL: "https://react-ecommerce-c37dc.firebaseio.com",
    projectId: "react-ecommerce-c37dc",
    storageBucket: "react-ecommerce-c37dc.appspot.com",
    messagingSenderId: "661052430634",
    appId: "1:661052430634:web:940567da17e2e40d9ee653",
    measurementId: "G-RJVGMCRFHD"
};

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdOn = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdOn,
                ...additionalData
            })
        } catch (err) {
            console.log("Error Creating user");
        }
    }

    return userRef;
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const SigninWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

