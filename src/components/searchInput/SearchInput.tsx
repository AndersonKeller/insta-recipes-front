"use client";
import { Recipe } from "@/providers/recipe/interfaces";
import { BiSearch } from "react-icons/bi";
import { useRecipe } from "@/providers/recipe/RecipeProvider";
interface SearchInputProps {
  recipes: Recipe[];
}
export function SearchInput({ recipes }: SearchInputProps) {
  const { setFilteredRecipes } = useRecipe();
  function searchRecipe(data: string) {
    if (data == "") {
      setFilteredRecipes([]);
    } else {
      const res = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(data.toLowerCase())
      );

      setFilteredRecipes(res);
    }
  }
  return (
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
  );
}
