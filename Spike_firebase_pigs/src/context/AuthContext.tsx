import { ReactNode, createContext, useEffect, useState } from "react";

import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

type UserCredentialsType = (a: string, b: string) => void;

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
  register: UserCredentialsType;
  login: UserCredentialsType;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthInitContext = {
  user: null,
  setUser: () => console.log("context not initialised"),
  logout: () => console.log("context not initialised"),
  register: () => console.log("context not initialised"),
  login: () => console.log("context not initialised"),
};

//1- create context

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

//2-Define the provider component

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // Declare here the states and functions you want to export/make available
  const [user, setUser] = useState<User | null>(null);

  const register = async (email: string, password: string) => {
    // console.log("email, password :>> ", email, password);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const registeredUser = userCredential.user;
      registeredUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("register went wrong :>> ", error);
    }
  };

  const login: UserCredentialsType = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        console.log("loggedUser :>> ", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error :>> ", error);
        console.log("errorCode :>> ", errorCode);
      });
  };

  const checkIfUserIsActive = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is still logged in");
        console.log("uid :>> ", uid);
        console.log("user :>> ", user);
        setUser(user);
      } else {
        console.log("user is logged out");
        setUser(null);
      }
    });
  };
  useEffect(() => {
    checkIfUserIsActive();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("error siging out :>> ", error);
      });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};
