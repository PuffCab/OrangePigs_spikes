import { ReactNode, createContext, useState } from "react";
import { User } from "../types/customTypes";

interface AuthContextType {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthInitContext = {
  user: null,
  setUser: () => console.log("context not initalised"),
  logout: () => console.log("context not initalised"),
};

//1- create context

export const AuthContext = createContext<AuthContextType>(AuthInitContext);

//2-Define the provider component

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // Declare here the states and functions you want to export/make available
  const [user, setUser] = useState<User | null>(null);

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
