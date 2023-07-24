"use client";
import { Recipe } from "@/providers/recipe/interfaces";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CardRecipe } from "../cardRecipe/CardRecipe";
interface SearchInputProps {
  recipes: Recipe[];
}
export function SearchInput({ recipes }: SearchInputProps) {
  const [filterRecipes, setFilterRecipes] = useState<Recipe[]>([] as Recipe[]);
  function searchRecipe(data: string) {
    if (data == "") {
      setFilterRecipes([]);
    } else {
      const res = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(data.toLowerCase())
      );

      setFilterRecipes(res);
    }
  }
  return (
    <>
      <fieldset
        className="flex items-center gap-2 py-3 border-2 border-gray-400
       justify-center w-11/12 mx-auto rounded-full mt-3 hover:w-full transition-all"
      >
        <BiSearch />

        <input
          type="text"
          onChange={(e) => searchRecipe(e.target.value)}
          placeholder="Procurar..."
          className="rounded-xl outline-none bg-transparent pl-3 hover:border-gray-500 
        hover:border-2 text-sm"
        />
      </fieldset>
      {filterRecipes.length > 0 && (
        <>
          {" "}
          <h2>Receitas encontradas</h2>
          <div className="h-screen">
            {filterRecipes.map((recipe) => {
              return <CardRecipe recipe={recipe} key={recipe.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
}
