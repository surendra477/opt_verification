import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD0mwJj6yKcOgsyJN3jIZCEVsThl6or3Yw",
    authDomain: "surendraphonenum.firebaseapp.com",
    databaseURL: "https://surendraphonenum.firebaseio.com",
    projectId: "surendraphonenum",
    storageBucket: "surendraphonenum.appspot.com",
    messagingSenderId: "814662765416",
    appId: "1:814662765416:web:2de5d2c139acc5b13124dd",
    measurementId: "G-928Q4738DV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

//   export const firebaseApp = firebase.initializeApp(firebaseConfig);
//   export const auth = firebase.auth();
  export default firebase;