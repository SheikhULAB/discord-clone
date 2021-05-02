import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2RHXoMUABfmne7ZRnw-Dw_s133EoEAIY",
  authDomain: "discord-clone-f0cbe.firebaseapp.com",
  projectId: "discord-clone-f0cbe",
  storageBucket: "discord-clone-f0cbe.appspot.com",
  messagingSenderId: "1033651751991",
  appId: "1:1033651751991:web:783eae79895f61c86683b2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
