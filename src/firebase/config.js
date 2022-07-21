import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4JDwxGnjdIOHWXZGV8itxDyp0XssocDI",
  authDomain: "mymoney2-ea29a.firebaseapp.com",
  projectId: "mymoney2-ea29a",
  storageBucket: "mymoney2-ea29a.appspot.com",
  messagingSenderId: "219465130077",
  appId: "1:219465130077:web:f02174a5f76a5866fb6db4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth , timestamp}