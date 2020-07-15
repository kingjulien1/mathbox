import firebase from "firebase";
import { firebaseConfig } from "./firebase.config";

firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
