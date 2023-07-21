export interface Recipe {
  name: string;
  description: string | null;
  preparationMode: string;
  minutes: number;
  categorie: string;
  id: number;
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
