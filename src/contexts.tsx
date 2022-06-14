import { createContext } from "react";
import { User } from "./App.interfaces";

// --------------------------------------------------------
// Context to hold Authenticated user.
interface IAuthStateProps {
  user: User | null;
  loading: boolean;
  authorized: boolean;
  login: (email: string, password: string) => any;
  logout: () => any;
}

export const AuthCtx = createContext({} as IAuthStateProps);
