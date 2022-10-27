
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyADNbB1wvPay16d2n8LHpfzt_DIX_PmHCo",
    authDomain: "phone-book-95890.firebaseapp.com",
    projectId: "phone-book-95890",
    storageBucket: "phone-book-95890.appspot.com",
    messagingSenderId: "455481475570",
    appId: "1:455481475570:web:f769c2bb3ce7d9ff89ab6b"
  };

  try {
      firebase.initializeApp(firebaseConfig);
  } catch (err) {
      if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack);
      }
  }

  const fire = firebase
  export default fire;