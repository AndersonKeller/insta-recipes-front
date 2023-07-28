import { z } from "zod";
import { UserData, userSchema } from "../user/interfaces";

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
export interface Comments {
  id: number;
  comment: string;
  user: UserData;
}
export const ingredientSchema = z.object({
  name: z.string(),
});
export const recipeIngredientSchema = z.object({
  quantity: z.number(),
  quantityType: z.string(),
  ingredient: ingredientSchema,
});
export const recipeSchema = z.object({
  name: z.string().nonempty("Qual o nome da sua receita?"),
  description: z.string().nonempty("Forneça uma breve descrição"),
  preparationMode: z.string().min(5, "Descreva o modo de preparo"),
  minutes: z.string().nonempty("Você deve informar um tempo em minutos"),
  categorie: z
    .string({ invalid_type_error: "Escolha uma categoria" })
    .nonempty("Escolha uma categoria"),
  rendimentPortions: z
    .string()
    .nonempty("Voçê deve informar a quantidade de porções"),

  // recipesIngredients: recipeIngredientSchema,
});
export const returnRecipeSchema = recipeSchema.extend({
  user: userSchema,
});

export type RecipeData = z.infer<typeof recipeSchema>;
