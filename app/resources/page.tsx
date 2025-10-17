import ResourcesClient from "@/components/ResourcesClient";
import { getAllBlogArticles } from "@/lib/blogContent";
import { getAllNewsArticles } from "@/lib/newsContent";
import { getAllRecipes } from "@/lib/recipeContent";
import { getAllResearchArticles } from "@/lib/researchContent";
import { Suspense } from "react";

export default function ResourcesPage() {
  const blogs = getAllBlogArticles();
  const news = getAllNewsArticles();
  const research = getAllResearchArticles();
  const recipes = getAllRecipes();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourcesClient
        blogs={blogs}
        news={news}
        research={research}
        recipes={recipes}
      />
    </Suspense>
  );
}
