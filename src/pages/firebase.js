import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAguepvGJKDtjE6EW_4o88FYAZiSvk6VUQ",
    authDomain: "react-firebase-c121d.firebaseapp.com",
    databaseURL: "https://react-firebase-c121d.firebaseio.com",
    projectId: "react-firebase-c121d",
    storageBucket: "react-firebase-c121d.appspot.com",
    messagingSenderId: "746055787887",
    appId: "1:746055787887:web:b3026c69a5714cce"
  };
  // Initialize Firebase
  export default !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) : firebase.app();