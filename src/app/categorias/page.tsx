import { api } from "@/services/api";

export default async function Categories() {
  const res = await api.get("/categories");
  console.log(res);
  return (
    <main>
      {res.data.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </main>
  );
}
