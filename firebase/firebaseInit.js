import { CONFIGURATION } from "../constants/firebaseConstants";

import firebase from 'firebase/app'
// import "firebase/firebase";
import "firebase/auth";
firebase.initializeApp(CONFIGURATION);

// export const firestore = firebase.firestore()