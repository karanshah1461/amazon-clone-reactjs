import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnMBvqS_AhFUA3g4bsgs2R4gckEySBmU",
  authDomain: "clone-6c254.firebaseapp.com",
  databaseURL: "https://clone-6c254.firebaseio.com",
  projectId: "clone-6c254",
  storageBucket: "clone-6c254.appspot.com",
  messagingSenderId: "761343747641",
  appId: "1:761343747641:web:b22d96e866186e99e50fe8",
  measurementId: "G-XSEZZ4T4E3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };