import { Card } from "@/components/card/Card";
import { api } from "@/services/api";
export interface Categorie {
  id: number;
  name: string;
}
export default async function Categories() {
  const res = await api.get("/categories");
  console.log(res);
  return (
    <main>
      <Card categories={res.data} />
    </main>
  );
}
