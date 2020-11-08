//configuracion farebase
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDNaY1yavwqHk3i-UYfykkY50BXu2IPpaw",
    authDomain: "vue-firebase-a53fd.firebaseapp.com",
    databaseURL: "https://vue-firebase-a53fd.firebaseio.com",
    projectId: "vue-firebase-a53fd",
    storageBucket: "vue-firebase-a53fd.appspot.com",
    messagingSenderId: "718394465691",
    appId: "1:718394465691:web:c66d619bd442f53e1f153e"
  };
//initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db=firebase.firestore();