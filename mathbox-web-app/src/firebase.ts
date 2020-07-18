import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "./firebase.config";

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();
const auth = app.auth();

export { database, auth };
