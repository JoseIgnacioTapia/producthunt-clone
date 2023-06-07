"use client";
import React, { createContext, ReactNode } from "react";
import firebase from "./firebase";

interface FirebaseContextType {
  firebase: typeof firebase;
}

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseContext = createContext<FirebaseContextType | null>(null);

export default function FirebaseProvider({ children }: FirebaseProviderProps) {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
}
