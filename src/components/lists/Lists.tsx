"use client";
import "./styles.css";
import { useRecipe } from "@/providers/recipe/RecipeProvider";
import { CardRecipe } from "../cardRecipe/CardRecipe";
import { useEffect, useState } from "react";

import { Recipe } from "@/providers/recipe/interfaces";
interface ListsProps {
  list: Recipe[];
}
export function Lists({ list }: ListsProps) {
  const { recipes, categories, filteredRecipes } = useRecipe();
  const [showRecipes, setShowRecipes] = useState(list);
  const names = categories.map((item) => item.name);
  const order = names.sort();

  function defineCategory(item: string) {
    const res: Recipe[] | [] = recipes.filter(
      (recipe) => recipe.categorie == item
    );
    setShowRecipes(res);
  }
  function removeFilters() {
    setShowRecipes(recipes);
  }
  useEffect(() => {
    if (filteredRecipes.length > 0) {
      setShowRecipes(filteredRecipes);
    } else {
      setShowRecipes(recipes);
    }
  }, [filteredRecipes]);
  useEffect(() => {
    setShowRecipes(list);
  }, []);
  return (
    <section className="flex flex-col gap-1 mt-3 ">
      <h3 className="uppercase text-lg text-red-200 mt-2 font-bold">
        Categorias
      </h3>
      <button
        className="w-max text-xs px-2 py-1 rounded-lg uppercase
        bg-gray-600/50 flex hover:bg-gray-600/70 hover:text-red-100 font-medium"
        onClick={() => removeFilters()}
      >
        Remover filtros X
      </button>
      <div className="cardCategorie">
        {order.map((item, index) => {
          return (
            <button
              className="min-w-max text-xs px-2 py-1 rounded-lg bg-gray-500 text-gray-200 
          uppercase hover:bg-red-100  hover:text-gray-100 w-max cursor-pointer
          focus:bg-red-100"
              onClick={() => defineCategory(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>

      {showRecipes.length > 0 ? (
        showRecipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p>Que pena ;(, nenhuma receita com essa categoria encontrada</p>
      )}
    </section>
  );
}
