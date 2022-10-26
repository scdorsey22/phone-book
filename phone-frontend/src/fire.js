
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADNbB1wvPay16d2n8LHpfzt_DIX_PmHCo",
    authDomain: "phone-book-95890.firebaseapp.com",
    projectId: "phone-book-95890",
    storageBucket: "phone-book-95890.appspot.com",
    messagingSenderId: "455481475570",
    appId: "1:455481475570:web:f769c2bb3ce7d9ff89ab6b"
  };

  try {
      initializeApp(firebaseConfig);
  } catch (err) {
      if (!/already exists/.test(err.message)) {
          console.error('Firebase initialization error', err.stack);
      }
  }

  const fire = initializeApp(firebaseConfig);
  export default fire;