import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAxsv65EtY3p1O51KSoVqCxFSChFdv0TwQ",
    authDomain: "goal-coach-bc8d8.firebaseapp.com",
    databaseURL: "https://goal-coach-bc8d8.firebaseio.com",
    projectId: "goal-coach-bc8d8",
    storageBucket: "",
    messagingSenderId: "846586666020"
  };

 export const firebaseApp = firebase.initializeApp(config);