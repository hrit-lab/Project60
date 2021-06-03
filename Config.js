import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBTPt3NgKc9OzQAOik6D36fcI7hRqiCbRs",
    authDomain: "attendace-app-f3fd4.firebaseapp.com",
    databaseURL: "https://attendace-app-f3fd4-default-rtdb.firebaseio.com",
    projectId: "attendace-app-f3fd4",
    storageBucket: "attendace-app-f3fd4.appspot.com",
    messagingSenderId: "435724043283",
    appId: "1:435724043283:web:96b6b53f6b14ae20a5ebe6"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export default firebase.database();