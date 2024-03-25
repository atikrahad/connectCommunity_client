
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD99QwcD0_JQG02dCuubJi0vlVu_JThkk0",
  authDomain: "bond-box.firebaseapp.com",
  projectId: "bond-box",
  storageBucket: "bond-box.appspot.com",
  messagingSenderId: "763968946331",
  appId: "1:763968946331:web:9ee26f621ad8302c5f863e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth