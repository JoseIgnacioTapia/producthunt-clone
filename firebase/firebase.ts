import { initializeApp, FirebaseOptions } from "firebase/app";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    initializeApp(firebaseConfig as FirebaseOptions);
  }
}

const firebase = new Firebase();
export default firebase;
