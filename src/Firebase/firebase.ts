
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASEKEYS_apiKey,
  authDomain: process.env.FIREBASEKEYS_authDomain,
  projectId: process.env.FIREBASEKEYS_projectId,
  storageBucket: process.env.FIREBASEKEYS_storageBucket,
  messagingSenderId: process.env.FIREBASEKEYS_messagingSenderId,
  appId: process.env.FIREBASEKEYS_appId
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)