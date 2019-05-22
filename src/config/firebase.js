import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDP7vXI9wqNpeFiU9bNxZJrGf-UqRORJfU",
  authDomain: "imagegallery-8e471.firebaseapp.com",
  databaseURL: "https://imagegallery-8e471.firebaseio.com",
  projectId: "imagegallery-8e471",
  storageBucket: "imagegallery-8e471.appspot.com",
  messagingSenderId: "789819404663",
  appId: "1:789819404663:web:19f3f28b6fa3877a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
