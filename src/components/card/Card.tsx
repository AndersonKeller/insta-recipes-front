import "./styles.css";
import { Categorie } from "@/app/categorias/page";

interface CardProps {
  categories: Categorie[];
}
export function Card({ categories }: CardProps) {
  const names = categories.map((item) => item.name);
  const order = names.sort();

  return (
    <div className="cardCategorie">
      {order.map((item) => {
        return (
          <p
            className="text-xs p-2 rounded-lg bg-blue-100 text-gray-200 
          uppercase hover:bg-blue-400  hover:text-gray-100 w-max cursor-pointer"
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}
