"use client";

import { LoginData, loginSchema } from "@/providers/user/interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles.css";
import Link from "next/link";
import { useAuth } from "@/providers/user/userProvider";
import { api } from "@/services/api";
import { setCookie } from "nookies";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Login() {
  const { token, setToken } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  async function formLogin(formData: LoginData) {
    try {
      const res = await api.post("/login", formData);

      setToken(res.data.token);
      setCookie(null, "@insta-recipe-token", res.data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      axios.defaults.headers.common["Authorization"] = res.data.token;
      router.push("/perfil");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form className="form" noValidate onSubmit={handleSubmit(formLogin)}>
        <h2 className="formTitle">login</h2>
        <label htmlFor="email">email</label>
        <input
          className="inputUser"
          id="email"
          type="email"
          {...register("email")}
        />
        <span className="errorSpan">
          {errors.email ? errors.email.message : ""}
        </span>
        <label htmlFor="password">password</label>
        <input
          className="inputUser"
          type="password"
          {...register("password")}
          id="password"
        />
        <span className="errorSpan">
          {errors.password ? errors.password.message : ""}
        </span>
        <button className="btnForm">Login</button>
      </form>
      <div>
        <h3>Ainda não possui conta?</h3>
        <Link href={"/user/cadastrar"}>Ir para o cadastro</Link>
      </div>
    </>
  );
}
