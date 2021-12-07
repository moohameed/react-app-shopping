import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"





const firebaseConfig = {
    apiKey: "AIzaSyAmRD4AKADP6z_8Sp3Uxj3b8NNpHqfY6f0",
    authDomain: "linkedin-clone-4819d.firebaseapp.com",
    projectId: "linkedin-clone-4819d",
    storageBucket: "linkedin-clone-4819d.appspot.com",
    messagingSenderId: "974380684170",
    appId: "1:974380684170:web:f648d9de90dd2ec2d22e73"
  };



  firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();


export { auth};
export default db;