import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeNkdnIYz4sxDxtBQL0wVdFx1lP_3wsPQ",
  authDomain: "workerportal-84171.firebaseapp.com",
  projectId: "workerportal-84171",
  storageBucket: "workerportal-84171.firebasestorage.app",
  messagingSenderId: "357273763358",
  appId: "1:357273763358:web:fc4076e4f369ce64efb80f",
  measurementId: "G-J919MBR7MK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };