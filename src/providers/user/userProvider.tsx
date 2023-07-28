"use-client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { api } from "@/services/api";
import { UserData } from "./interfaces";

interface UserProps {
  children: ReactNode;
}
interface userValues {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  user: UserData;
  setUser: Dispatch<SetStateAction<UserData>>;
}

export const userContext = createContext<userValues>({} as userValues);
export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserData>({} as UserData);

  async function verifyLogged() {
    const cookies = parseCookies();
    if (cookies["@insta-recipe-token"]) {
      try {
        const res = await api.get("/user/retrieve", {
          headers: {
            Authorization: `Bearer ${cookies["@insta-recipe-token"]}`,
          },
        });
        axios.defaults.headers.common["Authorization"] =
          cookies["@insta-recipe-token"];

        setUser(res.data);
      } catch (error: unknown) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    verifyLogged();
  }, []);
  return (
    <userContext.Provider
      value={{
        setToken,
        token,
        user,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
export const useAuth = () => useContext(userContext);
