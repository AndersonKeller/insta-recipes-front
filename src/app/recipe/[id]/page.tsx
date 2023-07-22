import { Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";

export default async function RecipeId({ params }: { params: { id: string } }) {
  const res = await api.get("/recipe");
  const recipes: Recipe[] = res.data;
  const recipe: Recipe | undefined = recipes.find(
    (recipe) => recipe.id === parseInt(params.id)
  );
  return (
    <main>
      <section className="bg-blue-100/10 rounded-tr-2xl rounded-bl-2xl mt-4 p-2">
        <h1>{recipe?.name}</h1>
      </section>
    </main>
  );
}
