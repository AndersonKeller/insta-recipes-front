import { Comments, Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";

export default async function RecipeId({ params }: { params: { id: string } }) {
  const res = await api.get("/recipe");
  const recipes: Recipe[] = res.data;
  const recipe: Recipe | undefined = recipes.find(
    (recipe) => recipe.id === parseInt(params.id)
  );
  const commentsApi = await api.get(`/comments/${params.id}`);
  const comments: Comments[] = commentsApi.data;
  return (
    <main>
      <section className="bg-blue-100/10 rounded-tr-2xl rounded-bl-2xl mt-4 p-2">
        <h1>{recipe?.name}</h1>
        <h3>{recipe?.description}</h3>
        <p>Ingredientes:</p>
        {recipe?.recipesIngredients.map((ingredient) => {
          return (
            <ul className="flex gap-2">
              <span>-</span>
              <li>{ingredient.quantity}</li>
              <li>{ingredient.quantityType}</li>
              <li>{ingredient.ingredient.name}</li>
            </ul>
          );
        })}
        <p>Modo de preparo</p>
        <p>{recipe?.preparationMode}</p>
      </section>
      <section>
        <h2>Comentários:</h2>
        {comments?.map((item: Comments) => {
          return (
            <>
              <p>{item.user.name} :</p>
              <p>{item.comment}</p>
            </>
          );
        })}
      </section>
    </main>
  );
}
