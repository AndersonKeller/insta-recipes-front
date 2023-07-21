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
}
export const recipeContext = createContext<recipeValues>({} as recipeValues);

export function RecipeProvider({ children }: RecipeProps) {
  const [recipes, setRecipes] = useState<Recipe[]>([] as Recipe[]);
  const [categories, setCategories] = useState<Categorie[]>([] as Categorie[]);
  const [category, setCategory] = useState<Categorie>(
    categories[0] as Categorie
  );
  async function getAllCategories() {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getRecipesByCategory() {
    try {
      const response = await api.get(`/categories/${category.name}`);

      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // getRecipesByCategory();
    getAllCategories();
  }, []);
  useEffect(() => {
    getRecipesByCategory();
  }, [category]);
  return (
    <recipeContext.Provider
      value={{ setCategory, category, categories, recipes }}
    >
      {children}
    </recipeContext.Provider>
  );
}
export const useRecipe = () => useContext(recipeContext);
