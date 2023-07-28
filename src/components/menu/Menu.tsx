import Link from "next/link";

import "./styles.css";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { ButtonCreateMenu } from "./button/ButtonCreateMenu";

export function Menu() {
  return (
    <section className="menu">
      <nav>
        <Link href={"/dashboard"} className="nav-link-menu">
          <GoHome className="w-6 h-6" />
          <p>Home</p>
        </Link>
        <ButtonCreateMenu />

        <Link href={"/perfil"} className="nav-link-menu">
          <FaRegUser className="w-6 h-6" />
          <p>Perfil</p>
        </Link>
      </nav>
    </section>
  );
}
