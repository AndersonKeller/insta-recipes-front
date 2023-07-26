import { Lists } from "@/components/lists/Lists";
import { SearchInput } from "@/components/searchInput/SearchInput";
import { Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";

export default async function Home() {
  const res = await api.get("/recipe");
  const recipes: Recipe[] = res.data;

  return (
    <main>
      <SearchInput recipes={recipes} />
      <Lists list={recipes} />
    </main>
  );
}
