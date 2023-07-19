import Link from "next/link";
import "./styles.css";
export function Menu() {
  return (
    <section className="menu">
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/categorias"}>Categorias</Link>
        <Link href={"/perfil"}>Perfil</Link>
      </nav>
    </section>
  );
}
