import "./styles.css";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
export function Header() {
  const router = useRouter();

  return (
    <header className="header">
      <h1>Insta recipe</h1>
      <button className="absolute left-4" onClick={() => router.back()}>
        <BsArrowLeftShort className="h-6 w-6" />
      </button>
    </header>
  );
}
