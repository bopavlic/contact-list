// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMSrQC-V2q90hO_wEqFxzOt5FGGmyybJQ',
  authDomain: 'contact-list-be26a.firebaseapp.com',
  databaseURL:
    'https://contact-list-be26a-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'contact-list-be26a',
  storageBucket: 'contact-list-be26a.appspot.com',
  messagingSenderId: '816996017953',
  appId: '1:816996017953:web:24b884338b48df37394060',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
