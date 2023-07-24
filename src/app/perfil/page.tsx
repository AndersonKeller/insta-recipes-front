"use client";
import { useAuth } from "@/providers/user/userProvider";
import "./styles.css";

import Loading from "../loading";
import { NotLogged } from "@/components/notLogged/NotLogged";
import { useEffect, useState } from "react";
import { Recipe } from "@/providers/recipe/interfaces";
import { api } from "@/services/api";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { FiLogOut } from "react-icons/fi";
import { CardRecipe } from "@/components/cardRecipe/CardRecipe";
import { useRouter } from "next/navigation";
export default function Perfil() {
  const { user, loading, setUser } = useAuth();
  const [recipes, setRecipes] = useState<Recipe[]>([] as Recipe[]);
  const router = useRouter();
  async function getRecipesByUser() {
    const cookies = parseCookies();
    try {
      const res = await api.get("/user/recipes", {
        headers: {
          Authorization: `Bearer ${cookies["@insta-recipe-token"]}`,
        },
      });

      setRecipes(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  function logout() {
    destroyCookie(null, "@insta-recipe-token");
    setUser({ name: "", email: "", password: "" });
    router.push("/dashboard");
    console.log("logout");
  }
  useEffect(() => {
    user && getRecipesByUser();
  }, []);

  return (
    <main>
      {user.name ? (
        <div>
          <div className="flex w-full p-2 justify-between items-center">
            <p>Bem vindo, {user.name}</p>
            <button
              className="hover:bg-gray-600/50 hover:text-red-200 p-2 rounded-md"
              onClick={() => logout()}
            >
              <FiLogOut className="h-6 w-6" />
            </button>
          </div>
          <h3>Minhas receitas</h3>

          <section className="flex flex-col gap-1 mt-3 ">
            {recipes &&
              recipes.map((recipe) => (
                <CardRecipe key={recipe.id} recipe={recipe} />
              ))}
          </section>
        </div>
      ) : (
        <NotLogged />
      )}
    </main>
  );
}
