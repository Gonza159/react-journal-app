import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  var firebaseConfig = {
    apiKey: "AIzaSyDItwxa2dEaV6HT97WeIkwbfenNUEyVee8",
    authDomain: "react-app-cursos-798e0.firebaseapp.com",
    databaseURL: "https://react-app-cursos-798e0.firebaseio.com",
    projectId: "react-app-cursos-798e0",
    storageBucket: "react-app-cursos-798e0.appspot.com",
    messagingSenderId: "277277380899",
    appId: "1:277277380899:web:fc339b76108a7c6bedfc96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}