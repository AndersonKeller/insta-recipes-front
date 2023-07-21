"use client";
import { useRecipe } from "@/providers/Recipeprovider";
import { Categorie } from "@/providers/interfaces";

interface CardCategoryProps {
  category: Categorie;
}

export function CardCategory({ category }: CardCategoryProps) {
  const { recipes } = useRecipe();
  return (
    <div className="bg-gray-600/50 rounded-lg p-3 m-h-[500px]">
      <h3 className="uppercase">{category.name}</h3>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => {
            return (
              <li>
                <p>{recipe.name}</p>
                <span>{recipe.minutes}</span>
                <div>
                  {recipe.recipesIngredients.map((item) => (
                    <span>{item.ingredient.name}</span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>Ainda sem receitas nesta categoria :(</h3>
      )}
    </div>
  );
}
