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

interface UserProps {
  children: ReactNode;
}
interface userValues {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

export const userContext = createContext<userValues>({} as userValues);
export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState("");

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
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    verifyLogged();
  }, []);
  return (
    <userContext.Provider value={{ setToken, token }}>
      {children}
    </userContext.Provider>
  );
}
export const useAuth = () => useContext(userContext);
