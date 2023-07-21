"use client";

import "./styles.css";

import { CardCategory } from "../cardCategory/CardCategory";
import { useRecipe } from "@/providers/recipe/RecipeProvider";
import { Categorie } from "@/providers/recipe/interfaces";

export function CategoriesList() {
  const { categories, category, setCategory } = useRecipe();
  const names = categories.map((item) => item.name);
  const order = names.sort();

  function defineCategory(item: string) {
    const finditem: Categorie | undefined = categories.find(
      (category) => category.name == item
    );
    finditem && setCategory(finditem);
  }
  return (
    <>
      <div className="cardCategorie">
        {order.map((item, index) => {
          return (
            <button
              className="min-w-max text-xs px-2 py-1 rounded-lg bg-gray-500 text-gray-200 
          uppercase hover:bg-red-100  hover:text-gray-100 w-max cursor-pointer"
              onClick={() => defineCategory(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
      {category && <CardCategory category={category} />}
    </>
  );
}
