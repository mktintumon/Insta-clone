// npm i firebase
// src -> create file.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import secret from './firesecrets'

let app = initializeApp(secret)

export let auth = getAuth(app)
export const db = getFirestore(app);