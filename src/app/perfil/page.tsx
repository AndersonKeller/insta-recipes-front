"use client";
import { useAuth } from "@/providers/user/userProvider";
import "./styles.css";
import Link from "next/link";
import Loading from "../loading";

export default function Perfil() {
  const { user, loading } = useAuth();

  return (
    <main>
      {loading && <Loading />}
      {user.name ? (
        <p>Bem vindo {user.name}</p>
      ) : (
        <div className="flex flex-col gap-2 text-sm py-2">
          <Link href={"/user/login"}>Fazer login</Link>
          <Link href={"/user/cadastrar"}>Cadastrar</Link>
        </div>
      )}
    </main>
  );
}
