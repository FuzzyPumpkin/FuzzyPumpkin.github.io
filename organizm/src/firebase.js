import firebase from "firebase/app";
import 'firebase/database';


const firebaseConfig = {
    //obfuscated for the moment
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);