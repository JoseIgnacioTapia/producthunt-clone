import React, { createContext } from "react";
import firebase from "./firebase";

export const FirebaseContext = createContext(null);

export default function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
}
