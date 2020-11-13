import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
   apiKey: "AIzaSyDAnG8H-CnhCorWeh0R1WPv1jB2Z3xcSEQ",
   authDomain: "gotogether-78a33.firebaseapp.com",
   databaseURL: "https://gotogether-78a33.firebaseio.com",
   projectId: "gotogether-78a33",
   storageBucket: "gotogether-78a33.appspot.com",
   messagingSenderId: "57700017956",
   appId: "1:57700017956:web:1bc9c8ff66159d25f6b5b1",
   measurementId: "G-7YLN2ZD2YF"
 };

 const fire = firebase.initializeApp(firebaseConfig);
 export const auth = firebase.auth();
 export default fire;
