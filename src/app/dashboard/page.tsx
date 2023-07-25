import { CardRecipe } from "@/components/cardRecipe/CardRecipe";
import { SearchInput } from "@/components/searchInput/SearchInput";
import { Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";

export default async function Home() {
  const res = await api.get("/recipe");
  const recipes: Recipe[] = res.data;
  console.log(res.data);
  return (
    <main>
      <SearchInput recipes={recipes} />
      <section className="flex flex-col gap-1 mt-3 ">
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </section>
    </main>
  );
}
