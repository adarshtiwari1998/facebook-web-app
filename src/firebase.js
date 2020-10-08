import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAoXyb0uxL-Bz9Bhmxnn5-lOshflFdLVGU",
    authDomain: "facebook-web-app-fe4ec.firebaseapp.com",
    databaseURL: "https://facebook-web-app-fe4ec.firebaseio.com",
    projectId: "facebook-web-app-fe4ec",
    storageBucket: "facebook-web-app-fe4ec.appspot.com",
    messagingSenderId: "381030962269",
    appId: "1:381030962269:web:da3f06641132da632729b4",
    measurementId: "G-8W1PFNQKF7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;