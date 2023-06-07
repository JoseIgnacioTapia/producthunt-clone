import { initializeApp, FirebaseOptions } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import firebaseConfig from "./config";

class Firebase {
  app: ReturnType<typeof initializeApp>;
  auth: Auth;
  googleAuthProvider: GoogleAuthProvider;

  constructor() {
    this.app = initializeApp(firebaseConfig as FirebaseOptions);
    this.auth = getAuth(this.app);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  // Register a new user
  register(name: string, email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((cred) => {
        const user = cred.user;
        if (user) {
          updateProfile(user, { displayName: name })
            .then(() => {
              console.log("Profile updated");
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error al crear la cuenta:", error);
      });
  }
}

const firebase = new Firebase();
export default firebase;
