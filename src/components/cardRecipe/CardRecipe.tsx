import { Recipe } from "@/providers/recipe/interfaces";
import "./styles.css";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { LiaTrashAlt } from "react-icons/lia";
import { Button } from "./button/Button";
interface CardRecipeProps {
  recipe: Recipe;
  profile?: boolean;
}
export function CardRecipe({ recipe, profile }: CardRecipeProps) {
  return (
    <div
      className="flex relative flex-col bg-gray-600/70 gap-3 p-2 rounded-tr-2xl rounded-bl-2xl
    hover:skew-x-1 hover:bg-gray-600/50 focus:skew-x-1 focus:bg-gray-600/50
    hover:border-gray-600 hover:border hover:border-solid"
    >
      <div className="flex gap-1 w-max absolute ">
        <div className="rounded-full h-2 w-2 bg-blue-500"></div>
        <div className="rounded-full h-2 w-2 bg-red-500"></div>
        <div className="rounded-full h-2 w-2 bg-green-500"></div>
      </div>
      <p className="capitalize text-center">{recipe.name}</p>
      {profile && (
        <div className="absolute right-0 flex flex-col gap-1 transition-all">
          <Button legend={"Editar"}>
            <AiOutlineEdit className="h-5 w-5" />
          </Button>
          <Button legend="Excluir">
            <LiaTrashAlt className="h-5 w-5" />
          </Button>
        </div>
      )}
      <p className="text-sm mt-4 w-11/12">{recipe.description}</p>

      <div className="flex gap-2 items-center py-2">
        <BiTime className="h-5 w-5" />
        <p>{recipe.minutes} - min</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="px-2 py-1 text-sm bg-red-300 rounded-full w-max">
          {recipe.categorie}
        </span>
        <span className="text-sm lowercase px-2 py-1 bg-blue-200/70 w-max rounded-full">
          {recipe.rendimentPortions} Porções
        </span>
      </div>
      <div className="flex justify-between px-4">
        <p className="text-sm mt-2 italic">by @{recipe.user.name}</p>

        <Link
          className="bg-gray-500/70 px-4 rounded-2xl hover:bg-gray-600/50
          font-semibold hover:text-red-300 hover:font-bold flex items-center"
          href={`/recipe/${recipe.id}`}
        >
          Ver
        </Link>
      </div>
    </div>
  );
}
