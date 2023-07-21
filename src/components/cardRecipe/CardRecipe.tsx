import { Recipe } from "@/providers/recipe/interfaces";

interface CardRecipeProps {
  recipe: Recipe;
}
export function CardRecipe({ recipe }: CardRecipeProps) {
  return <p>{recipe.name}</p>;
}
