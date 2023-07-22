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
export default function Login() {
  const { token, setToken } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  function formLogin(formData: LoginData) {
    async function login(data: LoginData) {
      try {
        const res = await api.post("/login", data);
        setToken(res.data.token);
        setCookie(null, "@insta-recipe-token", token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        axios.defaults.headers.common["Authorization"] = res.data.token;
      } catch (error) {
        console.log(error);
      }
    }
    login(formData);
  }
  return (
    <>
      <form className="form" noValidate onSubmit={handleSubmit(formLogin)}>
        <h2>login</h2>
        <label htmlFor="email">email</label>
        <input id="email" type="email" {...register("email")} />
        <span className="error">
          {errors.email ? errors.email.message : ""}
        </span>
        <label htmlFor="password">password</label>
        <input type="password" {...register("password")} id="password" />
        <span className="error">
          {errors.password ? errors.password.message : ""}
        </span>
        <button className="btn-form">Login</button>
      </form>
      <div>
        <h3>Ainda não possui conta?</h3>
        <Link href={"/user/cadastrar"}>Ir para o cadastro</Link>
      </div>
    </>
  );
}
