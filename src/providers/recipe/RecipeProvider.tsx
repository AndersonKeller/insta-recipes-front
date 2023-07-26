"use client";
import { api } from "@/services/api";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Categorie, Recipe } from "./interfaces";
interface RecipeProps {
  children: ReactNode;
}
interface recipeValues {
  categories: Categorie[];
  category: Categorie;
  setCategory: Dispatch<SetStateAction<Categorie>>;
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  filteredRecipes: Recipe[];
  setFilteredRecipes: Dispatch<SetStateAction<Recipe[]>>;
}
export const recipeContext = createContext<recipeValues>({} as recipeValues);

export function RecipeProvider({ children }: RecipeProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([] as Recipe[]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(
    [] as Recipe[]
  );
  const [categories, setCategories] = useState<Categorie[]>([] as Categorie[]);
  const [category, setCategory] = useState<Categorie>({
    name: "aves",
    id: 1,
  } as Categorie);
  async function getAllCategories() {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getRecipes() {
    try {
      const response = await api.get(`/recipe`);

      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllCategories();
    getRecipes();
  }, []);

  return (
    <recipeContext.Provider
      value={{
        setCategory,
        category,
        categories,
        recipes,
        setRecipes,
        filteredRecipes,
        setFilteredRecipes,
      }}
    >
      {children}
    </recipeContext.Provider>
  );
}
export const useRecipe = () => useContext(recipeContext);
