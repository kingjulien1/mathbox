import firebase from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
const auth = app.auth();

export { database, auth };
