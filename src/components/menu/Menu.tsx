import Link from "next/link";
import "./styles.css";
export function Menu() {
  return (
    <section className="menu">
      <nav>
        <Link href={"/dashboard"}>Home</Link>
        <Link href={"/dashboard/categorias"}>Categorias</Link>
        <Link href={"/perfil"}>Perfil</Link>
      </nav>
    </section>
  );
}
