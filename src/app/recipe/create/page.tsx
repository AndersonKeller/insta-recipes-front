import { CreteRecipeForm } from "@/components/createRecipe/CreateForm";

export default function CreateRecipe() {
  return (
    <main>
      <section className="pb-20">
        <h3>Vamos criar uma receita!</h3>
        <p>
          Tem aquela receita super bacana para compartilhar com a gente? então
          bora cria-lá
        </p>
        <CreteRecipeForm />
      </section>
    </main>
  );
}
