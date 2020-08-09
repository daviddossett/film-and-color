import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'film-and-color.firebaseapp.com',
  databaseURL: 'https://film-and-color.firebaseio.com',
  projectId: 'film-and-color',
  storageBucket: 'film-and-color.appspot.com',
  messagingSenderId: '656048480818',
  appId: '1:656048480818:web:e98fc541c630bd94a7522b',
  measurementId: 'G-YDNX20FLMX',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
