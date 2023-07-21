import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData, UserData } from "./interfaces";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { api } from "@/services/api";

interface UserProps {
  children: ReactNode;
}
interface userValues {
  //   user: UserData;
  login: (data: LoginData) => void;
}

export const userContext = createContext<userValues>({} as userValues);
export function UserProvider({ children }: UserProps) {
  const [token, setToken] = useState("");
  async function login(data: LoginData) {
    try {
      const res = await api.post("/login", data);
      console.log(res);
      setToken(res.data.token);
      setCookie(null, "@insta-recipe-token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function verifyLogged() {
    const cookies = parseCookies();
    if (cookies["@insta-recipe-token"]) {
      try {
        const res = await api.get("/user/retrieve", {
          headers: {
            Authorization: `Bearer ${cookies["@insta-recipe-token"]}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    verifyLogged();
  });
  return (
    <userContext.Provider value={{ login }}>{children}</userContext.Provider>
  );
}
