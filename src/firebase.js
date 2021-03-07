import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAJ76j24xfmiGJ9ponC8NMc8-9MroIK-SE",
    authDomain: "budget-gamer.firebaseapp.com",
    databaseURL: "https://budget-gamer.firebaseio.com",
    projectId: "budget-gamer",
    storageBucket: "budget-gamer.appspot.com",
    messagingSenderId: "787514553532",
    appId: "1:787514553532:web:3666058efc5b67a8084cb9",
    measurementId: "G-T6YP1Y5XJB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();