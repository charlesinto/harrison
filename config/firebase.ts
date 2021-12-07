import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCm8bNuwEoGGWBHFNhDU-1zNVikr9VBx9I",
  authDomain: "harrisonaesthetic-6f142.firebaseapp.com",
  projectId: "harrisonaesthetic-6f142",
  storageBucket: "harrisonaesthetic-6f142.appspot.com",
  messagingSenderId: "252741035843",
  appId: "1:252741035843:web:537ce8337b95fd176631f6",
  measurementId: "G-N01J90M7EF",
};
let app;

if (firebase.getApps().length === 0)
  app = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);

export default app;
