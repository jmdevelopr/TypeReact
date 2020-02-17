import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCIxX0lg-9SEaXWoFiTtIHk705a0G6dxg",
    authDomain: "typereact.firebaseapp.com",
    databaseURL: "https://typereact.firebaseio.com",
    projectId: "typereact",
    storageBucket: "typereact.appspot.com",
    messagingSenderId: "24113643493",
    appId: "1:24113643493:web:c5651f202ea8010a90b90c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;