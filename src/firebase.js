
import {getFirestore} from "firebase/firestore"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6pYHMAwvBTzI3Goa1Fy-eI-QklSfCtPc",
  authDomain: "shreyas-portfolio-react.firebaseapp.com",
  projectId: "shreyas-portfolio-react",
  storageBucket: "shreyas-portfolio-react.appspot.com",
  messagingSenderId: "195057923871",
  appId: "1:195057923871:web:44a304457d6c557be8e22a"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore()