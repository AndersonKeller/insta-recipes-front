import Link from "next/link";

export function NotLogged() {
  return (
    <div className="flex flex-col gap-2 text-sm py-2">
      <h2 className="text-lg">
        :( Que pena, para acessar essa página você deve estar logado...
      </h2>
      <p className="text-sm">
        Caso não possua conta você pode criar uma, bora lá?
      </p>
      <div className="w-full flex justify-between px-4 py-2">
        <Link
          className="p-2 text-center w-1/2 bg-green-400 rounded-tl-2xl"
          href={"/user/login"}
        >
          Fazer login
        </Link>
        <Link
          className="p-2 text-center w-1/2 bg-blue-400 rounded-br-2xl"
          href={"/user/cadastrar"}
        >
          Cadastrar
        </Link>
      </div>
    </div>
  );
}
