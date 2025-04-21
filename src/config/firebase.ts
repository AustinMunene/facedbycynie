import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDFXBbPwqZy_P4F8K1Ht_JNyWYQPHvLyHk",
  authDomain: "faced-by-cyniee.firebaseapp.com",
  projectId: "faced-by-cyniee",
  storageBucket: "faced-by-cyniee.appspot.com",
  messagingSenderId: "946573370432",
  appId: "1:946573370432:web:8f9b0e9f9b0e9f9b0e9f9b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);