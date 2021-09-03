import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxXiXPcN5cyjcZsRIjfvsQWu8luD4vy6w",
  authDomain: "auth-dev-2d638.firebaseapp.com",
  projectId: "auth-dev-2d638",
  storageBucket: "auth-dev-2d638.appspot.com",
  messagingSenderId: "742891855271",
  appId: "1:742891855271:web:d50ee067628cb8603c6a82",
});

export const db = firebase.firestore();

export const auth = app.auth();
export default app;
