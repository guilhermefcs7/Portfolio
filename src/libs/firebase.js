import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPuRiiBvahVXteeLbuYmrfWf7UfpUReUU",
  authDomain: "portfolio-5430b.firebaseapp.com",
  projectId: "portfolio-5430b",
  storageBucket: "portfolio-5430b.appspot.com",
  messagingSenderId: 829946024154,
  appId: "1:829946024154:web:1c982443769d8e4d7315e3",
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);
