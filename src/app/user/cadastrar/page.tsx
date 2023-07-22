"use client";
import { UserData, userSchema } from "@/providers/user/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import "../styles.css";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
export default function Cadastrar() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });
  async function registerApi(userData: UserData) {
    console.log(userData);
    try {
      const res = await api.post("/user", userData);
      router.push("/user/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form noValidate onSubmit={handleSubmit(registerApi)} className="form">
        <h2>Cadastro</h2>
        <label htmlFor="">username</label>
        <input type="text" {...register("name")} />
        <span>{errors.name ? errors.name.message : ""}</span>
        <label htmlFor="">email</label>
        <input type="email" {...register("email")} />
        <span>{errors.email ? errors.email.message : ""}</span>
        <label htmlFor="">password</label>
        <input type="password" {...register("password")} />
        <span>{errors.password ? errors.password.message : ""}</span>
        <button className="btn-form" type="submit">
          Cadastrar
        </button>
      </form>
      <div>
        <h3>jà possui conta?</h3>
        <Link href={"/user/login"}>Ir para o login</Link>
      </div>
    </>
  );
}
