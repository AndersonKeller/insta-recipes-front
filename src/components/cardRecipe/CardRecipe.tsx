import { Recipe } from "@/providers/recipe/interfaces";
import "./styles.css";
interface CardRecipeProps {
  recipe: Recipe;
}
export function CardRecipe({ recipe }: CardRecipeProps) {
  return (
    <div
      className="flex flex-col bg-gray-600 p-2 rounded-tr-2xl rounded-bl-2xl
    hover:skew-x-1 hover:bg-gray-600/50 focus:skew-x-1 focus:bg-gray-600/50
    hover:border-gray-600 hover:border hover:border-solid"
    >
      <p>{recipe.name}</p>
      <p>{recipe.minutes} - min</p>
      <p>{recipe.categorie}</p>
    </div>
  );
}
