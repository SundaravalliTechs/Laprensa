import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";


const firebaseConfig = {    
  apiKey: "AIzaSyBGqPxWg5_zc7SgySKMJAq4ct7NAsaPeZQ",
  authDomain: "laprensarestaurant.firebaseapp.com",
  projectId: "laprensarestaurant",
  storageBucket: "laprensarestaurant.appspot.com",
  messagingSenderId: "921384757340",
  appId: "1:921384757340:web:cf79488fecd7cbb5ee1e99"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db,collection, getDocs, where, query }


