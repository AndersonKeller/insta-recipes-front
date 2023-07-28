"use client";
import { useRecipe } from "@/providers/recipe/RecipeProvider";
import { RecipeData, recipeSchema } from "@/providers/recipe/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import "./styles.css";
import { useAuth } from "@/providers/user/userProvider";
export function CreteRecipeForm() {
  const { user } = useAuth();
  const { categories } = useRecipe();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipeData>({
    resolver: zodResolver(recipeSchema),
  });
  async function createRecipe(formData: RecipeData) {
    console.log(formData);
    console.log(user);
  }

  return (
    <form
      className="formCreate "
      noValidate
      onSubmit={handleSubmit(createRecipe)}
    >
      <p>Vamos começar pelo nome</p>
      <input type="text" {...register("name")} placeholder="Nome da receita" />
      <span className="errorSpan">
        {errors.name ? errors.name.message : ""}
      </span>
      <p>Uma descrição para a sua receita</p>
      <input type="text" {...register("description")} placeholder="descrição" />
      <span className="errorSpan">
        {errors.description ? errors.description.message : ""}
      </span>
      <p>Modo de preparo, capriche nos detalhes...</p>
      <textarea
        id="preparation"
        {...register("preparationMode")}
        placeholder="EX: misture os ingredientes, em seguida coloque em uma panela e mecha sem parar"
      />
      <span className="errorSpan">
        {errors.preparationMode ? errors.preparationMode.message : ""}
      </span>
      <p>Tempo de preparo em minutos (estimativa)</p>
      <input type="number" {...register("minutes")} />
      <span className="errorSpan">
        {errors.minutes ? errors.minutes.message : ""}
      </span>
      <p>Quantas porções ela rende? (estimativa)</p>
      <input type="number" {...register("rendimentPortions")} />
      <span className="errorSpan">
        {errors.rendimentPortions ? errors.rendimentPortions.message : ""}
      </span>
      <p>Escolha a categoria que ela se encaixa</p>
      {categories.map((category) => {
        return (
          <div key={category.id} className="group flex items-center gap-2">
            <input
              type="radio"
              {...register("categorie")}
              key={category.id}
              value={category.name}
            />
            <span
              className="block group-checked:text-red-300 bg-transparent 
              py-0 px-2 group-hover:bg-red-500 group-hover:w-full"
            >
              {category.name}
            </span>
          </div>
        );
      })}

      <span className="errorSpan">
        {errors.categorie ? errors.categorie.message : ""}
      </span>

      <button type="submit">Criar</button>
    </form>
  );
}
