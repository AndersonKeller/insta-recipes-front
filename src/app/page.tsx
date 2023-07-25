import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <main
      className="mainDashboard bg-blue-500 fixed top-0 left-0 w-full h-screen flex items-center
    justify-center flex-col gap-3 px-4"
    >
      <h1 className="uppercase font-bold text-2xl">
        Bem vindo ao Insta recipe
      </h1>
      <h3 className="font-semibold text-base">
        Pronto para encontrar a sua receita hoje?
      </h3>
      <Image
        className="drop-shadow-md"
        alt="Logo"
        width={500}
        height={500}
        src={logo}
      />

      <Link
        className="uppercase py-2 px-5 font-bold bg-gray-500 rounded-xl
        hover:bg-gray-600/50 hover:text-red-300 hover:scale-110"
        href={"/dashboard"}
      >
        Bora lá
      </Link>
    </main>
  );
}
