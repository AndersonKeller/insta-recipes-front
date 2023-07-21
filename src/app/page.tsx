import { CardRecipe } from "@/components/cardRecipe/CardRecipe";
import { Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";

export default async function Home() {
  const res = await api.get("/recipe");
  const recipes: Recipe[] = res.data;
  return (
    <main>
      <section>
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
