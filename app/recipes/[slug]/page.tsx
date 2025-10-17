import RecipeClient from "@/components/RecipeClient";
import { getRecipe } from "@/lib/recipeContent";
import { notFound } from "next/navigation";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeClient recipe={recipe} />;
}
