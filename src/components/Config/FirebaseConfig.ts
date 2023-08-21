import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9uI3g_asHwryVHv5UEXLkHW25e_fF9yw",
  authDomain: "deep-dive-pet-store.firebaseapp.com",
  projectId: "deep-dive-pet-store",
  storageBucket: "deep-dive-pet-store.appspot.com",
  messagingSenderId: "421282019554",
  appId: "1:421282019554:web:fd8ff6c71856c9b99286bb",
  measurementId: "G-J1NTJF7BSS",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }