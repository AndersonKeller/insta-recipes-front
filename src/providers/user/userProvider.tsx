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
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const userContext = createContext<userValues>({} as userValues);
export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserData>({} as UserData);
  const [loading, setLoading] = useState(false);
  async function verifyLogged() {
    setLoading(true);
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

        setLoading(false);
      } catch (error: unknown) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    verifyLogged();
  }, []);
  return (
    <userContext.Provider
      value={{ loading, setLoading, setToken, token, user, setUser }}
    >
      {children}
    </userContext.Provider>
  );
}
export const useAuth = () => useContext(userContext);
