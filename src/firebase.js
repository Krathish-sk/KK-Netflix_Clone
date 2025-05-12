import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzdMUKbWYucgnjlHmzwuOYQbKOUBqDI7w",
  authDomain: "kk-netflix-clone.firebaseapp.com",
  projectId: "kk-netflix-clone",
  storageBucket: "kk-netflix-clone.firebasestorage.app",
  messagingSenderId: "115250581740",
  appId: "1:115250581740:web:006471ee085459d2edd5c9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, signUp, signIn, logOut };
