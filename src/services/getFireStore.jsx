import firebase from 'firebase';
import 'firebase/firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWBfUU4vZF7nxBN-vjgtFpz0APyav7Q-0",
  authDomain: "lafarolareactjs.firebaseapp.com",
  projectId: "lafarolareactjs",
  storageBucket: "lafarolareactjs.appspot.com",
  messagingSenderId: "811157866407",
  appId: "1:811157866407:web:d4a8bfbb1a7a72b15c5882"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export function getFireStore() {
    return firebase.firestore(app)
}