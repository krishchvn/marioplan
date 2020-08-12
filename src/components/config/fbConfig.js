import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXA69lRLAk5WfXGpYxDO4m4aRUGqHlCqI",
    authDomain: "marioplan-netninja-dc8ce.firebaseapp.com",
    databaseURL: "https://marioplan-netninja-dc8ce.firebaseio.com",
    projectId: "marioplan-netninja-dc8ce",
    storageBucket: "marioplan-netninja-dc8ce.appspot.com",
    messagingSenderId: "294069454321",
    appId: "1:294069454321:web:83831e2084696c53517050",
    measurementId: "G-5MJYGJ2P64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
 // firebase.firestore.settings({timestampsInSnapshots : true});
  //const auth = firebase.auth();
  const storage = firebase.storage();
  export {
  storage, firebase as default
  }
  
//  export default {firebase };