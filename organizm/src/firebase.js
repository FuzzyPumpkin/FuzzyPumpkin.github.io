import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDqvjHtlfWuUfB4NFAufZ3PiWC0saAkBX8",
    authDomain: "organizm-data.firebaseapp.com",
    databaseURL: "https://organizm-data.firebaseio.com",
    projectId: "organizm-data",
    storageBucket: "organizm-data.appspot.com",
    messagingSenderId: "498188097037",
    appId: "1:498188097037:web:2fde96a2a3eaa61c752744"
});

export {firebaseConfig as firebase};