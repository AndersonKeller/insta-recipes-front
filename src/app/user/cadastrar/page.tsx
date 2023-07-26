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
        <h2 className="formTitle">Cadastro</h2>
        <label htmlFor="">username</label>
        <input className="inputUser" type="text" {...register("name")} />
        <span className="errorSpan">
          {errors.name ? errors.name.message : ""}
        </span>
        <label htmlFor="">email</label>
        <input className="inputUser" type="email" {...register("email")} />
        <span className="errorSpan">
          {errors.email ? errors.email.message : ""}
        </span>
        <label htmlFor="">password</label>
        <input
          className="inputUser"
          type="password"
          {...register("password")}
        />
        <span className="errorSpan">
          {errors.password ? errors.password.message : ""}
        </span>
        <button className="btnForm" type="submit">
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
