import { UserData } from "../user/interfaces";

export interface Recipe {
  name: string;
  description: string | null;
  preparationMode: string;
  minutes: number;
  categorie: string;
  id: number;
  rendimentPortions: number;
  user: UserData;
  recipesIngredients: RecipeIngredient[];
}
export interface Categorie {
  id: number;
  name: string;
}
export interface Ingredient {
  id: number;
  name: string;
}
export interface RecipeIngredient {
  id: number;
  quantity: number;
  quantityType: string;
  ingredient: Ingredient;
}
