import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    //here would be my firebase informations that I want to keep private for safety reasons
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
